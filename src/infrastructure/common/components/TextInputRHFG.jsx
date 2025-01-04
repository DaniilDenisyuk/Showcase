import { useController } from 'react-hook-form'
import FormGroupBase from './FormGroupBase'
import TextInput from './TextInput'

export default function TextInputRHFG({
  control,
  name,
  validMessage,
  disabled,
  ...rest
}) {
  const {
    field: { onChange, onBlur, value },
    fieldState: { isDirty, error }
  } = useController({ control, name, disabled })
  return (
    <FormGroupBase
      input={
        <TextInput onBlur={onBlur} onChangeText={onChange} value={value} />
      }
      isValid={isDirty && !error}
      isInvalid={!!error}
      validMessage={validMessage}
      invalidMessage={error}
      {...rest}
    />
  )
}
