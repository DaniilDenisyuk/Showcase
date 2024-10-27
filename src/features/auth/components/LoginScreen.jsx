import { memo } from 'react'
import { useForm } from 'react-hook-form'
import { Image, StyleSheet, TextInput, View } from 'react-native'
import HeadingS30WB from '../../../infrastructure/common/components/HeadingS30WB'
import TextS16Dark80 from '../../../infrastructure/common/components/TextS16Dark80'
import { layoutRepo } from '../../../infrastructure/layout/repository'
import { typeMap } from '../layout'

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
  input: { height: 56 },
  submit: {},
  login: {}
})

const defaultValues = { email: '', password: '' }

export default memo(function LoginScreen() {
  layoutRepo.useSetType({ type: typeMap.guest })
  const {} = useForm({
    defaultValues,
    validators: {}
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
          <TextInput style={styles.input} />
          <TextInput style={styles.input} />
          <TextInput style={styles.input} />
        </View>
        <Button></Button>
      </View>
    </View>
  )
})
