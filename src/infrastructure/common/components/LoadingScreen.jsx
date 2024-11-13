import ExtendedLogo from './ExtendedLogo'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colorTypeToDefMap.green,
    alignItems: 'center',
    justifyContent: 'center'
  }
})

export default function LoadingScreen() {
  return (
    <SafeAreaView {...rest} style={styles.container}>
      <StatusBar
        animated={true}
        translucent
        backgroundColor="transparent"
        barStyle="light-content"
      />
      <ExtendedLogo />
    </SafeAreaView>
  )
}
