
const { Given, When, Then } = require('cucumber');
const { client } = require('nightwatch-cucumber');
var DirectAccSelectors = require('./selectors/DirectAccSelectors.js') 


Given('Błędy przy zakładaniu konta Direct', function() {
      
  });

When('Wpisz złe imie {string} i nazwisko {string}', function (Name, LastName) {
    
            return client
            .SetValue(DirectAccSelectors.FirstName, Name, 'Name field is visible and name is wrong')
            .SetValue(DirectAccSelectors.LastName, LastName, 'Surname field is visible and surname is wrong')
            
  });
  

When('Wpisz zły PESEL {string} i zły numer telefonu {string}', function (Pesel, PhoneNumber) {
            
            return client.SetValue(DirectAccSelectors.Pesel, Pesel, 'Pesel is wrong')
            .SetValue(DirectAccSelectors.Phone, PhoneNumber,'Phone number is wrong')
            
         });
When('Wpisz zły E-mail {string} i źle go potwierdź {string}', function (Mail1, Mail2) {
    
             return client.SetValue(DirectAccSelectors.Mail1, Mail1, 'Set wrong in email input')
            .SetValue(DirectAccSelectors.Mail2, Mail2, 'Set different email in email input')
            
  });

Then('Oczekuj na błędy', function () {
    
            return client
            .Click(DirectAccSelectors.FirstName)
            .assert.visible(DirectAccSelectors.ErrorMail)
            .assert.visible(DirectAccSelectors.ErrorName)
            .assert.visible(DirectAccSelectors.ErrorPesel)
            .assert.visible(DirectAccSelectors.ErrorPhone)
            .assert.visible(DirectAccSelectors.ErrorSurname)
            .assert.visible(DirectAccSelectors.ErrorDifferentMail)
  });
