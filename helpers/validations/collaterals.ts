import * as yup from 'yup'
import { Config } from '../../config'

const c = Config.VALIDATION.MESSAGES

export const CollateralsSchema = yup.object().shape({
  secondPillar: yup.number().typeError(c.VALID_NUMBER).required(c.NUMBER),
  thirdPillar: yup.number().typeError(c.VALID_NUMBER).required(c.NUMBER),
  freeLifeInsurance: yup.number().typeError(c.VALID_NUMBER).required(c.NUMBER),
  tiedLifeInsurance: yup.number().typeError(c.VALID_NUMBER).required(c.NUMBER),
  fundLifeInsurance: yup.number().typeError(c.VALID_NUMBER).required(c.NUMBER),
  tiedFundLifeInsurance: yup
    .number()
    .typeError(c.VALID_NUMBER)
    .required(c.NUMBER),
  freeDeathBenefitPolicy: yup
    .number()
    .typeError(c.VALID_NUMBER)
    .required(c.NUMBER),
})
