import { inRange } from 'lodash-es'
import { useCallback, useContext, useEffect, useMemo, useRef } from 'react'
import { ManagerContext } from './common'

export const useManager = () => {
  const subscriberDataRef = useRef(new Set())
  const subscribe = useCallback((data) => {
    subscriberDataRef.current.add(data)
    return () => subscriberDataRef.current.remove(data)
  }, [])
  return useMemo(() => ({ subscriberDataRef, subscribe }), [])
}

export const useManagerContext = useContext(ManagerContext)

export const useDetectorProps = () => {
  const { subscriberDataRef } = useManagerContext()
  return {
    onStartShouldSetResponderCapture: useCallback((e) => {
      for (const { ref, cb } of subscriberDataRef.current) {
        ref.current.measure(({ pageX, pageY, width, height }) => {
          if (
            !(
              inRange(e.pageX, pageX, pageX + width) &&
              inRange(e.pageY, pageY, pageY + height)
            )
          ) {
            cb(e)
          }
        })
      }
      return false
    }, [])
  }
}

export const useSubscriberProps = (cb) => {
  const { subscribe } = useManagerContext()
  const ref = useRef()
  useEffect(() => {
    const remove = subscribe({ ref, cb })
    return () => {
      remove()
    }
  }, [cb])
  return {
    ref
  }
}

export const touchOutsideHooks = {
  useManager,
  useManagerContext,
  useDetectorProps,
  useSubscriberProps
}
