import * as yup from 'yup'
import { Config } from '../../config'

const c = Config.VALIDATION.MESSAGES

export const PartnerSchema = yup.object().shape({
  gender: yup.mixed().defined('Bitte wähle ein Geschlecht aus'),
  firstName: yup
    .string()
    .required(c.REQUIRED_FIELD)
    .max(50, 'Der Vorname darf maximal 50 Buchstaben haben.'),
  lastName: yup
    .string()
    .required(c.REQUIRED_FIELD)
    .max(50, 'Der Nachname darf maximal 50 Buchstaben haben.'),
  birthDate: yup
    .date()
    .typeError('Bitte gib ein gültiges Datum ein')
    .required(c.REQUIRED_FIELD)
    .nullable()
    .max(new Date(2004, 0, 1), 'Du must mindestens 18 Jahre alt sein'),
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
