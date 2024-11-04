import { useLayout } from '../redux'

export default function DefaultLayoutManager({ children }) {
  const { Component } = useLayout()
  return <Component>{children}</Component>
}
