import * as yup from 'yup'
import { Config } from '../../config'

const c = Config.VALIDATION.MESSAGES

export const PropertyAddressSchema = yup.object().shape({
  street: yup.string().required(c.REQUIRED_FIELD),
  housenumber: yup
    .number()
    .typeError(c.VALID_NUMBER)
    .required(c.REQUIRED_FIELD),
  zip: yup
    .number()
    .typeError(c.VALID_NUMBER)
    .test(
      'maxDigits',
      'Bitte eine gültige PLZ eingeben',
      (number) => String(number).length === 4
    )
    .required(c.REQUIRED_FIELD),
  city: yup.string().required(c.REQUIRED_FIELD),
})

export const PropertyPriceSchema = yup.object().shape({
  purchasePrice: yup.number().typeError(c.VALID_NUMBER),
  Renovation: yup.number().typeError(c.REQUIRED_FIELD),
})

export const PropertyEnergyCharacteristicsSchema = yup.object().shape({
  photovoltaicSystem: yup.mixed().defined(c.REQUIRED_FIELD),
  energySource: yup.string().required(c.REQUIRED_FIELD),
})

export const PropertyPurposeSchema = yup.object().shape({
  buildingLaw: yup.mixed(),
  buildingLawExpiresOn: yup.date().when('buildingLaw', {
    is: (buildingLaw: string) => buildingLaw !== undefined,
    then: yup
      .date()
      .required('Bitte gib ein gültiges Datum ein')
      .nullable()
      .min(new Date(), 'Das Datum muss in der Zukunft liegen'),
  }),
  buildingLawInterest: yup.number().when('buildingLaw', {
    is: (buildingLaw: string) => buildingLaw !== undefined,
    then: yup.number().required(c.REQUIRED_FIELD),
  }),
  checkedGrannyApartment: yup.mixed(),
  grannyFlatIncome: yup.number().when('checkedGrannyApartment', {
    is: (checkedGrannyApartment: string) =>
      checkedGrannyApartment !== undefined,
    then: yup.number().required(c.REQUIRED_FIELD),
  }),
  checkedTransactionLoan: yup.mixed(),
  transitionalLoanAmount: yup.date().when('checkedTransactionLoan', {
    is: (checkedTransactionLoan: string) =>
      checkedTransactionLoan !== undefined,
    then: yup
      .date()
      .required('Bitte gib ein gültiges Datum ein')
      .nullable()
      .min(new Date(), 'Das Datum muss in der Zukunft liegen'),
  }),
  transitionalLoanInterest: yup.number().when('checkedTransactionLoan', {
    is: (checkedTransactionLoan: string) =>
      checkedTransactionLoan !== undefined,
    then: yup.number().required(c.REQUIRED_FIELD),
  }),
})
