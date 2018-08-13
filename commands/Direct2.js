exports.command = function () {
    var selectors = require('../selectors/probkaselectors2.js');
    console.log('selector '+ selectors.FirstName)


    return this
    .SetValue(selectors.Idnumber,'AZC549997')
    .Click(selectors.Day)
    .Click(selectors.Month)
    .Click(selectors.Year)
    .Click(selectors.eDay)
    .Click(selectors.eMonth)
    .Click(selectors.eYear)
    .SetValue(selectors.BirthPlace, 'Włoszczowa')
    .SetValue(selectors.MaidenName, 'Orzeł')
    .SetValue(selectors.Street, 'Szkolna')
    .SetValue(selectors.Number, '24')
    .SetValue(selectors.PostCode, ' 42230')
    .SetValue(selectors.Town, 'Koniecpol')
    .Click(selectors.No1)
    .Click(selectors.No2)
    .waitForElementVisible('#error-message-input_28',1000)
    .pause(1000)





}