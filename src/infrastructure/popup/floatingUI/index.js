import { hide } from '@floating-ui/core'
import { autoPlacement, offset, useFloating } from '@floating-ui/react-native'
import { useCallback, useState } from 'react'
import { useManagerContext } from '../repository'

export const defaultMiddleware = [
  offset({ mainAxis: 4 }),
  autoPlacement(),
  hide()
]

export function useManager({
  placement = 'bottom',
  sameScrollView = true,
  middleware = defaultMiddleware,
  initialOpened = false
}) {
  const [isOpened, setIsOpened] = useState(initialOpened)
  const toggle = useCallback(() => setIsOpened((state) => !state))
  const floatingUIContext = useFloating({
    placement,
    sameScrollView,
    middleware
  })
  return {
    isOpened,
    toggle,
    setIsOpened,
    floatingUIContext
  }
}

export const useFloatingProps = () => {
  const {
    open,
    refs: { setFloating: ref },
    floatingUIContext: { floatingStyles: style }
  } = useManagerContext()
  return {
    ref,
    onPress: open,
    style
  }
}

export const useReferenceProps = () => {
  const {
    toggle: onPress,
    floatingUIContext: {
      refs: { setReference: ref }
    }
  } = useManagerContext()
  return {
    onPress,
    ref
  }
}
