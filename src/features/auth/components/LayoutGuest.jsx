import { StyleSheet } from 'react-native'
import ExtendedLogo from '../../../infrastructure/common/components/ExtendedLogo'
import DefaultLayout from '../../../infrastructure/layout/components/DefaultLayout'

const styles = StyleSheet.create({
  logo: {
    marginTop: 16,
    marginBottom: 12
  }
})

export default function LayoutGuest({ children }) {
  return (
    <DefaultLayout>
      <ExtendedLogo style={styles.logo} />
      {children}
    </DefaultLayout>
  )
}
