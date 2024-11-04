import { useNavigation, useRoute } from '@react-navigation/native'
import { memo } from 'react'
import { StatusBar, StyleSheet, View } from 'react-native'
import { Pressable, ScrollView } from 'react-native-gesture-handler'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useSelector } from 'react-redux'
import Icon from '../../../infrastructure/common/components/Icon'
import { colorTypeToDefMap } from '../../../infrastructure/common/repository'
import { navRepo } from '../../../infrastructure/navigation/repository'
import { authRedux } from '../redux'
import Menu from './Menu'

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: colorTypeToDefMap.light
//   }
// })

const styles = StyleSheet.create({
  container: {
    backgroundColor: colorTypeToDefMap.light
  },
  block: {
    flex: 1
  }
})

const Header = memo(function Header() {
  const { name } = useSelector(authRedux.slice.selectSlice)
  const route = useRoute()
  const { goBack } = useNavigation()
  return (
    <SafeAreaView edges={['top', 'right', 'left']} style={styles.header}>
      <StatusBar
        animated
        translucent
        backgroundColor="transparent"
        barStyle="dark-content"
      />
      <View style={styles.block}>
        {navRepo.canGoBackScreenNameMap[route.name] && (
          <Pressable
            onPress={() => {
              goBack()
            }}
          >
            <Icon.Angle />
          </Pressable>
        )}
      </View>
      <View style={styles.block}>{name}</View>
      <View style={styles.block}></View>
    </SafeAreaView>
  )
})

export default function UserLayout({ children, ...rest }) {
  return (
    <View {...rest} style={styles.container}>
      <Header />
      <ScrollView style={styles.sV}>{children}</ScrollView>
      <Menu />
    </View>
  )
}
