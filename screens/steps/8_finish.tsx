import React from 'react'
import {
  Box,
  Heading,
  HStack,
  NativeBaseProvider,
  ScrollView,
  Text,
} from 'native-base'
import { Step } from '../../components/types/step'
import { SafeAreaView } from 'react-native'

export const Finish: React.FC<Step> = () => {
  return (
    <SafeAreaView testID='finish'>
      <NativeBaseProvider>
        <ScrollView>
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
                <Heading size='md' alignContent='center'>
                  Vielen Dank!
                </Heading>
                <Text>Ihr Finanzantrag wurde erfolgreich abgesendet!</Text>
              </Box>
            </HStack>
          </Box>
        </ScrollView>
      </NativeBaseProvider>
    </SafeAreaView>
  )
}
export default Finish
