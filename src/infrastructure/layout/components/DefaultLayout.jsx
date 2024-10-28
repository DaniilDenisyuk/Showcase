import { StatusBar, StyleSheet } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import { SafeAreaView } from 'react-native-safe-area-context'
import { colorTypeToDefMap } from '../../common/repository'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colorTypeToDefMap.green,
    alignItems: 'center',
    justifyContent: 'center'
  }
})

export default function DefaultLayout({ children, ...rest }) {
  return (
    <SafeAreaView {...rest} style={styles.container}>
      <StatusBar
        animated={true}
        translucent
        backgroundColor="transparent"
        barStyle="light-content"
      />
      <ScrollView>{children}</ScrollView>
    </SafeAreaView>
  )
}
