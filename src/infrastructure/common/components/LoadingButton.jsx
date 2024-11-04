import { useEffect, useState } from 'react'
import { StyleSheet } from 'react-native'
import { Pressable } from 'react-native-gesture-handler'
import {
  cancelAnimation,
  Easing,
  useAnimatedStyle,
  useSharedValue,
  withRepeat,
  withTiming
} from 'react-native-reanimated'
import {
  buttonThemeMap,
  colorTypeToDefMap,
  defaultButtonTheme,
  textThemeMap
} from '../repository'
import AnimatedLinearGradient from './AnimatedLinearGradient'
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
    paddingRight: 16,
    overflow: 'hidden'
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

export default function LoadingButton({
  theme = defaultButtonTheme,
  style,
  children,
  onHoverIn,
  onHoverOut,
  isLoading,
  ...rest
}) {
  const [isHovered, setIsHovered] = useState(false)
  const animatedLeft = useSharedValue('0%')
  const animatedStyle = useAnimatedStyle(() => ({
    left: animatedLeft.value
  }))
  useEffect(() => {
    if (!isLoading) {
      return
    }
    animatedLeft.value = withRepeat(
      withTiming('100%', {
        duration: 500,
        easing: Easing.inOut,
        toValue: 100
      }),
      0
    )
    return () => {
      cancelAnimation(animatedLeft)
    }
  }, [isLoading])
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
      {isLoading && (
        <AnimatedLinearGradient
          colors={['transparent', colorTypeToDefMap.light40, 'transparent']}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
          style={[styles.animatedObject, animatedStyle]}
        />
      )}
      <TextS18WB theme={buttonThemeToTextThemeMap[theme]}>{children}</TextS18WB>
    </Pressable>
  )
}
