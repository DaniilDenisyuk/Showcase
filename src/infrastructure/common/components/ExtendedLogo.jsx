import { StyleSheet, View } from 'react-native'
import Svg, { Circle, Path } from 'react-native-svg'
import {
  colorTypeToDefMap,
  defaultLogoTheme,
  logoThemeMap
} from '../repository'
import TextS18WB from './TextS18WB'

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    width: 182
  },
  image: {
    width: 36,
    height: 36,
    marginRight: 16
  }
})

export default function ExtendedLogo({
  style,
  theme = defaultLogoTheme,
  ...props
}) {
  return (
    <View
      style={style ? { ...styles.container, ...style } : styles.container}
      {...props}
    >
      <Svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 36 36"
        style={styles.image}
        fill="none"
      >
        <Circle
          cx={18}
          cy={18}
          r={18}
          fill={
            theme === logoThemeMap.dark
              ? colorTypeToDefMap.green
              : colorTypeToDefMap.light
          }
        />
        <Path
          fill={
            theme === logoThemeMap.dark
              ? colorTypeToDefMap.light
              : colorTypeToDefMap.green
          }
          fillRule="evenodd"
          d="M17.95 16.667c5.284-3.985 5.517-6.4 0-10.667-5.622 4.358-4.897 6.668 0 10.667Zm-1.283 1.383c-3.985-5.283-6.4-5.516-10.667 0 4.358 5.622 6.668 4.898 10.667 0Zm13.333 0c-3.985-5.283-6.4-5.516-10.667 0 4.358 5.622 6.668 4.898 10.667 0ZM17.95 30c5.284-3.985 5.517-6.4 0-10.667-5.622 4.358-4.897 6.668 0 10.667Z"
          clipRule="evenodd"
        />
      </Svg>
      <TextS18WB theme={theme}>VocabBuilder</TextS18WB>
    </View>
  )
}
