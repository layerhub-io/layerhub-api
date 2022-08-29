import joi from "joi"

export const validateSignup = (input: any) => {
  const schema = joi.object({
    email: joi.string().required(),
    password: joi.string().required(),
  })
  return schema.validate(input)
}

export const validateSignin = (input: any) => {
  const schema = joi.object({
    email: joi.string().required(),
    password: joi.string().required(),
  })
  return schema.validate(input)
}
