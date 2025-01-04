import { useState } from 'react'
import { TextInput as RNTextInput } from 'react-native'
import InputLike from './InputLike'

export default function TextInput({ onBlur, onFocus, ...rest }) {
  const [isFocused, setIsFocused] = useState(false)
  return (
    <InputLike
      As={RNTextInput}
      isFocused={isFocused}
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
