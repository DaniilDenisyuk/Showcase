import { StyleSheet } from 'react-native'
import ExtendedLogo from '../../../infrastructure/common/components/ExtendedLogo'
import LayoutBase from '../../../infrastructure/layout/components/LayoutBase'

const styles = StyleSheet.create({
  logo: {
    marginTop: 16,
    marginBottom: 12
  }
})

export default function LayoutGuest({ children }) {
  return (
    <LayoutBase>
      <ExtendedLogo style={styles.logo} />
      {children}
    </LayoutBase>
  )
}
