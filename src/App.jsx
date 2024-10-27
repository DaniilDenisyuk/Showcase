import { SafeAreaProvider } from 'react-native-safe-area-context'
import Navigation from './infrastructure/navigation/components/Navigation'
import ReduxProvider from './infrastructure/redux/components/ReduxProvider'

export default function App() {
  return (
    <ReduxProvider>
      <SafeAreaProvider>
        <Navigation />
      </SafeAreaProvider>
    </ReduxProvider>
  )
}
