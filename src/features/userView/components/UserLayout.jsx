import { StyleSheet } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import { colorTypeToDefMap } from '../../../infrastructure/common/repository'
import PortalProvider from '../../../infrastructure/portal/components/PortalProvider'

const styles = StyleSheet.create({
  container: {
    backgroundColor: colorTypeToDefMap.lightDarker
  }
})

export default function UserLayout({ children, style, ...rest }) {
  return (
    <ScrollView style={[styles.container, style]} {...rest}>
      <PortalProvider>{children}</PortalProvider>
    </ScrollView>
  )
}
