import { joiResolver } from '@hookform/resolvers/joi'
import Joi from 'joi'
import { memo } from 'react'
import { useForm } from 'react-hook-form'
import RHFPasswordInput from '../../../infrastructure/common/components/RHFPasswordInput'
import TextInputRHFG from '../../../infrastructure/common/components/TextInputRHFG'
import { layoutRepo } from '../../../infrastructure/layout/repository'
import { typeMap } from '../../userView/layout'
import { screenNameMap } from '../../userView/reactNavigation'
import { emailSchema, passwordSchema } from '../joi'
import { slice } from '../rtkQuery'
import GuestScreenBase from './GuestScreen'

const defaultValues = {
  email: '',
  password: ''
}

const schema = Joi.object({
  email: emailSchema.required(),
  password: passwordSchema.required()
})

export default memo(function LoginScreen() {
  layoutRepo.useSetLayout({ type: typeMap.guest })
  const { control, handleSubmit } = useForm({
    defaultValues,
    resolver: joiResolver(schema)
  })
  const [signIn, { isLoading }] = slice.endpoints.singIn.useMutation()
  return (
    <GuestScreenBase
      shouldShowText
      heading="Login"
      description="Please enter your login details to continue using our service:"
      inputs={
        <>
          <TextInputRHFG name="email" control={control} />,
          <RHFPasswordInput name="password" control={control} />
        </>
      }
      submitButton={
        <GuestScreenBase.SubmitButton
          onPress={handleSubmit(signIn)}
          isLoading={isLoading}
        >
          Login
        </GuestScreenBase.SubmitButton>
      }
      screenLink={
        <GuestScreenBase.ScreenLink screen={screenNameMap.Registration}>
          Register
        </GuestScreenBase.ScreenLink>
      }
    />
  )
})
