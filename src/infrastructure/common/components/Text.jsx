import { Text as RNText, StyleSheet } from 'react-native'
import { transform } from 'typescript'
import {
  colorTypeToDefMap,
  defaultTextTheme,
  textThemeMap
} from '../repository'

const styles = StyleSheet.create(
  transform(
    textThemeMap,
    (acc, curr) => {
      acc[curr] = { color: colorTypeToDefMap[curr] }
    },
    {}
  )
)

export default function Text({
  style,
  theme = defaultTextTheme,
  children,
  ...rest
}) {
  return (
    <RNText style={[styles[theme], style]} {...rest}>
      {children}
    </RNText>
  )
}
