import { isFunction, isUndefined, mergeWith } from 'lodash-es'

const customizer1 = (objValue, srcValue) => {
  if (isUndefined(srcValue)) {
    return objValue
  }
}

export const mergeNoUndef = (...args) => mergeWith(...args, customizer1)

export const immutableSplice = (arr, ...args) => {
  const newArr = [...arr]
  newArr.splice(...args)
  return newArr
}

const customizer2 = (value, srcValue) => {
  if (value && srcValue && isFunction(value) && isFunction(srcValue)) {
    return (...args) => {
      srcValue(...args)
      value(...args)
    }
  }
}

export const mergeProps = (obj, ...srcs) => mergeWith(obj, ...srcs, customizer2)
