import { memo } from 'react'
import { View } from 'react-native'
import RHFTextInput from '../../../infrastructure/common/components/RHFTextInput'
import { layoutRepo } from '../../../infrastructure/layout/repository'

const styles = StyleSheet.create({
  image: {
    marginBottom: 8
  },
  contentContainer: {
    paddingTop: 32,
    paddingRight: 16,
    paddingBottom: 32,
    paddingLeft: 16
  },
  heading: {
    marginTop: 32,
    marginBottom: 16
  },
  description: {
    marginBottom: 16
  },
  form: {
    marginBottom: 32,
    gap: 14
  },
  submit: {},
  login: {}
})

export default memo(function RegistrationScreen() {
  layoutRepo.useSetLayout({ type: typeMap.guest })
  const {} = useForm({
    defaultValues
  })
  return (
    <View>
      <Image
        style={styles.image}
        source={require('./src/assets/pictures/readVocab.png')}
      />
      <View>
        <HeadingS30WB style={styles.heading}>Register</HeadingS30WB>
        <TextS16Dark80 style={styles.description}>
          To start using our services, please fill out the registration form
          below. All fields are mandatory:
        </TextS16Dark80>
        <View style={styles.inputGroup}>
          <RHFTextInput name="name" />
          <RHFTextInput name="email" />
          <RHFTextInput name="email" />
        </View>
        <Button></Button>
      </View>
    </View>
  )
})
