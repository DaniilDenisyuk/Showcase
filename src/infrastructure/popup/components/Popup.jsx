import { forwardRef, useEffect } from 'react'

import { useMergeRefs } from '@floating-ui/react-native'
import { StyleSheet } from 'react-native'
import {
  Pressable,
  TouchableWithoutFeedback
} from 'react-native-gesture-handler'
import Animated, { useSharedValue, withTiming } from 'react-native-reanimated'
import Portal from '../../portal/components/Portal'
import { useManager, useReferenceProps } from '../floatingUI'
import { Context, useManagerContext } from '../repository'

const styles = StyleSheet.create({
  touchInterceptor: {
    inset: 0,
    zIndex: 99,
    position: 'absolute',
    backgroundColor: 'transparent'
  },
  floatingContainer: {
    zIndex: 100
  }
})

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

export const TouchInterceptor = forwardRef(function PopupManager() {
  const { toggle } = useManagerContext()
  return (
    <TouchableWithoutFeedback
      style={styles.touchInterceptor}
      onPress={toggle}
    />
  )
})

export const FloatingContainer = forwardRef(function FloatingContainer(
  { children, style, ...rest },
  ref
) {
  const {
    floatingContext: { floatingStyles }
  } = useManagerContext()
  const opacity = useSharedValue(0)
  useEffect(() => {
    opacity.value = withTiming(1, { duration: 200 })
  }, [])
  return (
    <Animated.View
      style={[styles.floatingContainer, floatingStyles, { opacity }, style]}
      ref={ref}
      {...rest}
    >
      {children}
    </Animated.View>
  )
})

export const Manager = forwardRef(function PopupManager({
  reference,
  floating,
  ...managerProps
}) {
  const context = useManager(managerProps)
  return (
    <Context.Provider value={context}>
      {reference}
      <Portal>
        {floating}
        <TouchInterceptor />
      </Portal>
    </Context.Provider>
  )
})

export default { Manager, FloatingContainer, TouchInterceptor, Trigger }
