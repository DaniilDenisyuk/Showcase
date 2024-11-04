import LoadingScreen from '../../../infrastructure/common/components/LoadingScreen'
import { layoutRedux } from '../../../infrastructure/layout/redux'
import { useInitialize } from '../rtkQuery'

export default function LayoutManager({ children }) {
  const { Component } = layoutRedux.useLayout()
  const isInitialized = useInitialize()
  return <Component>{isInitialized ? children : <LoadingScreen />}</Component>
}
