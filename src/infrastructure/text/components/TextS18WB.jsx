import { StyleSheet, Text } from 'react-native'

const styles = StyleSheet.create({
  text: {
    color: 'rgb(18 20 23)',
    fontWeight: 'bold',
    fontSize: 18,
    lineHeight: 24
  }
})

export default function TextS18WB({ style, children, ...rest }) {
  return (
    <Text style={style ? { ...styles.text, ...style } : styles.text} {...rest}>
      {children}
    </Text>
  )
}
