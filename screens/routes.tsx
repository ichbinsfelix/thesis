import React from 'react'
import Welcome from './steps/1_welcome'
import Person from './steps/2_profile'
import PropertyAdress from './steps/3.1_property_adress'
import PropertyPrice from './steps/3.2_property_Price'
import EnergyCharacteristics from './steps/3.3_property_Energy_Characteristics'
import Purpose from './steps/3.4_purpose'
import Income from './steps/4_income'
import Funds from './steps/5_funds'
import Collaterals from './steps/6_collaterals'
import Summary from './steps/7_summary'
import Finish from './steps/8_finish'

const Routes = (step: number, setStep: (arg: number) => number) => [
  {
    title: 'Welcome',
    content: <Welcome setStep={setStep} step={step} />,
  },
  {
    title: 'Profile',
    content: <Person setStep={setStep} step={step} />,
  },
  {
    title: 'Property Adress',
    content: <PropertyAdress setStep={setStep} step={step} />,
  },
  {
    title: 'Property Price',
    content: <PropertyPrice setStep={setStep} step={step} />,
  },
  {
    title: 'Property Energy Characteristics',
    content: <EnergyCharacteristics setStep={setStep} step={step} />,
  },
  {
    title: 'Property Purpose',
    content: <Purpose setStep={setStep} step={step} />,
  },
  {
    title: 'Income',
    content: <Income setStep={setStep} step={step} />,
  },
  {
    title: 'Funds',
    content: <Funds setStep={setStep} step={step} />,
  },
  {
    title: 'Collaterals',
    content: <Collaterals setStep={setStep} step={step} />,
  },
  {
    title: 'Summary',
    content: <Summary setStep={setStep} step={step} />,
  },
  {
    title: 'Finish',
    content: <Finish setStep={setStep} step={step} />,
  },
]
export default Routes
