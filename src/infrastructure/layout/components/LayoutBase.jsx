import { ScrollView } from 'react-native-gesture-handler'
import { SafeAreaView } from 'react-native-safe-area-context'

export default function LayoutBase({ children, ...rest }) {
  return (
    <SafeAreaView {...rest}>
      <ScrollView>{children}</ScrollView>
    </SafeAreaView>
  )
}
