import React from 'react'
import { useForm, Controller } from 'react-hook-form'
import {
  Box,
  Button,
  FormControl,
  Heading,
  HStack,
  Input,
  ScrollView,
  WarningIcon,
  Text,
  CheckIcon,
  NativeBaseProvider,
} from 'native-base'
import { yupResolver } from '@hookform/resolvers/yup'

import { Step } from '../../components/types/step'
import { CollateralsSchema } from '../../helpers/validations/collaterals'
import { SafeAreaView } from 'react-native'
import { createServer } from 'miragejs'

declare const window: any

export const Collaterals: React.FC<Step> = ({ step, setStep }) => {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(CollateralsSchema),
  })
  const onSubmit = (data: any) => {
    console.log(data)
    setStep(step + 1)
  }

  const [secondPillar, SetSecondPillar] = React.useState()
  const [thirdPillar, SetThirdPillar] = React.useState()
  const [freeLifeInsurance, SetFreeLifeInsurance] = React.useState()
  const [tiedLifeInsurance, SetTiedLifeInsurance] = React.useState()
  const [fundLifeInsurance, SetFundLifeInsurance] = React.useState()
  const [tiedFundLifeInsurance, SetTiedFundLifeInsurance] = React.useState()
  const [freeDeathBenefitPolicy, SetFreeDeathBenefitPolicy] = React.useState()
  const sum =
    Number(secondPillar) +
    Number(thirdPillar) +
    Number(freeLifeInsurance) +
    Number(tiedLifeInsurance) +
    Number(fundLifeInsurance) +
    Number(tiedFundLifeInsurance) +
    Number(freeDeathBenefitPolicy)

  let server = window.server
  if (window.server) {
    server.shutdown()
  }

  window.server = createServer({
    routes() {
      this.get('/api/amortisation', () => {
        return {
          prices: [{ id: 1, name: 'Amortisation', price: 550000 }],
        }
      })
    },
  })

  let [prices, setPrices] = React.useState<any[]>([])

  React.useEffect(() => {
    fetch('/api/amortisation')
      .then((res) => res.json())
      .then((json) => setPrices(json.prices))
  }, [])

  const calculatedPrice = () => {
    const amortisationPrice = prices.map((p) => Number(p.price))
    return Number(amortisationPrice)
  }

  return (
    <SafeAreaView testID='collaterals'>
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
                  Zusatzdeckung
                </Heading>
                <Text>
                  {sum > calculatedPrice() ? (
                    <React.Fragment>
                      <CheckIcon size='5' mt='0.5' color='emerald.500' />{' '}
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
            <FormControl isInvalid={'secondPillar' in errors}>
              <FormControl.Label>2. Säule</FormControl.Label>
              <Controller
                control={control}
                render={({ field: { onChange, value, onBlur } }) => (
                  <Input
                    testID='secondPillarIDcol'
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
              <FormControl.Label>3. Säule</FormControl.Label>
              <Controller
                control={control}
                render={({ field: { onChange, value, onBlur } }) => (
                  <Input
                    testID='thirdPillarIDcol'
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
            <FormControl isInvalid={'freeLifeInsurance' in errors}>
              <FormControl.Label>Freie Lebensversicherung</FormControl.Label>
              <Controller
                control={control}
                render={({ field: { onChange, value, onBlur } }) => (
                  <Input
                    testID='freeLifeInsuranceID'
                    onBlur={onBlur}
                    onChangeText={(val) => onChange(val)}
                    //@ts-ignore
                    onChange={SetFreeLifeInsurance(value)}
                    value={value}
                  />
                )}
                name='freeLifeInsurance'
              />
              <FormControl.ErrorMessage>
                {errors.freeLifeInsurance?.message}
              </FormControl.ErrorMessage>
            </FormControl>
            <FormControl isInvalid={'tiedLifeInsurance' in errors}>
              <FormControl.Label>
                Gebundene Lebensversicherung
              </FormControl.Label>
              <Controller
                control={control}
                render={({ field: { onChange, value, onBlur } }) => (
                  <Input
                    testID='tiedLifeInsuranceID'
                    onBlur={onBlur}
                    onChangeText={(val) => onChange(val)}
                    //@ts-ignore
                    onChange={SetTiedLifeInsurance(value)}
                    value={value}
                  />
                )}
                name='tiedLifeInsurance'
              />
              <FormControl.ErrorMessage>
                {errors.tiedLifeInsurance?.message}
              </FormControl.ErrorMessage>
            </FormControl>
            <FormControl isInvalid={'fundLifeInsurance' in errors}>
              <FormControl.Label>
                Freie Fonds-Lebensversicherung
              </FormControl.Label>
              <Controller
                control={control}
                render={({ field: { onChange, value, onBlur } }) => (
                  <Input
                    testID='fundLifeInsuranceID'
                    onBlur={onBlur}
                    onChangeText={(val) => onChange(val)}
                    //@ts-ignore
                    onChange={SetFundLifeInsurance(value)}
                    value={value}
                  />
                )}
                name='fundLifeInsurance'
              />
              <FormControl.ErrorMessage>
                {errors.fundLifeInsurance?.message}
              </FormControl.ErrorMessage>
            </FormControl>
            <FormControl isInvalid={'tiedFundLifeInsurance' in errors}>
              <FormControl.Label>
                Gebundene Fonds- Lebensversicherung
              </FormControl.Label>
              <Controller
                control={control}
                render={({ field: { onChange, value, onBlur } }) => (
                  <Input
                    testID='tiedFundLifeInsuranceID'
                    onBlur={onBlur}
                    onChangeText={(val) => onChange(val)}
                    //@ts-ignore
                    onChange={SetTiedFundLifeInsurance(value)}
                    value={value}
                  />
                )}
                name='tiedFundLifeInsurance'
              />
              <FormControl.ErrorMessage>
                {errors.tiedFundLifeInsurance?.message}
              </FormControl.ErrorMessage>
            </FormControl>
            <FormControl isInvalid={'freeDeathBenefitPolicy' in errors}>
              <FormControl.Label>
                Freie Todesfall-Risikopolice
              </FormControl.Label>
              <Controller
                control={control}
                render={({ field: { onChange, value, onBlur } }) => (
                  <Input
                    testID='freeDeathBenefitPolicyID'
                    onBlur={onBlur}
                    onChangeText={(val) => onChange(val)}
                    //@ts-ignore
                    onChange={SetFreeDeathBenefitPolicy(value)}
                    value={value}
                  />
                )}
                name='freeDeathBenefitPolicy'
              />
              <FormControl.ErrorMessage>
                {errors.freeDeathBenefitPolicy?.message}
              </FormControl.ErrorMessage>
            </FormControl>

            <Button
              testID='collateralsButtonID'
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
export default Collaterals
