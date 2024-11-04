import Joi from 'joi'

export const emailSchema = Joi.string().email()

export const passwordSchema = Joi.string().trim().min(6)
