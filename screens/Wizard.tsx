//@ts-nocheck
import { Heading, NativeBaseProvider } from 'native-base'
import React from 'react'
import Routes from './routes'

export const Wizard = () => {
  const [step, setStep] = React.useState<number>(0)
  const steps = Routes(step, setStep)

  return (
    <NativeBaseProvider>
      <Heading color='white'>
        Step {step + 1}/{steps.length}
      </Heading>
      {steps[`${step}`].content}
      {steps[`${step}`].footer}
    </NativeBaseProvider>
  )
}
