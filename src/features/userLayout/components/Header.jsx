import { StatusBar, StyleSheet, View } from 'react-native'
import { Pressable } from 'react-native-gesture-handler'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useSelector } from 'react-redux'
import Icon from '../../../infrastructure/common/components/Icon'
import TextS12 from '../../../infrastructure/common/components/TextS12'
import TextS16 from '../../../infrastructure/common/components/TextS16'
import {
  colorTypeToDefMap,
  textThemeMap
} from '../../../infrastructure/common/repository'
import { authRTK } from '../../auth/rtk'

const styles = StyleSheet.create({
  container: {
    backgroundColor: colorTypeToDefMap.light,
    flexDirection: 'row',
    paddingTop: 8,
    paddingRight: 16,
    paddingBottom: 8,
    paddingLeft: 16,
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: 12
  },
  block: { flex: 1 },
  user: {
    gap: 4,
    alignItems: 'center'
  },
  logOut: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    gap: 6
  }
})

export default function Header({ navigation, back }) {
  const { name } = useSelector(authRTK.slice.selectSlice)
  return (
    <SafeAreaView edges={['top', 'right', 'left']} style={styles.container}>
      <StatusBar
        animated
        translucent
        backgroundColor="transparent"
        barStyle="dark-content"
      />
      <View style={styles.block}>
        {back && (
          <Pressable onPress={navigation.goBack}>
            <Icon.LeftAngle />
          </Pressable>
        )}
      </View>
      <View style={[styles.block, styles.user]}>
        <Icon.User style={styles.userIcon} />
        <TextS12 style={styles.userName}>{name}</TextS12>
      </View>
      <View style={[styles.block, styles.logOut]}>
        <TextS16 theme={textThemeMap.green}>Log out</TextS16>
        <Icon.SignOut />
      </View>
    </SafeAreaView>
  )
}
