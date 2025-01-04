import { hide } from '@floating-ui/core'
import { useMergeRefs } from '@floating-ui/react'
import { autoPlacement, offset, useFloating } from '@floating-ui/react-native'
import { useCallback, useContext, useEffect, useMemo, useState } from 'react'
import { useClickOutside } from 'react-native-click-outside'
import ScrollView from '../../common/components/ScrollView'
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
  const { onScroll } = useContext(ScrollView.Context)
  useEffect(() => {
    onScroll(floatingUIContext.scrollProps.onScroll)
  }, [onScroll])
  return useMemo(
    () => ({
      isOpened,
      toggle,
      setIsOpened,
      floatingUIContext
    }),
    [isOpened, toggle, setIsOpened, floatingUIContext]
  )
}

export const useFloatingProps = () => {
  const {
    refs: { setFloating },
    close,
    floatingUIContext: {
      floatingStyles: style,
      middlewareData: { hide: { referenceHidden = false } = {} }
    }
  } = useManagerContext()
  const data = useFloatingContext()
  const pressRef = useClickOutside(() => {
    close()
  })
  const ref = useMergeRefs([setFloating, pressRef])
  return {
    ref,
    style: { ...style, visibility: referenceHidden ? 'hidden' : 'visible' }
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

export const popupFloatingUI = {
  useManager
}
