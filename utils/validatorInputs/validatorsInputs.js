import * as yup from 'yup'

export const descriptionValidator = yup.object().shape({ 
  description: yup.string().min(4).max(50).required()
})