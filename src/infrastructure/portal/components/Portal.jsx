import { usePortal } from '../repository/hooks'

export default function Portal({ children }) {
  usePortal({ children })
  return null
}
