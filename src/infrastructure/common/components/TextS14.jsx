import { StyleSheet } from 'react-native'
import Text from './Text'

const styles = StyleSheet.create({
  text: {
    fontSize: 14,
    lineHeight: 20
  }
})

export default function TextS14({ style, children, ...rest }) {
  return (
    <Text style={[styles.text, style]} {...rest}>
      {children}
    </Text>
  )
}
