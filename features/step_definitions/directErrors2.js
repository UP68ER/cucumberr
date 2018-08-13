
const { Given, When, Then } = require('cucumber');
const { client } = require('nightwatch-cucumber');
var DirectStep2Selectors = require('C:/Users/UP68ER/Projects/testy/pages/Direct/DirectStep2Selectors.js')


When('Wpisze zły numer i daty z dowodu osobistego',function(){

    return client.SetValue(DirectStep2Selectors.IdNumber,'AZC54999','Set wrong ID Number')
    .Click(DirectStep2Selectors.Day, 'Select ID release day')    
    .Click(DirectStep2Selectors.Month, 'Select ID release month')
    .Click(DirectStep2Selectors.Year, 'Select ID release year')
    .Click(DirectStep2Selectors.eDay,'Select ID day of validity')
    .Click(DirectStep2Selectors.eMonth,'Select ID month of validity')
    .Click(DirectStep2Selectors.eYear, 'Select ID year of validity')

});

When('Wpisze złe miejsce urodzenia i nazwisko panienskie matki',function(){

    return client.SetValue(DirectStep2Selectors.BirthTown, 'asd1', 'Type in BirthTown')
    .SetValue(DirectStep2Selectors.MaidenName, 'asd1', 'Type in your mother"s Maiden Name')


});

When('Uzupełnie źle adres zamieszkania',function(){

    return client.SetValue(DirectStep2Selectors.Street, '.', 'Type in wrong street')
    .SetValue(DirectStep2Selectors.HouseNumber, '.', 'Type in wrong house number')
    .SetValue(DirectStep2Selectors.FlatNumber, '.', 'Type in flat number')
    .SetValue(DirectStep2Selectors.PostCode, ' 42230', 'Type in postcode')
    .SetValue(DirectStep2Selectors.Town, '.', 'Type in Town')

});

Then('Zaznacze dodatkowe informacje i sprawdze czy wyświetlają się błędy',function(){

    return client.Click(DirectStep2Selectors.VisaCard, 'Order Credit Card')
    .Click(DirectStep2Selectors.ResidencyNo1, 'Choose not having other residences than Poland')
    .Click(DirectStep2Selectors.ResidencyNo2, 'Choose not having american residency')
    .Click(DirectStep2Selectors.ChooseScholarship, 'Choose scholarship as your main income')
    .assert.visible(DirectStep2Selectors.ErrorId)
    .assert.visible(DirectStep2Selectors.ErrorBirthTown)
    .assert.visible(DirectStep2Selectors.ErrorMaidenName)
    .assert.visible(DirectStep2Selectors.ErrorStreet)
    .assert.visible(DirectStep2Selectors.ErrorHouseNumber)
    .assert.visible(DirectStep2Selectors.ErrorFlatNumber)
    .assert.visible(DirectStep2Selectors.ErrorTown)
    .assert.visible(DirectStep2Selectors.ErrorIdValidity)
    .end();


});
