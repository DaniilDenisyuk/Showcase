import { StyleSheet } from 'react-native'
import { Pressable } from 'react-native-gesture-handler'
import { SafeAreaView } from 'react-native-safe-area-context'
import Text from '../../../infrastructure/common/components/Text'
import {
  colorTypeToDefMap,
  textThemeMap
} from '../../../infrastructure/common/repository'

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

function Tab({ style, isFocused, navigation, descriptor, route, ...rest }) {
  const {
    options: {
      tabBarIcon: Icon,
      tabBarLabel,
      tabBarAccessibilityLabel,
      tabBarButtonTestID
    }
  } = descriptor
  const onPress = () => {
    const event = navigation.emit({
      type: 'tabPress',
      target: route.key,
      canPreventDefault: true
    })
    if (!isFocused && !event.defaultPrevented) {
      navigation.navigate(route.name, route.params)
    }
  }
  const onLongPress = () => {
    navigation.emit({
      type: 'tabLongPress',
      target: route.key
    })
  }
  return (
    <Pressable
      style={[styles.item, style]}
      accessibilityState={isFocused ? { selected: true } : {}}
      accessibilityLabel={tabBarAccessibilityLabel}
      testID={tabBarButtonTestID}
      onPress={onPress}
      onLongPress={onLongPress}
      {...rest}
    >
      {Icon && <Icon style={styles.icon} isFocused={isFocused} />}
      {
        <Text
          theme={isFocused ? textThemeMap.light : textThemeMap.light50}
          style={[styles.label]}
        >
          {tabBarLabel}
        </Text>
      }
    </Pressable>
  )
}
export default function TabBar({ state, descriptors, navigation }) {
  return (
    <SafeAreaView
      edges={{ bottom: 'maximum', right: 'maximum', left: 'maximum' }}
      style={styles.bar}
    >
      {state.routes.map((route, index) => {
        return (
          <Tab
            key={route.key}
            isFocused={state.index === index}
            descriptor={descriptors[route.key]}
            navigation={navigation}
          />
        )
      })}
    </SafeAreaView>
  )
}
