import { useState } from 'react'
import { TextInput as RNTextInput } from 'react-native'
import { formTextInputStyleSheet } from '../repository'

export default function TextInput({ onBlur, onFocus, style, ...rest }) {
  const [isFocused, setIsFocused] = useState(false)
  return (
    <RNTextInput
      style={[
        style,
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
  )
}
