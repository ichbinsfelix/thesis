import React from 'react'
import {
  Box,
  Button,
  Heading,
  HStack,
  NativeBaseProvider,
  ScrollView,
  Text,
} from 'native-base'
import { Step } from '../../components/types/step'
import { SafeAreaView } from 'react-native'
import { createServer } from 'miragejs'

declare const window: any

export const Summary: React.FC<Step> = ({ step, setStep }) => {
  const onSubmit = (data: any) => {
    console.log(data)
    setStep(step + 1)
  }

  let server = window.server
  if (window.server) {
    server.shutdown()
  }

  window.server = createServer({
    routes() {
      this.get('/api/amortisation', () => {
        return {
          amortisation: [
            {
              id: 1,
              name: 'Total Effekt. Amortisation/Jahr',
              value: 7500,
            },
            {
              id: 2,
              name: 'Effekt. Amortisation nach 15 Jahren',
              value: 112500,
            },
            {
              id: 3,
              name: 'Min. Amortisation nach 15 Jahren',
              value: 130005,
            },
          ],
        }
      }),
        this.get('/api/portability', () => {
          return {
            portability: [
              { id: 1, name: 'Fremdkapital', value: 800000 },
              {
                id: 2,
                name: 'Kalkulatorische Kosten (6%)',
                value: 48000,
              },
              { id: 3, name: 'Minimales Einkommen', value: 20000 },
              { id: 4, name: 'Verfügbares Einkommen', value: 180000 },
            ],
          }
        }),
        this.get('/api/enfeoff', () => {
          return {
            enfeoff: [
              {
                id: 1,
                name: 'Anlagebetrag',
                value: 1000000,
              },
              {
                id: 2,
                name: 'Verkehrswert',
                value: 1067000,
              },
              {
                id: 3,
                name: 'Belehnungsbasis (100%)',
                value: 1000000,
              },
              {
                id: 4,
                name: 'Hypothek (95%)',
                value: 945000,
              },
              {
                id: 5,
                name: 'Eigenmittel (6%)',
                value: 55000,
              },
              {
                id: 6,
                name: 'davon CASH (1%)',
                value: 5000,
              },
              {
                id: 7,
                name: 'Fehlende CASH Eigenmittel (6%)',
                value: 13000,
              },
              {
                id: 8,
                name: 'Eigenmittel (5%)',
                value: 50000,
              },
              {
                id: 9,
                name: 'Fehlende Eigenmittel (1%)',
                value: 5000,
              },
              {
                id: 10,
                name: 'Zusatzsicherheiten (13%)',
                value: 127000,
              },
            ],
          }
        })
    },
  })
  let [amortisation, setAmortisation] = React.useState<any[]>([])

  React.useEffect(() => {
    fetch('/api/amortisation')
      .then((res) => res.json())
      .then((json) => setAmortisation(json.amortisation))
  }, [])

  let [portability, SetPortability] = React.useState<any[]>([])

  React.useEffect(() => {
    fetch('/api/portability')
      .then((res) => res.json())
      .then((json) => SetPortability(json.portability))
  }, [])

  let [enfeoff, SetEnfeoff] = React.useState<any[]>([])

  React.useEffect(() => {
    fetch('/api/enfeoff')
      .then((res) => res.json())
      .then((json) => SetEnfeoff(json.enfeoff))
  }, [])

  return (
    <SafeAreaView testID='summary'>
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
                  Zusammenfassung
                </Heading>
                <Heading
                  marginTop={4}
                  marginBottom={4}
                  size='sm'
                  alignContent='center'
                >
                  Amortisation
                </Heading>

                {amortisation.map((a) => (
                  <Text testID='amortisationID' key={a.id}>
                    <Text fontSize='md'> {a.name}</Text>
                    <Text fontSize='md' bold>
                      {a.value}
                    </Text>
                  </Text>
                ))}
                <Heading
                  marginTop={4}
                  marginBottom={4}
                  size='sm'
                  alignContent='center'
                >
                  Eigenmittel
                </Heading>

                {portability.map((p) => (
                  <Text testID='portabilityID' key={p.id}>
                    <Text fontSize='md'> {p.name}</Text>
                    <Text fontSize='md' bold>
                      {p.value}
                    </Text>
                  </Text>
                ))}
                <Heading
                  marginTop={4}
                  marginBottom={4}
                  size='sm'
                  alignContent='center'
                >
                  Belehnung
                </Heading>

                {enfeoff.map((e) => (
                  <Text testID='enfeoffID' key={e.id}>
                    <Text fontSize='md'> {e.name}</Text>
                    <Text fontSize='md' bold>
                      {e.value}
                    </Text>
                  </Text>
                ))}
              </Box>
            </HStack>
            <Button
              testID='summaryButtonID'
              margin={6}
              onPress={onSubmit}
              colorScheme='pink'
            >
              Next
            </Button>
            <Button
              margin={6}
              onPress={() => setStep(step - 1)}
              colorScheme='red'
            >
              Back
            </Button>
          </Box>
        </ScrollView>
      </NativeBaseProvider>
    </SafeAreaView>
  )
}

export default Summary
