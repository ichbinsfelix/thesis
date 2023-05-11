import React from 'react'
import { useForm, Controller } from 'react-hook-form'
import {
  Box,
  Button,
  Checkbox,
  FormControl,
  Heading,
  HStack,
  NativeBaseProvider,
  ScrollView,
  Select,
  Text,
} from 'native-base'
import axios from 'axios'
import { yupResolver } from '@hookform/resolvers/yup'
import { PropertyEnergyCharacteristicsSchema } from '../../helpers/validations/property'
import { Step } from '../../components/types/step'
import { SafeAreaView } from 'react-native'

export const EnergyCharacteristics: React.FC<Step> = ({ step, setStep }) => {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(PropertyEnergyCharacteristicsSchema),
  })
  const onSubmit = (data: any) => {
    console.log(data)
    setStep(step + 1)
  }
  const [renovation, setRenovation] = React.useState(false)

  return (
    <SafeAreaView testID='property-energy'>
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
                  Energiemerkmale
                </Heading>
              </Box>
            </HStack>
            <FormControl isRequired isInvalid={'photovoltaicSystem' in errors}>
              <FormControl.Label isRequired>
                Photovoltaik Anlage
              </FormControl.Label>
              <Controller
                name='photovoltaicSystem'
                control={control}
                render={({ field: { onChange, value, onBlur } }) => (
                  <Checkbox.Group
                    onChange={(values) => {
                      onChange(values)
                    }}
                    flexDirection='row'
                  >
                    <Checkbox value='ja' colorScheme='orange'>
                      <Text testID='photovoltaicSystemID' mx={2}>
                        Ja
                      </Text>
                    </Checkbox>
                  </Checkbox.Group>
                )}
              />
              <FormControl.ErrorMessage>
                {errors.photovoltaicSystem?.message}
              </FormControl.ErrorMessage>
            </FormControl>
            <FormControl isRequired isInvalid={'energySource' in errors}>
              <FormControl.Label>Energieträger</FormControl.Label>
              <Controller
                control={control}
                render={({ field: { onChange, value, onBlur } }) => (
                  <Select
                    testID='energySourceID'
                    selectedValue={value}
                    onValueChange={(itemValue: string) => {
                      onChange(itemValue)
                    }}
                    placeholder='Bitte auswählen'
                  >
                    <Select.Item label='Fernwärme' value='districtHeatIng' />
                    <Select.Item label='Gas-Heizung' value='gas' />
                    <Select.Item label='Holz-Heizung' value='wood' />
                    <Select.Item label='Öl-Heizung' value='oil' />
                    <Select.Item
                      label='Thermische Solaranlage'
                      value='solarSystem'
                      testID='solarSystemID'
                    />
                    <Select.Item
                      label='Wärmepumpe Luft/Wasser'
                      value='heatPumpWater'
                    />
                    <Select.Item
                      label='Wärmepumpe Erdwärme/andere'
                      value='heatPumpWaterOther'
                    />
                    <Select.Item label='andere' value='other' />
                    <Select.Item label='keine' value='none' />
                  </Select>
                )}
                name='energySource'
              />
              <FormControl.ErrorMessage>
                {errors.energySource?.message}
              </FormControl.ErrorMessage>
            </FormControl>

            <Button
              testID='energyButtonID'
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
export default EnergyCharacteristics
