import { flow } from 'lodash-es'
import { createContext, useCallback, useEffect, useMemo, useState } from 'react'
import { StyleSheet } from 'react-native'
import { FlatList, Pressable } from 'react-native-gesture-handler'
import InputLike from '../../common/components/InputLike'
import TextS16 from '../../common/components/TextS16'
import { textThemeMap } from '../../common/repository'
import Popup from '../../popup/components/Popup'
import { useFloatingProps, useReferenceProps } from '../../popup/floatingUI'
import { useManagerContext } from '../../popup/repository'
//1. Components: Trigger, OptionLabel, Filter, ListBox, Option

const useManager = ({ value, setValue, options, getOptionLabel }) => {
  const [filter, setFilter] = useState('')
  const optionLabels = useMemo(
    () => options.map(getOptionLabel),
    [options, getOptionLabel]
  )
  const filteredOptions = useMemo(
    () =>
      filter
        ? options.filter((_, index) => optionLabels[index].includes(filter))
        : options,
    [options, filter]
  )
  const suggestion = useMemo(
    () => filter && filteredOptions[0],
    [filteredOptions]
  )
  const { isOpened } = popupHooks.useStateContext()
  useEffect(() => {
    if (!isOpened) {
      return
    }
    if (suggestion) {
      setValue(suggestion)
    }
    if (!value) {
      setFilter('')
    }
  }, [isOpened])
  return {
    isOpened,
    value,
    filter,
    options,
    suggestion,
    filteredOptions,
    setFilter,
    getLabel
  }
}

const useStateContext = () => {}

const useActionContext = () => {}

const useList = () => {
  const { filteredOptions, getId } = useManagerContext()
}

const Option = ({ item }) => {
  const { getLabel, getIsSelected } = useOptionsContext()
  const { setValue } = useInteractionsContext()
  const isSelected = getIsSelected(item)
  return (
    <Pressable
      onPress={() => setValue(item)}
      style={[
        optionStyle.container,
        isSelected && optionStyle.containerSelected,
        style
      ]}
      {...rest}
    >
      <TextS16 theme={isSelected ? textThemeMap.green : textThemeMap.dark50}>
        {getLabel(item)}
      </TextS16>
    </Pressable>
  )
}

const List = ({ getOptionKey }) => {
  const { filteredOptions } = useOptionsContext()
  return (
    <FlatList
      data={filteredOptions}
      renderItem={Option}
      keyExtractor={getOptionKey}
    />
  )
}

const useManagerRN = () => {}

const optionStyle = StyleSheet.create({
  container: {}
})

const useOption = ({ middlewares }) => {
  const managerContext = useManagerContext()
  return useMemo(() => {
    const optionData = { toggle: managerContext.toggleOption }
    return middlewares.length
      ? flow(...middlewares)(optionData, managerContext)
      : optionData
  }, [...middlewares, managerContext])
}

const Option = ({ children, style, option, ...rest }) => {
  const { getIsOptionSelected, toggleOption } = useManagerContext()
  const isSelected = getIsOptionSelected(option)
  return (
    <Pressable
      onPress={() => toggleOption(option)}
      style={[
        optionStyle.container,
        isSelected && optionStyle.containerSelected,
        style
      ]}
      {...rest}
    >
      <TextS16 theme={isSelected ? textThemeMap.green : textThemeMap.dark50}>
        {children}
      </TextS16>
    </Pressable>
  )
}

const useOptions = ({ middlewares }) => {
  const managerContext = useManagerContext()
  return useMemo(() => {
    const optionData = { toggle: managerContext.toggleOption }
    return middlewares.length
      ? flow(...middlewares)(optionData, managerContext)
      : optionData
  }, [...middlewares, managerContext])
}

const Options = () => {
  const { filteredOptions, getOption, getId } = useManagerContext()
  return (
    <FlatList
      data={filteredOptions}
      keyExtractor={getId}
      renderItem={useCallback(({ item }) => getOption(item), [getOption])}
    />
  )
}

const NonExpanded = () => {
  const { onPress, ref } = useReferenceProps()
  const { value, isOpened, getOptionLabel } = useManagerContext()
  return (
    <InputLike ref={ref} As={Pressable} onPress={onPress} {...props}>
      {getOptionLabel(value)}
    </InputLike>
  )
}

const Expanded = () => {
  const { onPress, ref } = useReferenceProps()
  const { value, isOpened, getOptionLabel } = useManagerContext()
  return (
    <InputLike ref={ref} As={Pressable} onPress={onPress} {...props}>
      {getOptionLabel(value)}
    </InputLike>
  )
}

const Value = () => {
  const props = useFloatingProps()
  const { value, isOpened, getOptionLabel } = useManagerContext()
  return <InputLike {...props}>{getOptionLabel(value)}</InputLike>
}

const Context = createContext({})

const ManagerBase = ({ value, options, getLabel, getId, onChange }) => {
  const context = useManager({ value, options, getLabel, getId })
  return (
    <Context.Provider value={context}>
      <Popup.Structure
        reference={
          <Value
            value={value}
            suggestion={suggestion}
            onChangeText={debouncedSetFilter}
          />
        }
        floating={
          <>
            <Value value={value} getLabel={getLabel} />
            <Options options={filteredOptions} getLabel={getLabel} />
          </>
        }
      />
    </Context.Provider>
  )
}

const Manager = ({}) => {
  return (
    <Popup.Manager>
      <ManagerBase />
    </Popup.Manager>
  )
}

export default { Manager, Value, Options, Option }
