import { forwardRef, useContext, useEffect } from 'react'

import { useMergeRefs } from '@floating-ui/react-native'
import { Modal } from 'react-native'
import { Pressable } from 'react-native-gesture-handler'
import Animated, { useSharedValue, withTiming } from 'react-native-reanimated'
import ScrollViewXProvider from '../../common/components/ScrollViewXProvider'
import { useManager, useReferenceProps } from '../floatingUI'
import { Context, useManagerContext } from '../repository'

export const Trigger = forwardRef(function Trigger(
  { children, ...rest },
  propRef
) {
  const { isOpened } = useManagerContext()
  const { ref, ...props } = useReferenceProps()
  const mergedRef = useMergeRefs([ref, propRef])
  return (
    <Pressable ref={mergedRef} disabled={isOpened} {...rest} {...props}>
      {children}
    </Pressable>
  )
})

export const FloatingContainer = forwardRef(function FloatingContainer(
  { children, style, ...rest },
  ref
) {
  const {
    isOpened,
    toggle,
    floatingContext: { floatingStyles }
  } = useManagerContext()
  const opacity = useSharedValue(0)
  useEffect(() => {
    opacity.value = withTiming(1, { duration: 200 })
  }, [])
  return (
    <Modal
      ref={ref}
      animationType="none"
      visible={isOpened}
      transparent
      onDismiss={toggle}
      onRequestClose={toggle}
      {...rest}
    >
      <Animated.View style={[floatingStyles, { opacity }, style]}>
        {children}
      </Animated.View>
    </Modal>
  )
})

export const Manager = forwardRef(function Manager({
  reference,
  floating,
  ...managerProps
}) {
  const context = useManager(managerProps)
  const { onScroll } = useContext(ScrollViewXProvider.Context)
  useEffect(() => {
    onScroll(context.floatingUIContext.scrollProps.onScroll)
  }, [onScroll])
  return (
    <Context.Provider value={context}>
      {reference}
      {floating}
    </Context.Provider>
  )
})

export default { Manager, FloatingContainer, Trigger }
