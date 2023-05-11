describe('App', () => {
  beforeAll(async () => {
    await device.launchApp()
  })

  beforeEach(async () => {
    await device.reloadReactNative()
  })

  it('run threw wizard with success', async () => {
    // render first screen
    await expect(element(by.id('welcomeID'))).toBeVisible()
    await element(by.id('startID')).tap()

    //validate person view
    await expect(element(by.id('profile-screen'))).toBeVisible()
    await element(by.id('femaleID')).tap()
    await element(by.id('firstNameID')).typeText('Felix')
    await element(by.id('lastNameID')).typeText('Schneider')
    await element(by.id('hometownID')).typeText('Biel')
    await element(by.id('birthDateID')).typeText('07/13/1992')
    await element(by.id('streetID')).typeText('Röschibachstrasse')
    await element(by.id('housenumberID')).typeText('72')
    await element(by.id('zipID')).typeText('8037')
    await element(by.id('cityID')).typeText('Zürich')
    await element(by.id('profileButtonID')).tap()

    //validate all property values
    await expect(element(by.id('property-address'))).toBeVisible()
    await element(by.id('propertyStreetID')).typeText('Zentralstrasse')
    await element(by.id('propertyHousenumberID')).typeText('67')
    await element(by.id('zipID')).typeText('8003')
    await element(by.id('cityID')).typeText('Zürich')
    await element(by.id('propertyAdressButtonID')).tap()
    await expect(element(by.id('property-price'))).toBeVisible()
    await element(by.id('purchasePriceID')).typeText('1250000')
    await element(by.id('openRenovationID')).tap()
    await element(by.id('renovationPriceID')).typeText('250000')
    await element(by.id('priceAdressButtonID')).tap()
    await expect(element(by.id('property-energy'))).toBeVisible()
    await element(by.id('photovoltaicSystemID')).tap()
    await element(by.id('energySourceID')).tap()
    await element(by.id('solarSystemID')).tap()
    await element(by.id('energyButtonID')).tap()
    await expect(element(by.id('purpose'))).toBeVisible()
    await element(by.id('buildingLawID')).tap()
    await element(by.id('buildingLawExpiresOnID')).typeText('12/01/2029')
    await element(by.id('buildingLawInterestID')).typeText('3.25')
    await element(by.id('checkedGrannyApartmentID')).tap()
    await element(by.id('grannyFlatIncomeID')).typeText('225000')
    await element(by.id('grannyFlatCommentID')).typeText(
      'Einnahme bis ende 2023'
    )
    await element(by.id('purposeButtonID')).tap()

    //income
    await expect(element(by.id('income'))).toBeVisible()
    await element(by.id('salaryID')).typeText('95000')
    await element(by.id('alimonyID')).typeText('14400')
    await element(by.id('pensionID')).typeText('0')
    await element(by.id('ReturnOnAssetsID')).typeText('0')
    await element(by.id('OtherIncomeID')).typeText('250000')
    await element(by.id('thirdPartyPropertiesID')).typeText('0')
    await element(by.id('LeasingAndConsumerCreditID')).typeText('7920')
    await element(by.id('incomeButtonID')).tap()
    //collaterals
    await expect(element(by.id('funds'))).toBeVisible()
    await element(by.id('bankDepositsID')).typeText('320000')
    await element(by.id('secondPillarID')).typeText('8800')
    await element(by.id('thirdPillarID')).typeText('0')
    await element(by.id('depositValuesID')).typeText('0')
    await element(by.id('donationID')).typeText('0')
    await element(by.id('saleProceedsID')).typeText('0')
    await element(by.id('ownWorkID')).typeText('0')
    await element(by.id('othersID')).typeText('20000')
    await element(by.id('loanWithSubordinationID')).typeText('22660')
    await element(by.id('fundsButtonID')).tap()
    //collaterals
    await expect(element(by.text('Zusatzdeckung'))).toBeVisible()
    await element(by.id('secondPillarIDcol')).typeText('8800')
    await element(by.id('thirdPillarIDcol')).typeText('25480')
    await element(by.id('freeLifeInsuranceID')).typeText('500000')
    await element(by.id('tiedLifeInsuranceID')).typeText('0')
    await element(by.id('fundLifeInsuranceID')).typeText('0')
    await element(by.id('tiedFundLifeInsuranceID')).typeText('0')
    await element(by.id('freeDeathBenefitPolicyID')).typeText('0')
    await element(by.id('collateralsButtonID')).tap()

    //summary
    await expect(element(by.id('summary'))).toBeVisible()
    await expect(element(by.id('amortisationID'))).toExist()
    await expect(element(by.id('portabilityID'))).toExist()
    await expect(element(by.id('enfeoffID'))).toExist()

    await element(by.id('summaryButtonID')).tap()
    //finish
    await expect(element(by.id('finish'))).toBeVisible()
  })
})
