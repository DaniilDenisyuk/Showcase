import { isString } from 'lodash-es'
import { StyleSheet, View } from 'react-native'
import {
  KeyboardAvoidingView,
  KeyboardToolbar
} from 'react-native-keyboard-controller'
import { Image } from 'react-native-svg'
import HeadingS30WB from '../../../infrastructure/common/components/HeadingS30WB'
import LoadingButton from '../../../infrastructure/common/components/LoadingButton'
import TextS14 from '../../../infrastructure/common/components/TextS14'
import TextS16Dark80 from '../../../infrastructure/common/components/TextS16Dark80'
import {
  colorTypeToDefMap,
  textThemeMap
} from '../../../infrastructure/common/repository'

const styles = StyleSheet.create({
  container: {
    alignItems: 'center'
  },
  image: {
    marginBottom: 8
  },
  text: {
    marginTop: 8
  },
  contentContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    width: '100%',
    paddingTop: 32,
    paddingRight: 16,
    paddingBottom: 32,
    paddingLeft: 16,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    backgroundColor: colorTypeToDefMap.green10
  },
  heading: {
    marginTop: 32,
    marginBottom: 16
  },
  description: {
    marginBottom: 16
  },
  inputGroup: {
    marginBottom: 32,
    gap: 14
  },
  submitButton: {
    marginBottom: 16
  }
})

function GuestScreenContainer({
  inputs,
  shouldShowText = false,
  heading,
  description,
  submitButton,
  screenLink,
  ...rest
}) {
  return (
    <View style="Content">
      <Image
        style={styles.image}
        source={require('./src/assets/pictures/readVocab.png')}
      />
      {shouldShowText && (
        <TextS14 theme={textThemeMap.dark80} style={styles.text}>
          Word · Translation · Grammar · Progress
        </TextS14>
      )}
      <View style={styles.contentContainer} {...rest}>
        {isString(heading) ? (
          <GuestScreenContainer.Heading>{heading}</GuestScreenContainer.Heading>
        ) : (
          heading
        )}
        {isString(description) ? (
          <GuestScreenContainer.Description>
            {description}
          </GuestScreenContainer.Description>
        ) : (
          description
        )}
        <KeyboardAvoidingView behavior="padding" style={styles.inputGroup}>
          {inputs}
        </KeyboardAvoidingView>
        <KeyboardToolbar />
        {submitButton}
        {screenLink}
      </View>
    </View>
  )
}

GuestScreenContainer.Heading = function Heading({ children, style, ...rest }) {
  return (
    <HeadingS30WB style={[styles.heading, style]} {...rest}>
      {children}
    </HeadingS30WB>
  )
}

GuestScreenContainer.Description = function Description({
  children,
  style,
  ...rest
}) {
  return (
    <TextS16Dark80 style={[styles.description, style]} {...rest}>
      {children}
    </TextS16Dark80>
  )
}

GuestScreenContainer.SubmitButton = function SubmitButton({
  children,
  style,
  ...rest
}) {
  return (
    <LoadingButton style={[styles.submitButton, style]} {...rest}>
      {children}
    </LoadingButton>
  )
}

GuestScreenContainer.ScreenLink = function ScreenLink({
  children,
  style,
  ...rest
}) {
  return (
    <ScreenLink style={[styles.screenLink, style]} {...rest}>
      {children}
    </ScreenLink>
  )
}

export default GuestScreenContainer
