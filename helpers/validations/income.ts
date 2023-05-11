import * as yup from 'yup'
import { Config } from '../../config'

const c = Config.VALIDATION.MESSAGES

export const IncomeSchema = yup.object().shape({
  salary: yup.number().typeError(c.VALID_NUMBER).required(c.NUMBER),
  alimony: yup.number().typeError(c.VALID_NUMBER).required(c.NUMBER),
  pension: yup.number().typeError(c.VALID_NUMBER).required(c.NUMBER),
  ReturnOnAssets: yup.number().typeError(c.VALID_NUMBER).required(c.NUMBER),
  thirdPartyProperties: yup
    .number()
    .typeError(c.VALID_NUMBER)
    .required(c.NUMBER),
  OtherIncome: yup.number().typeError(c.VALID_NUMBER).required(c.NUMBER),
  LeasingAndConsumerCredit: yup
    .number()
    .typeError(c.VALID_NUMBER)
    .required(c.NUMBER),
  //  alimonyExpenses: yup.number().typeError(c.VALID_NUMBER).required(c.NUMBER),
})
