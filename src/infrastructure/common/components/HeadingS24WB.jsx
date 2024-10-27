import { StyleSheet } from 'react-native'
import Text from './Text'

const styles = StyleSheet.create({
  text: {
    fontWeight: 'bold',
    fontSize: 24,
    lineHeight: 28
  }
})

export default function HeadingS24WB({
  style,
  children,
  role = 'heading',
  ...rest
}) {
  return (
    <Text role={role} style={[styles.text, style]} {...rest}>
      {children}
    </Text>
  )
}
