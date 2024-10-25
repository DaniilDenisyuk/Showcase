import { StyleSheet, Text } from 'react-native'

const styles = StyleSheet.create({
  text: {
    color: 'rgb(18 20 23)',
    fontWeight: 'bold',
    fontSize: 30,
    lineHeight: 32
  }
})

export default function HeadingS32WB({
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
