import { useSelector } from 'react-redux'
import { slice } from '../redux'
import { typeComponentMap } from '../repository'
import DefaultLayout from './DefaultLayout'

export default function LayoutManager({ children }) {
  const { type, theme } = useSelector(slice.selectSlice)
  const Component = typeComponentMap[type] ?? DefaultLayout
  return <Component theme={theme}>{children}</Component>
}
