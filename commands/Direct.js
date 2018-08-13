exports.command = function () {
    var selectors = require('../selectors/probkaselectors2.js');
    console.log('selector '+ selectors.FirstName)

        return this
            .waitForElementVisible('body', 1000, 'Page has been loaded (%s)')
            .SetValue(selectors.FirstName, 'Paweł')
            .SetValue(selectors.LastName, 'Małek')
            .SetValue(selectors.Pesel, '98052909439')
            .SetValue(selectors.Phone, '791164577')
            .SetValue(selectors.Mail1, 'pmalek74198@gmail.com')
            .SetValue(selectors.Mail2, 'pmalek74198@gmail.com')
            .Click(selectors.Submit)
    
}