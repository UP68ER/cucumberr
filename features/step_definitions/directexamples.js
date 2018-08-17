
const { Given, When, Then } = require('cucumber');
const { client } = require('nightwatch-cucumber');
var DirectAccSelectors = require('C:/Users/UP68ER/Projects/testy/pages/Direct/DirectAccSelectors.js') 
var DirectStep2Selectors = require ('C:/Users/UP68ER/Projects/testy/pages/Direct/DirectStep2Selectors.js')

Given('Załóż konto direct', function() {
      
  });
When('Otwórz strone', function () {
    
            return client.url('https://stpl01571.pl.ing-ad:8443/18075')
            .maximizeWindow()
            
  });
When('Wpisz Imię {string} i Nazwisko {string}', function (Name, LastName) {
    
            return client
            .SetValue(DirectAccSelectors.FirstName, Name, 'Name field is visible and name is set')
            .SetValue(DirectAccSelectors.LastName, LastName, 'Surname field is visible and surname is set')
            
  });
  

When('Wpisz Pesel {string} i Numer Telefonu {string}', function (Pesel, PhoneNumber) {
            
            return client.SetValue(DirectAccSelectors.Pesel, Pesel)
            .SetValue(DirectAccSelectors.Phone, PhoneNumber)
            
         });
When('Wpisz E-mail {string} i go Potwierdź {string}', function (Mail, Mail2) {
    
            return client.SetValue(DirectAccSelectors.Mail1, Mail, 'Set email in email input')
            .SetValue(DirectAccSelectors.Mail2, Mail2, 'Confirm email in email input')
            
  });

Then('Będziesz mógł przejsc do kolejnego kroku', function () {
    
            return client.Click(DirectAccSelectors.Submit, 'Click on submit button')
    
  });

When('Wpisz Numer {string} i daty z dowodu osobistego',function(IdNumber){

            return client.SetValue(DirectStep2Selectors.IdNumber,IdNumber,'Set ID Number')
            .Click(DirectStep2Selectors.Day, 'Select ID release day')    
            .Click(DirectStep2Selectors.Month, 'Select ID release month')
            .Click(DirectStep2Selectors.Year, 'Select ID release year')
            .Click(DirectStep2Selectors.eDay,'Select ID day of validity')
            .Click(DirectStep2Selectors.eMonth,'Select ID month of validity')
            .Click(DirectStep2Selectors.eYear, 'Select ID year of validity')

});

When('Wpisz Miejsce urodzenia {string} i nazwisko panienskie matki {string}',function(BirthTown, MaidenName){

            return client.SetValue(DirectStep2Selectors.BirthTown, BirthTown, 'Type in BirthTown')
            .SetValue(DirectStep2Selectors.MaidenName, MaidenName, 'Type in your mother"s Maiden Name')


});

When('Wpisz Ulice {string}, numer domu {string}, numer mieszkania {string}, kod pocztowy {string} i miasto {string}',
function(Street, HouseNumber, FlatNumber, PostCode, Town){

            return client.SetValue(DirectStep2Selectors.Street, Street, 'Type in street')
            .SetValue(DirectStep2Selectors.HouseNumber, HouseNumber, 'Type in house number')
            .SetValue(DirectStep2Selectors.FlatNumber, FlatNumber, 'Type in flat number')
            .SetValue(DirectStep2Selectors.PostCode, PostCode, 'Type in postcode')
            .SetValue(DirectStep2Selectors.Town, Town, 'Type in Town')

});

Then('Zaznacz Dodatkowe informacje i przejdz dalej',function(){

            return client.Click(DirectStep2Selectors.VisaCard, 'Order Credit Card')
            .Click(DirectStep2Selectors.ResidencyNo1, 'Choose not having other residences than Poland')
            .Click(DirectStep2Selectors.ResidencyNo2, 'Choose not having american residency')
            .Click(DirectStep2Selectors.ChooseScholarship, 'Choose scholarship as your main income')
            .end();


});