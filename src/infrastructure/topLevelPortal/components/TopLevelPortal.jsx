import { useContext, useEffect, useId } from 'react'
import TopLevelPortalProvider from './TopLevelPortalProvider'

export default function TopLevelPortal({ children }) {
  const { portal } = useContext(TopLevelPortalProvider.Context)
  const id = useId()
  useEffect(() => {
    portal(id, children)
  }, [children])
  return null
}
