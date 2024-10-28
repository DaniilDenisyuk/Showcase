import { useState } from 'react'
import { TextInput, View } from 'react-native'
import { formTextInputStyleSheet, textThemeMap } from '../repository'
import TextS12 from './TextS12'

export default function FormTextInput({
  onBlur,
  onFocus,
  style,
  isValid,
  isInvalid,
  validMessage,
  invalidMessage,
  ...rest
}) {
  const [isFocused, setIsFocused] = useState(false)
  return (
    <View style={style}>
      <TextInput
        style={[
          formTextInputStyleSheet.default,
          isFocused && formTextInputStyleSheet.focused,
          isInvalid && formTextInputStyleSheet.invalid,
          isValid && formTextInputStyleSheet.valid
        ]}
        onBlur={(e) => {
          onBlur?.(e)
          setIsFocused(false)
        }}
        onFocus={(e) => {
          onFocus?.(e)
          setIsFocused(true)
        }}
        {...rest}
      />
      {isInvalid && invalidMessage && (
        <TextS12 theme={textThemeMap.invalid}>{invalidMessage}</TextS12>
      )}
      {isValid && validMessage && (
        <TextS12 theme={textThemeMap.valid}>{validMessage}</TextS12>
      )}
    </View>
  )
}
