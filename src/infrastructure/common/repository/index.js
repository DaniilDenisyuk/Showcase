import { StyleSheet } from 'react-native'

export const colorTypeMap = {
  dark: 'dark',
  dark80: 'dark80',
  dark50: 'dark50',
  dark10: 'dark10',
  dark8: 'dark8',
  green: 'green',
  green10: 'green10',
  greenLighter: 'greenLighter',
  light: 'light',
  lightDarker: 'lightDarker',
  light50: 'light50',
  light40: 'light40',
  invalid: 'invalid',
  valid: 'valid'
}

export const colorTypeToDefMap = {
  dark: 'rgb(18 20 23)',
  dark80: 'rgba(18 20 23 / 0.8)',
  dark50: 'rgba(18 20 23 / 0.5)',
  dark10: 'rgba(18 20 23 / 0.1)',
  dark8: 'rgba(18 20 23 / 0.08)',
  green: 'rgb(133 170 159)',
  green10: 'rgb(133 170 159 / 0.1)',
  greenLighter: 'rgb(165 192 184)',
  light: 'rgb(252 252 252)',
  lightDarker: 'rgb(248 248 248)',
  light50: 'rgba(252 252 252 / 0.5)',
  light40: 'rgba(252 252 252 / 0.4)',
  invalid: 'rgb(216 0 39)',
  valid: 'rgb(60 191 97)'
}

export const textThemeMap = {
  dark: 'dark',
  dark80: 'dark80',
  dark50: 'dark50',
  green: 'green',
  greenLighter: 'greenLighter',
  light: 'light',
  lightDarker: 'lightDarker',
  light50: 'light50',
  light40: 'light40',
  invalid: 'invalid',
  valid: 'valid'
}

export const defaultTextTheme = textThemeMap.dark

export const buttonThemeMap = {
  lightOnDark: 'lightOnDark',
  lightOnLight: 'lightOnLight',
  darkOnLight: 'darkOnLight',
  darkOnDark: 'darkOnDark'
}

export const buttonShapeMap = {
  rounded30: 'rounded30',
  rounded15: 'rounded15'
}

export const buttonSizeMap = {
  lg: 'lg',
  md: 'md',
  sm: 'sm'
}

export const defaultButtonShape = buttonShapeMap.rounded30

export const defaultButtonTheme = buttonThemeMap.darkOnLight

export const logoThemeMap = {
  dark: 'dark',
  light: 'light'
}

export const defaultLogoTheme = buttonThemeMap.dark

export const textInputStyleSheet = StyleSheet.create({
  base: {
    height: 56,
    flex: 1,
    border: 1,
    borderRadius: 15,
    borderColor: colorTypeToDefMap.dark10,
    color: colorTypeToDefMap.dark,
    fontSize: 16,
    lineHeight: 24,
    paddingLeft: 18,
    paddingRight: 18
  },
  focused: {
    borderColor: colorTypeToDefMap.green
  },
  invalid: {
    borderColor: colorTypeToDefMap.invalid
  },
  valid: {
    borderColor: colorTypeToDefMap.valid
  },
  description: {
    marginTop: 4
  }
})
