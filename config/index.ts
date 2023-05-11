const APP_BRAND_NAME = 'Finat360 Native'
export const Config = {
  CONTACT_EMAIL: {
    subject: APP_BRAND_NAME,
    address: 'info@atpoint.ch',
  },
  VALIDATION: {
    MESSAGES: {
      REQUIRED_FIELD: 'Bitte geben Sie einen Wert ein.',
      NUMBER: 'Bitte geben Sie eine Zahl oder den wert 0 ein',
      VALID_NUMBER: ' Bitte gib eine Nummer ein anstelle einem Buchstaben',
    },
    FIRSTNAME_LENGTH: 50,
    LASTNAME_LENGTH: 50,
    EMAIL_LENGTH: 100,
    HOMETOWN: 35,
    POSTAL_CODE_MIN_LENGTH: 4,
    POSTAL_CODE_MAX_LENGTH: 4,
    MIN_AGE: 18,
    AUTOCOMPLETE: {
      STREET_LENGTH: 35,
      ZIP_LENGTH: 7,
      CITY_LENGTH: 35,
    },
  },
}
