import React from 'react'
import { render } from '@testing-library/react-native'
import Person from '../steps/2_profile'
import renderer from 'react-test-renderer'
import Purpose from '../steps/3.4_purpose'
import EnergyCharacteristics from '../steps/3.3_property_Energy_Characteristics'
import PropertyPrice from '../steps/3.2_property_Price'
import PropertyAdress from '../steps/3.1_property_adress'
it('renders', () => {
  render(<Person />)
})
it(`renders correctly Person view`, () => {
  const tree = renderer.create(<Person />)
  expect(tree).toMatchSnapshot()
})

it(`renders correctly Address view`, () => {
  const tree = renderer.create(<PropertyAdress />)
  expect(tree).toMatchSnapshot()
})

it(`renders correctly Price view`, () => {
  const tree = renderer.create(<PropertyPrice />)
  expect(tree).toMatchSnapshot()
})

it(`renders correctly Energy Characteristics view`, () => {
  const tree = renderer.create(<EnergyCharacteristics />)
  expect(tree).toMatchSnapshot()
})

it(`renders correctly Purpose view`, () => {
  const tree = renderer.create(<Purpose />)
  expect(tree).toMatchSnapshot()
})
