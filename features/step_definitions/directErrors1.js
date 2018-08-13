
const { Given, When, Then } = require('cucumber');
const { client } = require('nightwatch-cucumber');
var DirectAccSelectors = require('C:/Users/UP68ER/Projects/testy/pages/Direct/DirectAccSelectors.js') 


Given('Błędy przy zakładaniu konta Direct', function() {
      
  });

When('Wpisz złe imie i nazwisko', function () {
    
            return client
            .SetValue(DirectAccSelectors.FirstName, 'Paweł1', 'Name field is visible and name is wrong')
            .SetValue(DirectAccSelectors.LastName, 'Małek1', 'Surname field is visible and surname is wrong')
            
  });
  

When('Wpisz zły PESEL i zły numer telefonu', function () {
            
            return client.SetValue(DirectAccSelectors.Pesel, '9805290943', 'Pesel is wrong')
            .SetValue(DirectAccSelectors.Phone, '79116457','Phone number is wrong')
            
         });
When('Wpisz zły E-mail i źle go potwierdź', function () {
    
             return client.SetValue(DirectAccSelectors.Mail1, 'pmalek74198@gmail', 'Set wrong in email input')
            .SetValue(DirectAccSelectors.Mail2, 'pmalek74198@gmail.com', 'Set different email in email input')
            
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
