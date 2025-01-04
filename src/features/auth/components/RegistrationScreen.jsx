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
    <GuestScreenBase.Container
      heading="Register"
      description="To start using our services, please fill out the registration form
          below. All fields are mandatory:"
      inputs={
        <>
          <TextInputRHFG name="name" control={control} />,
          <TextInputRHFG name="email" control={control} />,
          <RHFPasswordInput name="password" control={control} />
        </>
      }
      submitButton={
        <GuestScreenBase.SubmitButton
          onPress={handleSubmit(signIn)}
          isLoading={isLoading}
        >
          Register
        </GuestScreenBase.SubmitButton>
      }
      screenLink={
        <GuestScreenBase.ScreenLink screen={screenNameMap.Login}>
          Login
        </GuestScreenBase.ScreenLink>
      }
    />
  )
})
