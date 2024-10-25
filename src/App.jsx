import LayoutManager from './infrastructure/layout/components/LayoutManager'
import Navigation from './infrastructure/navigation/components/Navigation'
import ReduxProvider from './infrastructure/redux/components/ReduxProvider'

export default function App() {
  return (
    <ReduxProvider>
      <LayoutManager>
        <Navigation />
      </LayoutManager>
    </ReduxProvider>
  )
}
