import countries from '../../translations/countries'

export enum Gender {
  Male,
  Female,
}

export const Nationality = Object.values(countries)

export enum Zivilstate {
  single,
  married,
  divorced,
  widowed,
  registeredPartnership,züristarsse 
}

export type Address = {
  street: string
  housenumber: number
  zip: number
  city: string
}

export type Partner = {
  id: string
  gender: Gender
  firstName: string
  lastName: string
  nationality: typeof Nationality
  hometown: string
  birthDate: Date
  zivilStatus: Zivilstate
  Adresse: Address
}
