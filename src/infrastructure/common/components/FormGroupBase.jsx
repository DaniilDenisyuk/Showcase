import { View } from 'react-native'
import { textThemeMap } from '../repository'
import TextS12 from './TextS12'

export default function FormGroupBase({
  style,
  isValid,
  isInvalid,
  input,
  validMessage,
  invalidMessage,
  ...rest
}) {
  return (
    <View style={style} {...rest}>
      {input}
      {isInvalid && invalidMessage && (
        <TextS12 theme={textThemeMap.invalid}>{invalidMessage}</TextS12>
      )}
      {isValid && validMessage && (
        <TextS12 theme={textThemeMap.valid}>{validMessage}</TextS12>
      )}
    </View>
  )
}
