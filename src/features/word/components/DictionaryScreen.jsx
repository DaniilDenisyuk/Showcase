import { useNavigation } from '@react-navigation/native'
import { memo } from 'react'
import { StyleSheet, View } from 'react-native'
import { Pressable } from 'react-native-gesture-handler'
import { useDispatch, useSelector } from 'react-redux'
import Icon from '../../../infrastructure/common/components/Icon'
import TextS14 from '../../../infrastructure/common/components/TextS14'
import { colorTypeToDefMap } from '../../../infrastructure/common/repository'
import Popup from '../../../infrastructure/popup/components/Popup'
import Table from '../../../infrastructure/reactTable/components/Table'
import { tableRepo } from '../../../infrastructure/reactTable/repository'
import { disctionaryStackScreenNameMap } from '../reactNavigation'
import { selectDictionaryFilter, slice } from '../rtk'
import { wordRtkQuery } from '../rtkQuery'
import WordFilter from './WordFilter'

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    borderRadius: 15,
    paddingTop: 12,
    paddingRight: 24,
    paddingBottom: 12,
    paddingLeft: 24,
    boxShadow: `0 4 47 0 ${colorTypeToDefMap.dark8}`,
    gap: 8
  },
  button: {
    flexDirection: 'row',
    gap: 8
  }
})

function ActionCell(context) {
  const navigation = useNavigation()
  return (
    <Table.DataCellContainer {...tableRepo.getCellContainerProps(context)}>
      <Popup.Manager
        reference={
          <Popup.Trigger>
            <Table.CellText>...</Table.CellText>
          </Popup.Trigger>
        }
        floating={
          <Popup.FloatingContainer style={styles.container}>
            <Pressable
              onPress={navigation.navigate(
                disctionaryStackScreenNameMap.UpdateWord
              )}
              style={styles.button}
            >
              <Icon.Edit2 />
              <TextS14>Edit</TextS14>
            </Pressable>
            <Pressable
              onPress={navigation.navigate(
                disctionaryStackScreenNameMap.UpdateWord
              )}
              style={styles.button}
            >
              <Icon.Trash2 />
              <TextS14>Delete</TextS14>
            </Pressable>
          </Popup.FloatingContainer>
        }
      />
    </Table.DataCellContainer>
  )
}

const columns = [
  tableRepo.columnHelper.accessor('word', {
    header: 'Word',
    width: 80
  }),
  tableRepo.columnHelper.accessor('translation', {
    header: 'Translation',
    width: 110
  }),
  tableRepo.columnHelper.accessor('progress', {
    header: 'Progress',
    width: 95
  }),
  tableRepo.columnHelper.display({
    width: 50,
    cell: ActionCell
  })
]

export default memo(function DictionaryScreen() {
  const filter = useSelector(selectDictionaryFilter)
  const { isLoading, data } = wordRtkQuery.endpoints.getList.useQuery({
    params: filter
  })
  const dispatch = useDispatch()
  const setFilter = (data) => {
    dispatch(slice.actions.setDictionaryFilter(data))
  }
  return (
    <View>
      <WordFilter {...filter} onChange={setFilter} />
      <Table columns={columns} data={data} isLoading={isLoading} />
    </View>
  )
})
