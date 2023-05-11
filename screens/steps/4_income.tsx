import React from 'react'
import { useForm, Controller } from 'react-hook-form'
import {
  Box,
  Button,
  CheckIcon,
  FormControl,
  Heading,
  HStack,
  Input,
  NativeBaseProvider,
  ScrollView,
  Text,
  WarningIcon,
} from 'native-base'
import { yupResolver } from '@hookform/resolvers/yup'
import { Step } from '../../components/types/step'
import { IncomeSchema } from '../../helpers/validations/income'
import { SafeAreaView } from 'react-native'
import { createServer } from 'miragejs'

declare const window: any

export const Income: React.FC<Step> = ({ step, setStep }) => {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(IncomeSchema),
  })
  const onSubmit = (data: any) => {
    console.log(data)
    setStep(step + 1)
  }

  const [salary, setSalary] = React.useState()
  const [alimony, setAlimony] = React.useState()
  const [pension, setPension] = React.useState()
  const [ReturnOnAssets, setReturnOnAssets] = React.useState()
  const [thirdPartyProperties, SetThirdPartyProperties] = React.useState()
  const [OtherIncome, SetOtherIncome] = React.useState()
  const [LeasingAndConsumerCredit, SetLeasingAndConsumerCredit] =
    React.useState()

  const sum =
    Number(salary) +
    Number(alimony) +
    Number(pension) +
    Number(ReturnOnAssets) +
    Number(thirdPartyProperties) +
    Number(OtherIncome) -
    Number(LeasingAndConsumerCredit)

  let server = window.server
  if (window.server) {
    server.shutdown()
  }

  window.server = createServer({
    routes() {
      this.get('/api/propertyPrice', () => {
        return {
          prices: [
            { id: 1, name: 'Total Preis der Immobillie', price: 750000 },
          ],
        }
      })
    },
  })

  let [prices, setPrices] = React.useState<any[]>([])

  React.useEffect(() => {
    fetch('/api/propertyPrice')
      .then((res) => res.json())
      .then((json) => setPrices(json.prices))
  }, [])

  const calculatedPrice = () => {
    const propertyPrice = prices.map((p) => Number(p.price))
    return Number(propertyPrice) * Number(0.75)
  }

  return (
    <SafeAreaView testID='income'>
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
                  Finanzierung
                </Heading>
                <Text>
                  {sum > calculatedPrice() ? (
                    <React.Fragment>
                      <CheckIcon size='5' mt='0.5' color='emerald.500' />
                      <Text color='emerald.500' fontSize='md'>
                        Amortisation
                      </Text>
                    </React.Fragment>
                  ) : (
                    <React.Fragment>
                      <WarningIcon size='5' mt='0.5' color='emerald.500' />
                      <Text color='emerald.500' fontSize='md'>
                        Amortisation
                      </Text>
                    </React.Fragment>
                  )}
                </Text>
              </Box>
            </HStack>

            <Heading
              marginTop={4}
              marginBottom={4}
              size='sm'
              alignContent='center'
            >
              Einkommen
            </Heading>
            <FormControl isInvalid={'salary' in errors}>
              <FormControl.Label>Lohn</FormControl.Label>
              <Controller
                control={control}
                render={({ field: { onChange, value, onBlur } }) => (
                  <Input
                    testID='salaryID'
                    onBlur={onBlur}
                    onChangeText={(val) => onChange(val)}
                    //@ts-ignore
                    onChange={setSalary(value)}
                    value={value}
                  />
                )}
                name='salary'
              />
              <FormControl.ErrorMessage>
                {errors.salary?.message}
              </FormControl.ErrorMessage>
            </FormControl>

            <FormControl isInvalid={'alimony' in errors}>
              <FormControl.Label>Alimente</FormControl.Label>
              <Controller
                control={control}
                render={({ field: { onChange, value, onBlur } }) => (
                  <Input
                    testID='alimonyID'
                    onBlur={onBlur}
                    onChangeText={(val) => onChange(val)}
                    //@ts-ignore
                    onChange={setAlimony(value)}
                    value={value}
                  />
                )}
                name='alimony'
              />
              <FormControl.ErrorMessage>
                {errors.alimony?.message}
              </FormControl.ErrorMessage>
            </FormControl>
            <FormControl isInvalid={'pension' in errors}>
              <FormControl.Label>Rente</FormControl.Label>
              <Controller
                control={control}
                render={({ field: { onChange, value, onBlur } }) => (
                  <Input
                    testID='pensionID'
                    onBlur={onBlur}
                    onChangeText={(val) => onChange(val)}
                    //@ts-ignore
                    onChange={setPension(value)}
                    value={value}
                  />
                )}
                name='pension'
              />
              <FormControl.ErrorMessage>
                {errors.pension?.message}
              </FormControl.ErrorMessage>
            </FormControl>

            <FormControl isInvalid={'ReturnOnAssets' in errors}>
              <FormControl.Label>Vermögensertrag</FormControl.Label>
              <Controller
                control={control}
                render={({ field: { onChange, value, onBlur } }) => (
                  <Input
                    testID='ReturnOnAssetsID'
                    onBlur={onBlur}
                    onChangeText={(val) => onChange(val)}
                    //@ts-ignore
                    onChange={setReturnOnAssets(value)}
                    value={value}
                  />
                )}
                name='ReturnOnAssets'
              />
              <FormControl.ErrorMessage>
                {errors.ReturnOnAssets?.message}
              </FormControl.ErrorMessage>
            </FormControl>

            <FormControl isInvalid={'thirdPartyProperties' in errors}>
              <FormControl.Label>Drittliegenschaften</FormControl.Label>
              <Controller
                control={control}
                render={({ field: { onChange, value, onBlur } }) => (
                  <Input
                    testID='thirdPartyPropertiesID'
                    onBlur={onBlur}
                    onChangeText={(val) => onChange(val)}
                    //@ts-ignore
                    onChange={SetThirdPartyProperties(value)}
                    value={value}
                  />
                )}
                name='thirdPartyProperties'
              />
              <FormControl.ErrorMessage>
                {errors.thirdPartyProperties?.message}
              </FormControl.ErrorMessage>
            </FormControl>

            <FormControl isInvalid={'OtherIncome' in errors}>
              <FormControl.Label>Andere Einkommen</FormControl.Label>
              <Controller
                control={control}
                render={({ field: { onChange, value, onBlur } }) => (
                  <Input
                    testID='OtherIncomeID'
                    onBlur={onBlur}
                    onChangeText={(val) => onChange(val)}
                    //@ts-ignore
                    onChange={SetOtherIncome(value)}
                    value={value}
                  />
                )}
                name='OtherIncome'
              />
              <FormControl.ErrorMessage>
                {errors.OtherIncome?.message}
              </FormControl.ErrorMessage>
            </FormControl>
            <Heading
              marginTop={4}
              marginBottom={4}
              size='sm'
              alignContent='center'
            >
              Ausgaben
            </Heading>
            <FormControl isInvalid={'LeasingAndConsumerCredit' in errors}>
              <FormControl.Label>Leasing- und Konsumkredit</FormControl.Label>
              <Controller
                control={control}
                render={({ field: { onChange, value, onBlur } }) => (
                  <Input
                    testID='LeasingAndConsumerCreditID'
                    onBlur={onBlur}
                    onChangeText={(val) => onChange(val)}
                    //@ts-ignore
                    onChange={SetLeasingAndConsumerCredit(value)}
                    value={value}
                  />
                )}
                name='LeasingAndConsumerCredit'
              />
              <FormControl.ErrorMessage>
                {errors.LeasingAndConsumerCredit?.message}
              </FormControl.ErrorMessage>
            </FormControl>

            <Button
              testID='incomeButtonID'
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
export default Income
