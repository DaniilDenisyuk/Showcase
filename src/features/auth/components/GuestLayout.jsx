import { StatusBar, StyleSheet } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { colorTypeToDefMap } from '../../../infrastructure/common/repository'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colorTypeToDefMap.light
  }
})

export default function GuestLayout({ children, ...rest }) {
  return (
    <SafeAreaView {...rest} style={styles.container}>
      <StatusBar
        animated
        translucent
        backgroundColor="transparent"
        barStyle="dark-content"
      />
      {children}
    </SafeAreaView>
  )
}
