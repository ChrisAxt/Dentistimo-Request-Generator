const inquirer = require('inquirer')

const requestGenerator = require('./Request_generator')

const menuNumber = 4;


module.exports.printMenu = function() {
    inquirer.prompt( [
        {
            type: 'Menu',
            message: 'Please select the number of the component you would like to test: \n1. Clinic handler \n2. Time slot generator \n3. Avaliability checker \n4. Booking handler \n',
            name: 'input',
            validate: isSelected
        }
    ])
        .then((answer) => {
            requestGenerator.generateMessage(answer)
            // console.log(answer)
        })
}


const isSelected = (value) => {

    if (value > 0 && value <= menuNumber){
        return true
    }
    return 'Wrong input. Please enter a number from 1-' + menuNumber +'!'
}
