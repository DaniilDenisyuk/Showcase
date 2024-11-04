import { useNavigation } from '@react-navigation/native'
import { useState } from 'react'
import { StyleSheet } from 'react-native'
import { Pressable } from 'react-native-gesture-handler'
import { textThemeMap } from '../repository'
import TextS16 from './TextS16'

const styles = StyleSheet.create({
  label: {
    textDecorationLine: 'underline'
  }
})

export default function ScreenLink({ children, screen, ...rest }) {
  const { navigate } = useNavigation()
  const [isHovered, setIsHovered] = useState(false)
  return (
    <Pressable
      {...rest}
      onHoverIn={() => {
        setIsHovered(true)
      }}
      onHoverOut={() => {
        setIsHovered(false)
      }}
      onPress={() => {
        navigate(screen)
      }}
    >
      <TextS16
        theme={isHovered ? textThemeMap.dark : textThemeMap.dark50}
        style={styles.label}
      >
        {children}
      </TextS16>
    </Pressable>
  )
}
