import { StyleSheet, Text } from 'react-native'

const styles = StyleSheet.create({
  text: {
    color: 'rgb(18 20 23)',
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
    <Text
      role={role}
      style={style ? { ...styles.text, ...style } : styles.text}
      {...rest}
    >
      {children}
    </Text>
  )
}
