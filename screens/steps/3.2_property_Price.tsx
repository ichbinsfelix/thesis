import React from 'react'
import { useForm, Controller } from 'react-hook-form'
import {
  Box,
  Button,
  FormControl,
  Heading,
  HStack,
  Input,
  NativeBaseProvider,
  ScrollView,
} from 'native-base'
import { yupResolver } from '@hookform/resolvers/yup'
import { PropertyPriceSchema } from '../../helpers/validations/property'
import { Step } from '../../components/types/step'
import { SafeAreaView, View } from 'react-native'

export const PropertyPrice: React.FC<Step> = ({ step, setStep }) => {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(PropertyPriceSchema),
  })

  const [renovation, setRenovation] = React.useState(false)

  const onSubmit = (data: any) => {
    console.log(data)
    setStep(step + 1)
  }

  return (
    <SafeAreaView testID='property-price'>
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
            {!renovation && (
              <React.Fragment>
                <HStack justifyContent='space-between'>
                  <Box justifyContent='space-between'>
                    <Heading size='md' alignContent='center'>
                      Liegenschaft
                    </Heading>
                    <Heading
                      marginTop={4}
                      marginBottom={4}
                      size='sm'
                      alignContent='center'
                    >
                      Kaufpreis
                    </Heading>
                  </Box>
                </HStack>
                <FormControl isRequired isInvalid={'purchasePrice' in errors}>
                  <FormControl.Label>
                    {' '}
                    Kaufbetrag der Liegenschaft
                  </FormControl.Label>
                  <Controller
                    control={control}
                    render={({ field: { onChange, value, onBlur } }) => (
                      <Input
                        testID='purchasePriceID'
                        onBlur={onBlur}
                        onChangeText={(val) => onChange(val)}
                        value={value}
                      />
                    )}
                    name='purchasePrice'
                    defaultValue=''
                  />
                  <FormControl.ErrorMessage>
                    {errors.purchasePrice?.message}
                  </FormControl.ErrorMessage>
                </FormControl>
                <Button
                  testID='openRenovationID'
                  variant='link'
                  onPress={() => setRenovation(true)}
                  colorScheme='yellow'
                >
                  Sind Renovationen geplant?
                </Button>
              </React.Fragment>
            )}
            {renovation && (
              <React.Fragment>
                <Heading size='md' alignContent='center'>
                  Liegenschaft
                </Heading>
                <Heading
                  marginTop={4}
                  marginBottom={4}
                  size='sm'
                  alignContent='center'
                >
                  Kaufpreis
                </Heading>
                <FormControl isRequired isInvalid={'purchasePrice' in errors}>
                  <FormControl.Label>
                    {' '}
                    Kaufbetrag der Liegenschaft
                  </FormControl.Label>
                  <Controller
                    control={control}
                    render={({ field: { onChange, value, onBlur } }) => (
                      <Input
                        onBlur={onBlur}
                        onChangeText={(val) => onChange(val)}
                        value={value}
                      />
                    )}
                    name='purchasePrice'
                    defaultValue=''
                  />
                  <FormControl.ErrorMessage>
                    {errors.purchasePrice?.message}
                  </FormControl.ErrorMessage>
                </FormControl>
                <FormControl isRequired isInvalid={'renovationPrice' in errors}>
                  <FormControl.Label> Renovation</FormControl.Label>
                  <Controller
                    control={control}
                    render={({ field: { onChange, value, onBlur } }) => (
                      <Input
                        testID='renovationPriceID'
                        onBlur={onBlur}
                        onChangeText={(val) => onChange(val)}
                        value={value}
                      />
                    )}
                    name='renovationPrice'
                    defaultValue=''
                  />
                  <FormControl.ErrorMessage>
                    {errors.renovationPrice?.message}
                  </FormControl.ErrorMessage>
                </FormControl>
                <Button
                  variant='link'
                  onPress={() => setRenovation(false)}
                  colorScheme='yellow'
                >
                  Keine Renovationen geplant?
                </Button>
              </React.Fragment>
            )}

            <Button
              testID='priceAdressButtonID'
              margin={6}
              onPress={handleSubmit(onSubmit)}
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
export default PropertyPrice
