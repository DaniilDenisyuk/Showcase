import { debounce } from 'lodash-es'
import { useCallback, useMemo, useState } from 'react'
import { StyleSheet } from 'react-native'
import { FlatList, Pressable } from 'react-native-gesture-handler'
import Popup from '../../popup/components/Popup'
import { useFloatingProps } from '../../popup/floatingUI'
import { useManagerContext } from '../../popup/repository'
import { textThemeMap } from '../repository'
import FormTextInput from './FormTextInput'
import TextS16 from './TextS16'

const optionStyle = StyleSheet.create({
  container
})

const Option = ({ option, getLabel, getIsSelected, onPress }) => {
  const isSelected = getIsSelected(option)
  return (
    <Pressable
      onPress={() => onPress(option)}
      style={[
        optionStyle.container,
        isSelected && optionStyle.containerSelected
      ]}
    >
      <TextS16 theme={isSelected ? textThemeMap.green : textThemeMap.dark50}>
        {getLabel(option)}
      </TextS16>
    </Pressable>
  )
}

const Options = ({ options, getLabel, getKey, getIsSelected, onChange }) => {
  return (
    <FlatList
      data={options}
      keyExtractor={getKey}
      renderItem={useCallback(
        ({ item }) => (
          <Option
            option={item}
            getLabel={getLabel}
            getIsSelected={getIsSelected}
            onPress={onChange}
          />
        ),
        [onChange, getIsSelected, getLabel]
      )}
    >
      {options.map((option) => (
        <Option
          key={getKey(option)}
          option={option}
          getLabel={getLabel}
          getIsSelected={getIsSelected}
        />
      ))}
    </FlatList>
  )
}

const Value = ({ value, filter, getLabel }) => {
  const { isOpened } = useManagerContext()
  const props = useFloatingProps()
  return <FormTextInput {...props} />
}

export const Combobox = ({ value, options, getLabel, onChange }) => {
  const [filter, setFilter] = useState('')
  const debouncedSetFilter = useCallback(debounce(setFilter, 250), [])
  const optionLabels = useMemo(() => options.map(getLabel), [options, getLabel])
  const filteredOptions = useMemo(
    () =>
      filter
        ? options.filter((_, index) => optionLabels[index].includes(filter))
        : options,
    [options, filter]
  )
  return (
    <Popup.Manager
      reference={<Value value={value} onChangeText={debouncedSetFilter} />}
      floating={<Options options={filteredOptions} getLabel={getLabel} />}
    />
  )
}
