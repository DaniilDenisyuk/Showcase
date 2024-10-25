import { memo } from 'react'
import { Image, StyleSheet, View } from 'react-native'

const styles = StyleSheet.create({
  image: {
    marginTop: 12,
    marginBottom: 8
  },
  container: {
    paddingTop: 32,
    paddingRight: 16,
    paddingBottom: 32,
    paddingLeft: 16
  },
  heading: {
    marginTop: 32,
    marginBottom: 16
  },
  description: {
    marginBottom: 16
  },
  form: {
    marginBottom: 32,
    gap: 14
  },
  input: { height: 56 },
  submit: {},
  login: {}
})

export default memo(function LoginScreen() {
  return (
    <View>
      <Image source={require('./src/assets/pictures/readVocab.png')} />
    </View>
  )
})
