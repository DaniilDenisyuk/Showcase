import { joiResolver } from '@hookform/resolvers/joi'
import Joi from 'joi'
import { memo } from 'react'
import { useForm } from 'react-hook-form'
import RHFPasswordInput from '../../../infrastructure/common/components/RHFPasswordInput'
import RHFTextInput from '../../../infrastructure/common/components/RHFTextInput'
import { layoutRepo } from '../../../infrastructure/layout/repository'
import { typeMap } from '../../userView/layout'
import { screenNameMap } from '../../userView/reactNavigation'
import { emailSchema, passwordSchema } from '../joi'
import { slice } from '../rtkQuery'
import GuestScreenContainer from './GuestScreenContainer'

const defaultValues = {
  name: '',
  email: '',
  password: ''
}

const schema = Joi.object({
  name: Joi.string().trim().min(2).required(),
  email: emailSchema.required(),
  password: passwordSchema.required()
})

export default memo(function RegistrationScreen() {
  layoutRepo.useSetLayout({ type: typeMap.guest })
  const { control, handleSubmit } = useForm({
    defaultValues,
    resolver: joiResolver(schema),
    reValidateMode: 'onBlur',
    mode: 'onBlur'
  })
  const [signIn, { isLoading }] = slice.endpoints.singIn.useMutation()
  return (
    <GuestScreenContainer
      heading="Register"
      description="To start using our services, please fill out the registration form
          below. All fields are mandatory:"
      inputs={
        <>
          <RHFTextInput name="name" control={control} />,
          <RHFTextInput name="email" control={control} />,
          <RHFPasswordInput name="password" control={control} />
        </>
      }
      submitButton={
        <GuestScreenContainer.SubmitButton
          onPress={handleSubmit(signIn)}
          isLoading={isLoading}
        >
          Register
        </GuestScreenContainer.SubmitButton>
      }
      screenLink={
        <GuestScreenContainer.ScreenLink screen={screenNameMap.Login}>
          Login
        </GuestScreenContainer.ScreenLink>
      }
    />
  )
})
