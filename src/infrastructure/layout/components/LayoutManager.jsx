import { useSelector } from 'react-redux'
import { slice } from '../redux'
import LayoutBase from './LayoutBase'

export default function LayoutManager({ children }) {
  const { type } = useSelector(slice.selectSlice)
  const Component = typeComponentMap[type] ?? LayoutBase
  return <Component>{children}</Component>
}
