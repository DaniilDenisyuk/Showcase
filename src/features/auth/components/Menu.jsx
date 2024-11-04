import { useNavigation, useRoute } from '@react-navigation/native'
import { memo } from 'react'
import { StyleSheet } from 'react-native'
import { Pressable } from 'react-native-gesture-handler'
import { SafeAreaView } from 'react-native-safe-area-context'
import Text from '../../../infrastructure/common/components/Text'
import {
  colorTypeToDefMap,
  textThemeMap
} from '../../../infrastructure/common/repository'
import { menuItems } from '../repository'

const styles = StyleSheet.create({
  menu: {
    backgroundColor: colorTypeToDefMap.green,
    paddingRight: 24,
    paddingBottom: 8,
    paddingLeft: 24,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  icon: {
    width: 24,
    height: 24,
    marginBottom: 2
  },
  item: {
    paddingTop: 5,
    width: 75,
    height: 50,
    alignItems: 'center'
  },
  label: {
    fontSize: 10,
    lineHeight: 14
  }
})

const Item = memo(function Item({ style, screenNames, Icon, label }) {
  const { navigate } = useNavigation()
  const { name } = useRoute()
  const isActive = screenNames.includes(name)
  return (
    <Pressable
      style={[styles.item, style]}
      onPress={() => {
        navigate(screenNames[0])
      }}
    >
      {Icon && (
        <Icon
          style={styles.icon}
          themeColor={
            isActive ? colorTypeToDefMap.light : colorTypeToDefMap.light50
          }
        />
      )}
      {
        <Text
          theme={isActive ? textThemeMap.light : textThemeMap.light50}
          style={[styles.label]}
        >
          {label}
        </Text>
      }
    </Pressable>
  )
})

const Menu = memo(function Menu({ style, ...rest }) {
  return (
    <SafeAreaView
      {...rest}
      edges={{ bottom: 'maximum', right: 'maximum', left: 'maximum' }}
      style={[styles.menu, style]}
    >
      {menuItems}
    </SafeAreaView>
  )
})

Menu.Item = Item

export default Menu
