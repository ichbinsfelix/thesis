import React from 'react'
import { Box, Button, Heading, HStack, NativeBaseProvider } from 'native-base'
import { SafeAreaView } from 'react-native'
import { Step } from '../../components/types/step'

export const Welcome: React.FC<Step> = ({ step, setStep }) => {
  const onSubmit = (data: any) => {
    setStep(step + 1)
  }
  return (
    <NativeBaseProvider>
      <SafeAreaView>
        <Box
          bg='primary.50'
          py='8'
          px='3'
          rounded='md'
          alignSelf='center'
          width={375}
          maxWidth='100%'
          margin={6}
        >
          <HStack justifyContent='space-between'>
            <Box justifyContent='space-between'>
              <Heading testID='welcomeID' size='md' alignContent='center'>
                Willkommen zur Finanzautobahn
              </Heading>

              <Button testID='startID' onPress={onSubmit}>
                Los gehts
              </Button>
            </Box>
          </HStack>
        </Box>
      </SafeAreaView>
    </NativeBaseProvider>
  )
}

export default Welcome
