import { ScrollView } from 'react-native-gesture-handler'
import { SafeAreaInsetsContext } from 'react-native-safe-area-context'

export default function LayoutBase() {
  return (
    <ScrollView>
      <SafeAreaInsetsContext></SafeAreaInsetsContext>
    </ScrollView>
  )
}
