import { View } from 'react-native'
import { KeyboardProvider } from 'react-native-keyboard-controller'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import Text from './infrastructure/common/components/Text'
import ReduxProvider from './infrastructure/redux/components/ReduxProvider'

export default function App() {
  return (
    <ReduxProvider>
      <KeyboardProvider>
        <SafeAreaProvider>
          <View>
            <Text>Hello World</Text>
          </View>
        </SafeAreaProvider>
      </KeyboardProvider>
    </ReduxProvider>
  )
}
