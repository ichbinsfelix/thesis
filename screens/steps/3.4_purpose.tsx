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
  Text,
} from 'native-base'
import { yupResolver } from '@hookform/resolvers/yup'
import { PropertyPurposeSchema } from '../../helpers/validations/property'
import { Step } from '../../components/types/step'
import { SafeAreaView } from 'react-native'

export const Purpose: React.FC<Step> = ({ step, setStep }) => {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(PropertyPurposeSchema),
  })
  const onSubmit = (data: any) => {
    console.log(data)
    setStep(step + 1)
  }
  const [checkedBuildingLaw, setCheckedBuildingLaw] = React.useState(false)
  const [checkedGrannyApartment, setCheckedGrannyApartment] =
    React.useState(false)
  const [checkedTransactionLoan, setCheckedTransactionLoan] =
    React.useState(false)

  return (
    <SafeAreaView testID='purpose'>
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
                  Zweck
                </Heading>
              </Box>
            </HStack>
            <FormControl isRequired isInvalid={'buildingLaw' in errors}>
              <FormControl.Label>Im Baurecht</FormControl.Label>
              <Controller
                name='buildingLaw'
                control={control}
                render={({ field: { onChange, value, onBlur } }) => (
                  <Checkbox.Group
                    onChange={(values) => {
                      onChange(values)
                      setCheckedBuildingLaw(!checkedBuildingLaw)
                    }}
                    //@ts-ignore
                    isChecked={checkedBuildingLaw}
                  >
                    <Checkbox value='ja' colorScheme='orange'>
                      <Text testID='buildingLawID' mx={2}>
                        Ja
                      </Text>
                    </Checkbox>
                  </Checkbox.Group>
                )}
              />
              <FormControl.ErrorMessage>
                {errors.buildingLaw?.message}
              </FormControl.ErrorMessage>
            </FormControl>
            {checkedBuildingLaw ? (
              <React.Fragment>
                <FormControl
                  isRequired
                  isInvalid={'buildingLawExpiresOn' in errors}
                >
                  <FormControl.Label>Verfall des Baurechts</FormControl.Label>
                  <Controller
                    control={control}
                    render={({ field: { onChange, value, onBlur } }) => (
                      <Input
                        testID='buildingLawExpiresOnID'
                        onBlur={onBlur}
                        onChangeText={(val) => onChange(val)}
                        value={value}
                      />
                    )}
                    name='buildingLawExpiresOn'
                  />
                  <FormControl.ErrorMessage>
                    {errors.buildingLawExpiresOn?.message}
                  </FormControl.ErrorMessage>
                </FormControl>
                <FormControl
                  isRequired
                  isInvalid={'buildingLawInterest' in errors}
                >
                  <FormControl.Label>
                    {' '}
                    Baurechtszinsen pro Jahr
                  </FormControl.Label>
                  <Controller
                    control={control}
                    render={({ field: { onChange, value, onBlur } }) => (
                      <Input
                        testID='buildingLawInterestID'
                        onBlur={onBlur}
                        onChangeText={(val) => onChange(val)}
                        value={value}
                      />
                    )}
                    name='buildingLawInterest'
                  />
                  <FormControl.ErrorMessage>
                    {errors.buildingLawInterest?.message}
                  </FormControl.ErrorMessage>
                </FormControl>
              </React.Fragment>
            ) : null}
            <FormControl
              isRequired
              isInvalid={'checkedGrannyApartment' in errors}
            >
              <FormControl.Label>
                {' '}
                Gibt es eine Einliegerwohnung / ZFH?
              </FormControl.Label>
              <Controller
                name='checkedGrannyApartment'
                control={control}
                render={({ field: { onChange, value, onBlur } }) => (
                  <Checkbox.Group
                    onChange={(values) => {
                      onChange(values)
                      setCheckedGrannyApartment(!checkedGrannyApartment)
                    }}
                    //@ts-ignore
                    isChecked={checkedGrannyApartment}
                  >
                    <Checkbox value='ja' colorScheme='orange'>
                      <Text testID='checkedGrannyApartmentID' mx={2}>
                        Ja
                      </Text>
                    </Checkbox>
                  </Checkbox.Group>
                )}
              />
              <FormControl.ErrorMessage>
                {errors.checkedGrannyApartment?.message}
              </FormControl.ErrorMessage>
            </FormControl>
            {checkedGrannyApartment ? (
              <React.Fragment>
                <FormControl
                  isRequired
                  isInvalid={'grannyFlatIncome' in errors}
                >
                  <FormControl.Label>
                    {' '}
                    Mietzinseinnahme aus zu finanz. Objekt
                  </FormControl.Label>
                  <Controller
                    control={control}
                    render={({ field: { onChange, value, onBlur } }) => (
                      <Input
                        testID='grannyFlatIncomeID'
                        onBlur={onBlur}
                        onChangeText={(val) => onChange(val)}
                        value={value}
                      />
                    )}
                    name='grannyFlatIncome'
                  />
                  <FormControl.ErrorMessage>
                    {errors.grannyFlatIncome?.message}
                  </FormControl.ErrorMessage>
                </FormControl>

                <FormControl.Label>
                  Kommentar Mietzinseinnahme
                </FormControl.Label>
                <Controller
                  control={control}
                  render={({ field: { onChange, value, onBlur } }) => (
                    <Input
                      testID='grannyFlatCommentID'
                      onBlur={onBlur}
                      onChangeText={(val) => onChange(val)}
                      value={value}
                    />
                  )}
                  name='grannyFlatComment'
                />
              </React.Fragment>
            ) : null}
            <FormControl isInvalid={'checkedTransactionLoan' in errors}>
              <FormControl.Label> Vorgangsdarlehen</FormControl.Label>
              <Controller
                name='checkedTransactionLoan'
                control={control}
                render={({ field: { onChange, value, onBlur } }) => (
                  <Checkbox.Group
                    onChange={(values) => {
                      onChange(values)
                      setCheckedTransactionLoan(!checkedTransactionLoan)
                    }}
                    //@ts-ignore
                    isChecked={checkedTransactionLoan}
                  >
                    <Checkbox value='ja' colorScheme='orange'>
                      <Text testID='checkedTransactionLoanID' mx={2}>
                        Ja
                      </Text>
                    </Checkbox>
                  </Checkbox.Group>
                )}
              />
              <FormControl.ErrorMessage>
                {errors.checkedTransactionLoan?.message}
              </FormControl.ErrorMessage>
            </FormControl>
            {checkedTransactionLoan ? (
              <React.Fragment>
                <FormControl
                  isRequired
                  isInvalid={'transitionalLoanAmount' in errors}
                >
                  <FormControl.Label>Kreditbetrag</FormControl.Label>
                  <Controller
                    control={control}
                    render={({ field: { onChange, value, onBlur } }) => (
                      <Input
                        testID='transitionalLoanAmountID'
                        onBlur={onBlur}
                        onChangeText={(val) => onChange(val)}
                        value={value}
                      />
                    )}
                    name='transitionalLoanAmount'
                  />
                  <FormControl.ErrorMessage>
                    {errors.transitionalLoanAmount?.message}
                  </FormControl.ErrorMessage>
                </FormControl>
                <FormControl
                  isRequired
                  isInvalid={'transitionalLoanInterest' in errors}
                >
                  <FormControl.Label>
                    Vorgangsdarlehen (Zins/Amozahlung p. Jahr)
                  </FormControl.Label>
                  <Controller
                    control={control}
                    render={({ field: { onChange, value, onBlur } }) => (
                      <Input
                        testID='transitionalLoanInterestID'
                        onBlur={onBlur}
                        onChangeText={(val) => onChange(val)}
                        value={value}
                      />
                    )}
                    name='transitionalLoanInterest'
                  />
                  <FormControl.ErrorMessage>
                    {errors.transitionalLoanInterest?.message}
                  </FormControl.ErrorMessage>
                </FormControl>

                <FormControl.Label>
                  {' '}
                  Vorgangsdarlehen (Kommentar)
                </FormControl.Label>
                <Controller
                  control={control}
                  render={({ field: { onChange, value, onBlur } }) => (
                    <Input
                      testID='transitionalLoanCommentID'
                      onBlur={onBlur}
                      onChangeText={(val) => onChange(val)}
                      value={value}
                    />
                  )}
                  name='transitionalLoanComment'
                />
              </React.Fragment>
            ) : null}

            <Button
              testID='purposeButtonID'
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
export default Purpose
