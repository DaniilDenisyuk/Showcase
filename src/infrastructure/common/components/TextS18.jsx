import { StyleSheet } from 'react-native'
import Text from './Text'

const styles = StyleSheet.create({
  text: {
    fontSize: 18,
    lineHeight: 24
  }
})

export default function TextS18({ style, children, ...rest }) {
  return (
    <Text style={[styles.text, style]} {...rest}>
      {children}
    </Text>
  )
}
