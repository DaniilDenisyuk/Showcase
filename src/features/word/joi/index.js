import Joi from 'joi'

export const filterSchema = Joi.object({
  keyword: Joi.string().min(2).allow(undefined),
  category: Joi.string().allow(undefined),
  isIrregular: Joi.boolean().allow(undefined)
})
