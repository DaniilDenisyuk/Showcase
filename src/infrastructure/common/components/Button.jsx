import { useState } from 'react'
import { Pressable, StyleSheet } from 'react-native'
import {
  buttonThemeMap,
  colorTypeToDefMap,
  defaultButtonTheme,
  textThemeMap
} from '../repository'
import TextS18WB from './TextS18WB'

const makeHoveredThemeStyleName = (theme) => `${theme}Hovered`

const buttonThemeToTextThemeMap = {
  [buttonThemeMap.darkOnDark]: {
    plain: textThemeMap.light,
    hovered: textThemeMap.dark
  },
  [buttonThemeMap.darkOnLight]: {
    plain: textThemeMap.light,
    hovered: textThemeMap.light
  },
  [buttonThemeMap.lightOnDark]: {
    plain: textThemeMap.dark,
    hovered: textThemeMap.green
  },
  [buttonThemeMap.lightOnLight]: {
    plain: textThemeMap.green,
    hovered: textThemeMap.light
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: 56,
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
    paddingLeft: 16,
    paddingRight: 16
  },
  animatedObject: {
    height: 56,
    width: 10,
    position: 'absolute',
    top: 0,
    zIndex: 1
  },
  [buttonThemeMap.darkOnLight]: {
    backgroundColor: colorTypeToDefMap.green
  },
  [makeHoveredThemeStyleName(buttonThemeMap.darkOnLight)]: {
    backgroundColor: colorTypeToDefMap.greenLighter
  },
  [buttonThemeMap.darkOnDark]: {
    backgroundColor: colorTypeToDefMap.green,
    borderColor: colorTypeToDefMap.light40,
    border: 1
  },
  [makeHoveredThemeStyleName(buttonThemeMap.darkOnDark)]: {
    backgroundColor: colorTypeToDefMap.light,
    border: 0
  },
  [buttonThemeMap.lightOnDark]: {
    backgroundColor: colorTypeToDefMap.light
  },
  [makeHoveredThemeStyleName(buttonThemeMap.lightOnDark)]: {
    backgroundColor: colorTypeToDefMap.light
  },
  [buttonThemeMap.lightOnLight]: {
    backgroundColor: colorTypeToDefMap.light,
    borderColor: colorTypeToDefMap.green,
    border: 1
  },
  [makeHoveredThemeStyleName(buttonThemeMap.lightOnLight)]: {
    backgroundColor: colorTypeToDefMap.green
  }
})

export default function Button({
  theme = defaultButtonTheme,
  style,
  label,
  onHoverIn,
  onHoverOut,
  ...rest
}) {
  const [isHovered, setIsHovered] = useState(false)
  return (
    <Pressable
      {...rest}
      role="button"
      onHoverIn={(e) => {
        setIsHovered(true)
        onHoverIn?.(e)
      }}
      onHoverOut={(e) => {
        setIsHovered(false)
        onHoverOut?.(e)
      }}
      style={[
        styles.container,
        isHovered ? styles[makeHoveredThemeStyleName(theme)] : styles[theme],
        style
      ]}
    >
      <TextS18WB theme={buttonThemeToTextThemeMap[theme]}>{label}</TextS18WB>
    </Pressable>
  )
}
