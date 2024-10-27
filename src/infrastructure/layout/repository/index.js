import { useLayoutEffect } from 'react'
import { useDispatch } from 'react-redux'
import { slice } from '../redux'

export const typeComponentMap = {}

export const useSetType = ({ type }) => {
  const dispatch = useDispatch()
  useLayoutEffect(() => {
    dispatch(slice.actions.mergeState({ type }))
  }, [type])
}

export const layoutRepo = {
  typeComponentMap,
  useSetType
}
