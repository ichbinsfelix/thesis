import * as yup from 'yup'
import { Config } from '../../config'

const c = Config.VALIDATION.MESSAGES

export const FundsSchema = yup.object().shape({
  bankDeposits: yup.number().typeError(c.VALID_NUMBER).required(c.NUMBER),
  secondPillar: yup.number().typeError(c.VALID_NUMBER).required(c.NUMBER),
  thirdPillar: yup.number().typeError(c.VALID_NUMBER).required(c.NUMBER),
  depositValues: yup.number().typeError(c.VALID_NUMBER).required(c.NUMBER),
  loanWithSubordination: yup
    .number()
    .typeError(c.VALID_NUMBER)
    .required(c.NUMBER),
  donation: yup.number().typeError(c.VALID_NUMBER).required(c.NUMBER),
  saleProceeds: yup.number().typeError(c.VALID_NUMBER).required(c.NUMBER),
  ownWork: yup.number().typeError(c.VALID_NUMBER).required(c.NUMBER),
  others: yup.number().typeError(c.VALID_NUMBER).required(c.NUMBER),
})
