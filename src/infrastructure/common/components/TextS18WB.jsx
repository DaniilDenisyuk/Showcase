import { StyleSheet } from 'react-native'
import TextS18 from './TextS18'

const styles = StyleSheet.create({
  text: {
    fontWeight: 'bold'
  }
})

export default function TextS18WB({ style, children, ...rest }) {
  return (
    <TextS18 style={[styles.text, style]} {...rest}>
      {children}
    </TextS18>
  )
}
