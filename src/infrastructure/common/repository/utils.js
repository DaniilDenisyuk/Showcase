import { isUndefined, mergeWith } from 'lodash-es'

const customizer = (objValue, srcValue) => {
  if (isUndefined(srcValue)) {
    return objValue
  }
}

export const mergeNoUndef = (...args) => mergeWith(...args, customizer)
