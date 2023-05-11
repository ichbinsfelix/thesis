import React from 'react'
import { useForm, Controller } from 'react-hook-form'
import {
  Box,
  Button,
  Checkbox,
  FormControl,
  Heading,
  HStack,
  Input,
  NativeBaseProvider,
  ScrollView,
  Select,
  Text,
} from 'native-base'
import countries from '../../translations/countries'
import Zivilstate from '../../helpers/Zivilstate'
import { yupResolver } from '@hookform/resolvers/yup'
import { PartnerSchema } from '../../helpers/validations/profile'
import { Step } from '../../components/types/step'
import { SafeAreaView } from 'react-native'

export const Person: React.FC<Step> = ({ step, setStep }) => {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(PartnerSchema),
  })

  const onSubmit = (data: any) => {
    console.log(data)
    setStep(step + 1)
  }

  return (
    <SafeAreaView testID='profile-screen'>
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
                <Heading testID='ProfileID' size='md' alignContent='center'>
                  Profil
                </Heading>
              </Box>
            </HStack>
            <FormControl isRequired isInvalid={'gender' in errors}>
              <FormControl.Label isRequired>Anrede</FormControl.Label>
              <Controller
                name='gender'
                control={control}
                render={({ field: { onChange, value, onBlur } }) => (
                  <Checkbox.Group
                    onChange={(values) => {
                      onChange(values)
                    }}
                    flexDirection='row'
                    testID='genderID'
                  >
                    <Checkbox value='male' colorScheme='orange'>
                      <Text testID='maleID' mx={2}>
                        Herr
                      </Text>
                    </Checkbox>
                    <Checkbox value='female' colorScheme='dark'>
                      <Text testID='femaleID' mx={2}>
                        Frau
                      </Text>
                    </Checkbox>
                  </Checkbox.Group>
                )}
              />
              <FormControl.ErrorMessage>
                {errors.gender?.message}
              </FormControl.ErrorMessage>
            </FormControl>
            <FormControl isRequired isInvalid={'firstName' in errors}>
              <FormControl.Label>Vorname</FormControl.Label>
              <Controller
                control={control}
                render={({ field: { onChange, value, onBlur } }) => (
                  <Input
                    testID='firstNameID'
                    onBlur={onBlur}
                    placeholder='Müller'
                    onChangeText={(val) => onChange(val)}
                    value={value}
                  />
                )}
                name='firstName'
                defaultValue=''
              />
              <FormControl.ErrorMessage>
                {errors.firstName?.message}
              </FormControl.ErrorMessage>
            </FormControl>
            <FormControl isRequired isInvalid={'lastName' in errors}>
              <FormControl.Label>Nachname</FormControl.Label>
              <Controller
                control={control}
                render={({ field: { onChange, value, onBlur } }) => (
                  <Input
                    testID='lastNameID'
                    onBlur={onBlur}
                    placeholder='Müller'
                    onChangeText={(val) => onChange(val)}
                    value={value}
                  />
                )}
                name='lastName'
                defaultValue=''
              />
              <FormControl.ErrorMessage>
                {errors.lastName?.message}
              </FormControl.ErrorMessage>
            </FormControl>
            <FormControl.Label>Nationalität</FormControl.Label>
            <Controller
              control={control}
              render={({ field: { onChange, value, onBlur } }) => (
                <Select
                  testID='languageID'
                  placeholder='Welche Nationität bist du?'
                  selectedValue={value}
                  onValueChange={(itemValue: string) => {
                    onChange(itemValue)
                  }}
                >
                  {Object.values(countries).map((x) => (
                    <Select.Item label={x} value={x} />
                  ))}
                </Select>
              )}
              name='language'
              defaultValue='Schweiz'
            />
            <FormControl.Label>Heimatort</FormControl.Label>
            <Controller
              control={control}
              render={({ field: { onChange, value, onBlur } }) => (
                <Input
                  testID='hometownID'
                  onBlur={onBlur}
                  placeholder='Zurich'
                  onChangeText={(val) => onChange(val)}
                  value={value}
                />
              )}
              name='hometown'
              defaultValue=''
            />
            <FormControl isRequired isInvalid={'birthDate' in errors}>
              <FormControl.Label>Geburtsdatum</FormControl.Label>
              <Controller
                control={control}
                render={({ field: { onChange, value, onBlur } }) => (
                  <Input
                    testID='birthDateID'
                    onBlur={onBlur}
                    onChangeText={(val) => onChange(val)}
                    value={value}
                  />
                )}
                name='birthDate'
                defaultValue=''
              />
              <FormControl.ErrorMessage>
                {errors.birthDate?.message}
              </FormControl.ErrorMessage>
            </FormControl>
            <FormControl isInvalid={'zivilstate' in errors}>
              <FormControl.Label>Zvilstand</FormControl.Label>
              <Controller
                control={control}
                render={({ field: { onChange, value, onBlur } }) => (
                  <Select
                    testID='zivilstate'
                    selectedValue={value}
                    onValueChange={(itemValue: string) => {
                      onChange(itemValue)
                    }}
                  >
                    {Object.values(Zivilstate).map((x) => (
                      <Select.Item label={x} value={x} />
                    ))}
                  </Select>
                )}
                name='zivilstate'
                defaultValue='Ledig'
              />
            </FormControl>
            <FormControl isRequired isInvalid={'street' in errors}>
              <FormControl.Label>Strasse</FormControl.Label>
              <Controller
                control={control}
                render={({ field: { onChange, value, onBlur } }) => (
                  <Input
                    testID='streetID'
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
                    testID='housenumberID'
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
              testID='profileButtonID'
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

export default Person
