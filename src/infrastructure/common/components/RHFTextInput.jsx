import { useState } from 'react'
import { useController } from 'react-hook-form'
import { StyleSheet, TextInput, View } from 'react-native'
import { colorMap, textThemeMap } from '../repository'
import TextS12 from './TextS12'

const styles = StyleSheet.create({
  default: {
    height: 56,
    flex: 1,
    border: 1,
    borderRadius: 15,
    borderColor: colorMap.dark10,
    color: colorMap.dark,
    fontSize: 16,
    lineHeight: 24,
    paddingLeft: 18,
    paddingRight: 18
  },
  focused: {
    borderColor: colorMap.green
  },
  invalid: {
    borderColor: colorMap.invalid
  },
  valid: {
    borderColor: colorMap.valid
  },
  description: {
    marginTop: 4
  }
})

export default function RHFTextInput({
  control,
  name,
  onBlur: outerOnBlur,
  onFocus,
  onTextChange,
  style,
  validMessage,
  disabled,
  ...rest
}) {
  const {
    field: { onChange, onBlur, value },
    fieldState: { invalid, isDirty, error }
  } = useController({ control, name, disabled })
  const [isFocused, setIsFocused] = useState(false)
  const isValid = isDirty && !invalid && styles.valid
  return (
    <View style={style}>
      <TextInput
        style={[
          styles.default,
          isFocused && styles.focused,
          invalid && styles.invalid,
          isValid && styles.valid
        ]}
        onChangeText={onChange}
        onBlur={(e) => {
          onBlur()
          outerOnBlur?.(e)
          setIsFocused(false)
        }}
        onFocus={(e) => {
          onFocus?.()
          setIsFocused(true)
        }}
        value={value}
        {...rest}
      />
      {error && <TextS12 theme={textThemeMap.invalid}>{error}</TextS12>}
      {isValid && validMessage && (
        <TextS12 theme={textThemeMap.valid}>{validMessage}</TextS12>
      )}
    </View>
  )
}
