import { StyleSheet, Text } from 'react-native'

const styles = StyleSheet.create({
  text: {
    fontWeight: 'bold',
    fontSize: 18,
    lineHeight: 24
  }
})

export default function TextS18WB({ style, children, ...rest }) {
  return (
    <Text style={[styles.text, style]} {...rest}>
      {children}
    </Text>
  )
}
