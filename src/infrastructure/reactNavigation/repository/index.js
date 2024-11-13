import { useNavigation, usePreventRemove } from '@react-navigation/native'
import { useCallback } from 'react'
import { Alert } from 'react-native'
import LoadingScreen from '../../common/components/LoadingScreen'

export const canGoBackScreenNameMap = {}

export const config = {
  initialScreen: LoadingScreen
}

export const usePreventLeaveUnsaved = (isUnsaved) => {
  const navigation = useNavigation()
  return usePreventRemove(
    isUnsaved,
    useCallback(({ data }) => {
      // if (Platform.OS === 'web') {
      //   const discard = confirm(
      //     'You have unsaved changes. Discard them and leave the screen?'
      //   )

      //   if (discard) {
      //     navigation.dispatch(data.action)
      //   }
      // } else {
      Alert.alert(
        'Discard changes?',
        'You have unsaved changes. Discard them and leave the screen?',
        [
          { text: "Don't leave", style: 'cancel', onPress: () => {} },
          {
            text: 'Discard',
            style: 'destructive',
            onPress: () => navigation.dispatch(data.action)
          }
        ]
      )
      // }
    }),
    [navigation.dispatch]
  )
}

export const navRepo = {
  config,
  canGoBackScreenNameMap
}
