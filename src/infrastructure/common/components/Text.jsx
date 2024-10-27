import { StyleSheet, Text } from 'react-native'
import { transform } from 'typescript'
import { colorMap, defaultTextTheme, textThemeMap } from '../repository'

const styles = StyleSheet.create(
  transform(
    textThemeMap,
    (acc, curr) => {
      acc[curr] = { color: colorMap[curr] }
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
    <Text style={[styles[theme], style]} {...rest}>
      {children}
    </Text>
  )
}
