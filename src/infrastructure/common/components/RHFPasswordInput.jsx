import { useController } from 'react-hook-form'
import PasswordInputFG from './PasswordInputFG'

export default function RHFPasswordInput({
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
    <PasswordInputFG
      onBlur={onBlur}
      onChangeText={onChange}
      value={value}
      isValid={isDirty && !error}
      isInvalid={!!error}
      validMessage={validMessage}
      invalidMessage={error}
      {...rest}
    />
  )
}
