const mqtt = require("./Mqtt");
const menu = require('./menu');
module.exports.mqtt = mqtt;
const TimeSlotMessage = require('./TimeSlotMessage')
const requestNumber = 20;

/**
 * 
 * @param {*} value 
 */
var generateMessage = function(value) {
    var request = {
        messages: [],
        topic: ''
    };
     switch (value.input) {
        case '1':
            request.messages = [];
            request.topic = 'get_all_clinics';
            generateRequests(request)
            break;
        case '2':
            request.messages = TimeSlotMessage.generateMessage(requestNumber);
            request.topic = '/Team5/Dentistimo/GenerateTimeSlots'
            generateRequests(request)
            break;
        case '3':
            console.log('This component\'s test has not been setup!')
            break;
        case '4':
            console.log('This component\'s test has not been setup!')
            break;
    
        default:
    }
    menu.printMenu();
}
/**
 * 
 * @param {*} request 
 */
function generateRequests(request){
    
    for(var i = 0; i < requestNumber; i++){
        mqtt.client.publish(request.topic, JSON.stringify(request.messages[i]));
        console.log('No: '+ i +' message sent, Message: ' + JSON.stringify(request.messages[i]))
    }
} 

module.exports.generateMessage = generateMessage;