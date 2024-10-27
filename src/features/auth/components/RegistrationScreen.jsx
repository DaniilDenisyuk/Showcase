import { memo } from 'react'
import { View } from 'react-native'
import { layoutRepo } from '../../../infrastructure/layout/repository'

export default memo(function RegistrationScreen() {
  layoutRepo.useSetType({ type: typeMap.guest })
  return <View></View>
})
