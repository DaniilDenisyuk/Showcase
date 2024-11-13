import { useContext, useEffect, useId } from 'react'
import { Context } from '../repository'

export default function Portal({ children }) {
  const { portal } = useContext(Context)
  const id = useId()
  useEffect(() => {
    portal(id, children)
  }, [children])
  return null
}
