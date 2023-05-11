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
import { PropertyAddressSchema } from '../../helpers/validations/property'
import { Step } from '../../components/types/step'
import { SafeAreaView } from 'react-native'

export const PropertyAdress: React.FC<Step> = ({ step, setStep }) => {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(PropertyAddressSchema),
  })
  const onSubmit = (data: any) => {
    console.log(data)
    setStep(step + 1)
  }

  return (
    <SafeAreaView testID='property-address'>
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
                  Liegenschaft
                </Heading>
                <Heading
                  marginTop={4}
                  marginBottom={4}
                  size='sm'
                  alignContent='center'
                >
                  Addresse
                </Heading>
              </Box>
            </HStack>
            <FormControl isRequired isInvalid={'street' in errors}>
              <FormControl.Label>Strasse</FormControl.Label>
              <Controller
                control={control}
                render={({ field: { onChange, value, onBlur } }) => (
                  <Input
                    testID='propertyStreetID'
                    onBlur={onBlur}
                    onChangeText={(val) => onChange(val)}
                    value={value}
                  />
                )}
                name='street'
                defaultValue=''
              />
              <FormControl.ErrorMessage>
                {errors.street?.message}
              </FormControl.ErrorMessage>
            </FormControl>
            <FormControl isRequired isInvalid={'housenumber' in errors}>
              <FormControl.Label>Hausnummer</FormControl.Label>
              <Controller
                control={control}
                render={({ field: { onChange, value, onBlur } }) => (
                  <Input
                    testID='propertyHousenumberID'
                    onBlur={onBlur}
                    onChangeText={(val) => onChange(val)}
                    value={value}
                  />
                )}
                name='housenumber'
              />
              <FormControl.ErrorMessage>
                {errors.housenumber?.message}
              </FormControl.ErrorMessage>
            </FormControl>
            <FormControl isRequired isInvalid={'zip' in errors}>
              <FormControl.Label>PLZ</FormControl.Label>
              <Controller
                control={control}
                render={({ field: { onChange, value, onBlur } }) => (
                  <Input
                    testID='zipID'
                    onBlur={onBlur}
                    onChangeText={(val) => onChange(val)}
                    value={value}
                  />
                )}
                name='zip'
              />
              <FormControl.ErrorMessage>
                {errors.zip?.message}
              </FormControl.ErrorMessage>
            </FormControl>
            <FormControl isRequired isInvalid={'city' in errors}>
              <FormControl.Label>Ort</FormControl.Label>
              <Controller
                control={control}
                render={({ field: { onChange, value, onBlur } }) => (
                  <Input
                    testID='cityID'
                    onBlur={onBlur}
                    onChangeText={(val) => onChange(val)}
                    value={value}
                  />
                )}
                name='city'
              />
              <FormControl.ErrorMessage>
                {errors.city?.message}
              </FormControl.ErrorMessage>
            </FormControl>

            <Button
              testID='propertyAdressButtonID'
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
export default PropertyAdress
