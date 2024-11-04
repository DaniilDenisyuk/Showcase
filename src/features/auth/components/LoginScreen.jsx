import { joiResolver } from '@hookform/resolvers/joi'
import Joi from 'joi'
import { memo } from 'react'
import { useForm } from 'react-hook-form'
import RHFPasswordInput from '../../../infrastructure/common/components/RHFPasswordInput'
import RHFTextInput from '../../../infrastructure/common/components/RHFTextInput'
import { layoutRepo } from '../../../infrastructure/layout/repository'
import { emailSchema, passwordSchema } from '../joi'
import { typeMap } from '../layout'
import { screenNameMap } from '../navigation'
import { slice } from '../rtkQuery'
import GuestScreenContainer from './GuestScreenContainer'

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
    <GuestScreenContainer
      shouldShowText
      heading="Login"
      description="Please enter your login details to continue using our service:"
      inputs={
        <>
          <RHFTextInput name="email" control={control} />,
          <RHFPasswordInput name="password" control={control} />
        </>
      }
      submitButton={
        <GuestScreenContainer.SubmitButton
          onPress={handleSubmit(signIn)}
          isLoading={isLoading}
        >
          Login
        </GuestScreenContainer.SubmitButton>
      }
      screenLink={
        <GuestScreenContainer.ScreenLink screen={screenNameMap.Registration}>
          Register
        </GuestScreenContainer.ScreenLink>
      }
    />
  )
})
