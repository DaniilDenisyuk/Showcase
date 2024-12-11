import { joiResolver } from '@hookform/resolvers/joi'
import { useForm } from 'react-hook-form'
import { Text, View } from 'react-native'
import { useSelector } from 'react-redux'
import { filterSchema } from '../joi'
import { selectDictionaryFilter } from '../rtk'

export default function WordFilter() {
  const defaultValues = useSelector(selectDictionaryFilter)
  const { handleSubmit } = useForm({
    defaultValues,
    resolver: joiResolver(filterSchema)
  })
  return (
    <View>
      <Text>WordFilter</Text>
    </View>
  )
}
