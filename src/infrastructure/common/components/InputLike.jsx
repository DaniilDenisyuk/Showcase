import { isBoolean } from 'lodash-es'
import { StyleSheet, View } from 'react-native'
import { colorTypeToDefMap } from '../repository'

export const styles = StyleSheet.create({
  base: {
    height: 56,
    flex: 1,
    border: 1,
    borderRadius: 15,
    borderColor: colorTypeToDefMap.dark10,
    color: colorTypeToDefMap.dark,
    fontSize: 16,
    lineHeight: 24,
    paddingLeft: 18,
    paddingRight: 18
  },
  focused: {
    borderColor: colorTypeToDefMap.green
  },
  invalid: {
    borderColor: colorTypeToDefMap.invalid
  },
  valid: {
    borderColor: colorTypeToDefMap.valid
  }
})

export default function InputLike({
  As = View,
  children,
  style,
  isValid,
  isFocused,
  ...rest
}) {
  return (
    <As
      style={[
        styles.base,
        isFocused && styles.focused,
        isBoolean(isValid) && !isValid && styles.valid,
        isBoolean(isValid) && !isValid && styles.invalid,
        style
      ]}
      {...rest}
    >
      {children}
    </As>
  )
}
