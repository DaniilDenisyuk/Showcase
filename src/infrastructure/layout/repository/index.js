import { useLayoutEffect } from 'react'
import { useDispatch } from 'react-redux'
import DefaultLayout from '../components/DefaultLayout'
import { slice } from '../redux'

export const defaultType = 'default'

export const typeComponentMap = {
  [defaultType]: DefaultLayout
}

export const useSetLayout = ({ type }) => {
  const dispatch = useDispatch()
  useLayoutEffect(() => {
    dispatch(slice.actions.mergeState({ type }))
  }, [type, theme])
}

export const layoutRepo = {
  defaultType,
  typeComponentMap,
  useSetLayout
}
