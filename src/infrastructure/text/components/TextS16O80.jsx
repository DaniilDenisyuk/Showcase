import { StyleSheet, Text } from 'react-native'

const styles = StyleSheet.create({
  text: {
    color: 'rgba(18 20 23 / 0.8)',
    fontSize: 16,
    lineHeight: 24
  }
})

export default function TextS16O80({ style, children, ...rest }) {
  return (
    <Text style={style ? { ...styles.text, ...style } : styles.text} {...rest}>
      {children}
    </Text>
  )
}
