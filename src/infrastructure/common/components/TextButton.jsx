import { upperFirst } from 'lodash-es'
import { Pressable, StyleSheet } from 'react-native'
import { colorMap } from '../repository'
import TextS18WB from './TextS18WB'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: 56,
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center'
  },
  [`container${upperFirst(textButtonThemeMap.darkOnLight)}`]: {
    backgroundColor: '#85AA9F'
  },
  [`container${upperFirst(textButtonThemeMap.darkOnLight)}Pressed`]: {
    backgroundColor: '#A5C0B8'
  },
  [`label${upperFirst(textButtonThemeMap.darkOnLight)}`]: {
    color: colorMap.light
  },
  [`label${upperFirst(textButtonThemeMap.darkOnLight)}Pressed`]: {
    color: colorMap.light
  },
  [`container${upperFirst(textButtonThemeMap.darkOnDark)}`]: {
    backgroundColor: '#85AA9F',
    borderColor: colorMap.light40,
    border: 1
  },
  [`container${upperFirst(textButtonThemeMap.darkOnDark)}Pressed`]: {
    backgroundColor: colorMap.light,
    border: 0
  },
  [`label${upperFirst(textButtonThemeMap.darkOnDark)}`]: {
    color: colorMap.light
  },
  [`label${upperFirst(textButtonThemeMap.darkOnDark)}Pressed`]: {
    color: colorMap.dark
  },
  containerWhite: {
    color: 'white',
    backgroundColor: '#85AA9F',
    border: 1
  },
  containerWhitePressed: {
    backgroundColor: '#A5C0B8'
  },
  labelWhitePressed: {
    color: '#A5C0B8'
  }
})

export default function TextButton({
  theme = 'lightOnDark',
  style,
  label,
  children,
  ...rest
}) {
  return (
    <Pressable
      {...rest}
      role="button"
      style={[
        styles.container,
        styles[`container${upperFirst(theme)}`],
        ({ pressed }) =>
          pressed && styles[`container${upperFirst(theme)}Pressed`],
        style
      ]}
    >
      <TextS18WB style={styles[`label${upperFirst(theme)}`]}>{label}</TextS18WB>
    </Pressable>
  )
}
