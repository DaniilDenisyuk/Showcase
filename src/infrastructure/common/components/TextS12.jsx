import { StyleSheet } from 'react-native'
import Text from './Text'

const styles = StyleSheet.create({
  text: {
    fontSize: 12,
    lineHeight: 18
  }
})

export default function TextS12({ style, children, ...rest }) {
  return (
    <Text style={[styles.text, style]} {...rest}>
      {children}
    </Text>
  )
}
