import { useState } from 'react'
import { Pressable, StyleSheet, TextInput, View } from 'react-native'
import Svg, { ClipPath, Defs, G, Path, Rect } from 'react-native-svg'
import {
  colorTypeToDefMap,
  formTextInputStyleSheet,
  textThemeMap
} from '../repository'
import TextS12 from './TextS12'

const styles = StyleSheet.create({
  ...formTextInputStyleSheet,
  default: {
    ...formTextInputStyleSheet.default,
    paddingRight: 56
  },
  eye: {
    position: 'absolute',
    right: 18,
    top: 18
  }
})

export default function FormPasswordInput({
  onBlur,
  onFocus,
  style,
  isValid,
  isInvalid,
  validMessage,
  invalidMessage,
  ...rest
}) {
  const [isHidden, setIsHidden] = useState(false)
  const [isFocused, setIsFocused] = useState(false)
  return (
    <View style={style}>
      <TextInput
        style={[
          formTextInputStyleSheet.default,
          isFocused && formTextInputStyleSheet.focused,
          isInvalid && formTextInputStyleSheet.invalid,
          isValid && formTextInputStyleSheet.valid
        ]}
        onBlur={(e) => {
          onBlur?.(e)
          setIsFocused(false)
        }}
        onFocus={(e) => {
          onFocus?.(e)
          setIsFocused(true)
        }}
        {...rest}
      />
      <Pressable style={styles.eye} onPress={() => setIsHidden(!isHidden)}>
        <Svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <G clipPath="url(#clip0_52_12061)">
            <Path
              d={
                isHidden
                  ? 'M14.9507 14.95C13.5261 16.0358 11.7916 16.6374 10.0007 16.6667C4.16732 16.6667 0.833984 10 0.833984 10C1.87056 8.06825 3.30826 6.38051 5.05065 5.05M8.25065 3.53333C8.82426 3.39907 9.41154 3.33195 10.0007 3.33333C15.834 3.33333 19.1673 10 19.1673 10C18.6615 10.9463 18.0582 11.8373 17.3673 12.6583M11.7673 11.7667C11.5384 12.0123 11.2624 12.2093 10.9558 12.3459C10.6491 12.4826 10.3181 12.556 9.98239 12.562C9.64672 12.5679 9.31329 12.5061 9.00199 12.3804C8.6907 12.2547 8.40792 12.0675 8.17052 11.8301C7.93313 11.5927 7.74598 11.31 7.62024 10.9987C7.49451 10.6874 7.43276 10.3539 7.43868 10.0183C7.4446 9.68258 7.51808 9.35154 7.65472 9.04487C7.79136 8.73821 7.98836 8.46221 8.23399 8.23333'
                  : 'M0.833374 9.99998C0.833374 9.99998 4.16671 3.33331 10 3.33331C15.8334 3.33331 19.1667 9.99998 19.1667 9.99998C19.1667 9.99998 15.8334 16.6666 10 16.6666C4.16671 16.6666 0.833374 9.99998 0.833374 9.99998Z'
              }
              stroke={colorTypeToDefMap.dark}
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <Path
              d={
                isHidden
                  ? 'M0.833984 0.833313L19.1673 19.1666'
                  : 'M10 12.5C11.3807 12.5 12.5 11.3807 12.5 10C12.5 8.61929 11.3807 7.5 10 7.5C8.61929 7.5 7.5 8.61929 7.5 10C7.5 11.3807 8.61929 12.5 10 12.5Z'
              }
              stroke={colorTypeToDefMap.dark}
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </G>
          <Defs>
            <ClipPath id="clip0_52_12061">
              <Rect width="20" height="20" fill="white" />
            </ClipPath>
          </Defs>
        </Svg>
      </Pressable>
      {isInvalid && invalidMessage && (
        <TextS12 theme={textThemeMap.invalid}>{invalidMessage}</TextS12>
      )}
      {isValid && validMessage && (
        <TextS12 theme={textThemeMap.valid}>{validMessage}</TextS12>
      )}
    </View>
  )
}
