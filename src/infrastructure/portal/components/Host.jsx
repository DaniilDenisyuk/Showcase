import { Fragment } from 'react'
import { useHost } from '../repository/hooks'

export default function Host() {
  const { nodeMap } = useHost()
  return (
    <>
      {Object.entries(nodeMap).map(([key, children]) => (
        <Fragment key={key}>{children}</Fragment>
      ))}
    </>
  )
}
