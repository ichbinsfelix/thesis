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
import { FundsSchema } from '../../helpers/validations/funds'
import { SafeAreaView } from 'react-native'
import { createServer } from 'miragejs'

declare const window: any

export const Funds: React.FC<Step> = ({ step, setStep }) => {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(FundsSchema),
  })
  const onSubmit = (data: any) => {
    console.log(data)
    setStep(step + 1)
  }
  const [bankDeposits, setBankDeposits] = React.useState()
  const [secondPillar, SetSecondPillar] = React.useState()
  const [thirdPillar, SetThirdPillar] = React.useState()
  const [depositValues, setDepositValues] = React.useState()
  const [loanWithSubordination, SetLoanWithSubordination] = React.useState()
  const [donation, SetDonation] = React.useState()
  const [saleProceeds, SetSaleProceeds] = React.useState()
  const [ownWork, SetOwnWork] = React.useState()
  const [others, SetOthers] = React.useState()
  const sum =
    Number(bankDeposits) +
    Number(secondPillar) +
    Number(thirdPillar) +
    Number(depositValues) +
    Number(loanWithSubordination) +
    Number(donation) +
    Number(saleProceeds) +
    Number(ownWork) +
    Number(others)

  let server = window.server
  if (window.server) {
    server.shutdown()
  }

  window.server = createServer({
    routes() {
      this.get('/api/investmentValue', () => {
        return {
          prices: [{ id: 1, name: 'Anlagebetrag', price: 1000000 }],
        }
      })
    },
  })

  let [prices, setPrices] = React.useState<any[]>([])

  React.useEffect(() => {
    fetch('/api/investmentValue')
      .then((res) => res.json())
      .then((json) => setPrices(json.prices))
  }, [])

  const calculatedPrice = () => {
    const investmentPrice = prices.map((p) => Number(p.price))
    return Number(investmentPrice) * Number(0.75)
  }

  return (
    <SafeAreaView testID='funds'>
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
                  Eigenmittel
                </Heading>
                <Text>
                  {sum > calculatedPrice() ? (
                    <React.Fragment>
                      <CheckIcon size='5' mt='0.5' color='emerald.500' />{' '}
                      <Text color='emerald.500' fontSize='md'>
                        Tragbarkeit
                      </Text>
                    </React.Fragment>
                  ) : (
                    <React.Fragment>
                      <WarningIcon size='5' mt='0.5' color='emerald.500' />
                      <Text color='emerald.500' fontSize='md'>
                        Tragbarkeit
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
            ></Heading>
            <FormControl isInvalid={'bankDeposits' in errors}>
              <FormControl.Label>Bankguthaben</FormControl.Label>
              <Controller
                control={control}
                render={({ field: { onChange, value, onBlur } }) => (
                  <Input
                    testID='bankDepositsID'
                    onBlur={onBlur}
                    onChangeText={(val) => onChange(val)}
                    //@ts-ignore
                    onChange={setBankDeposits(value)}
                    value={value}
                  />
                )}
                name='bankDeposits'
              />
              <FormControl.ErrorMessage>
                {errors.bankDeposits?.message}
              </FormControl.ErrorMessage>
            </FormControl>
            <FormControl isInvalid={'secondPillar' in errors}>
              <FormControl.Label>Vorbezug 2. Säule</FormControl.Label>
              <Controller
                control={control}
                render={({ field: { onChange, value, onBlur } }) => (
                  <Input
                    testID='secondPillarID'
                    onBlur={onBlur}
                    onChangeText={(val) => onChange(val)}
                    //@ts-ignore
                    onChange={SetSecondPillar(value)}
                    value={value}
                  />
                )}
                name='secondPillar'
              />
              <FormControl.ErrorMessage>
                {errors.secondPillar?.message}
              </FormControl.ErrorMessage>
            </FormControl>
            <FormControl isInvalid={'thirdPillar' in errors}>
              <FormControl.Label>Vorbezug 3. Säule</FormControl.Label>
              <Controller
                control={control}
                render={({ field: { onChange, value, onBlur } }) => (
                  <Input
                    testID='thirdPillarID'
                    onBlur={onBlur}
                    onChangeText={(val) => onChange(val)}
                    //@ts-ignore
                    onChange={SetThirdPillar(value)}
                    value={value}
                  />
                )}
                name='thirdPillar'
              />
              <FormControl.ErrorMessage>
                {errors.thirdPillar?.message}
              </FormControl.ErrorMessage>
            </FormControl>
            <FormControl isInvalid={'depositValues' in errors}>
              <FormControl.Label>Depotwerte</FormControl.Label>
              <Controller
                control={control}
                render={({ field: { onChange, value, onBlur } }) => (
                  <Input
                    testID='depositValuesID'
                    onBlur={onBlur}
                    onChangeText={(val) => onChange(val)}
                    //@ts-ignore
                    onChange={setDepositValues(value)}
                    value={value}
                  />
                )}
                name='depositValues'
              />
              <FormControl.ErrorMessage>
                {errors.depositValues?.message}
              </FormControl.ErrorMessage>
            </FormControl>
            <FormControl isInvalid={'loanWithSubordination' in errors}>
              <FormControl.Label>
                Darlehen mit Rangrücktritt/Abtretung
              </FormControl.Label>
              <Controller
                control={control}
                render={({ field: { onChange, value, onBlur } }) => (
                  <Input
                    testID='loanWithSubordinationID'
                    onBlur={onBlur}
                    onChangeText={(val) => onChange(val)}
                    //@ts-ignore
                    onChange={SetLoanWithSubordination(value)}
                    value={value}
                  />
                )}
                name='loanWithSubordination'
              />
              <FormControl.ErrorMessage>
                {errors.loanWithSubordination?.message}
              </FormControl.ErrorMessage>
            </FormControl>
            <FormControl isInvalid={'donation' in errors}>
              <FormControl.Label>Schenkung/Erbvorzug</FormControl.Label>
              <Controller
                control={control}
                render={({ field: { onChange, value, onBlur } }) => (
                  <Input
                    testID='donationID'
                    onBlur={onBlur}
                    onChangeText={(val) => onChange(val)}
                    //@ts-ignore
                    onChange={SetDonation(value)}
                    value={value}
                  />
                )}
                name='donation'
              />
              <FormControl.ErrorMessage>
                {errors.donation?.message}
              </FormControl.ErrorMessage>
            </FormControl>
            <FormControl isInvalid={'saleProceeds' in errors}>
              <FormControl.Label>Verkaufserlös</FormControl.Label>
              <Controller
                control={control}
                render={({ field: { onChange, value, onBlur } }) => (
                  <Input
                    testID='saleProceedsID'
                    onBlur={onBlur}
                    onChangeText={(val) => onChange(val)}
                    //@ts-ignore
                    onChange={SetSaleProceeds(value)}
                    value={value}
                  />
                )}
                name='saleProceeds'
              />
              <FormControl.ErrorMessage>
                {errors.saleProceeds?.message}
              </FormControl.ErrorMessage>
            </FormControl>
            <FormControl isInvalid={'ownWork' in errors}>
              <FormControl.Label>Eigene Arbeitsleistungen</FormControl.Label>
              <Controller
                control={control}
                render={({ field: { onChange, value, onBlur } }) => (
                  <Input
                    testID='ownWorkID'
                    onBlur={onBlur}
                    onChangeText={(val) => onChange(val)}
                    //@ts-ignore
                    onChange={SetOwnWork(value)}
                    value={value}
                  />
                )}
                name='ownWork'
              />
              <FormControl.ErrorMessage>
                {errors.ownWork?.message}
              </FormControl.ErrorMessage>
            </FormControl>
            <FormControl isInvalid={'others' in errors}>
              <FormControl.Label>Diverses</FormControl.Label>
              <Controller
                control={control}
                render={({ field: { onChange, value, onBlur } }) => (
                  <Input
                    testID='othersID'
                    onBlur={onBlur}
                    onChangeText={(val) => onChange(val)}
                    //@ts-ignore
                    onChange={SetOthers(value)}
                    value={value}
                  />
                )}
                name='others'
              />
              <FormControl.ErrorMessage>
                {errors.others?.message}
              </FormControl.ErrorMessage>
            </FormControl>

            <Button
              testID='fundsButtonID'
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
export default Funds
