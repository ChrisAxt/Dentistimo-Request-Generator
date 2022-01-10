const mqtt = require("./Mqtt");
const menu = require('./menu');
module.exports.mqtt = mqtt;
const TimeSlotMessage = require('./TimeSlotMessage')
const requestNumber = 200;

/**
 * Generates specific messages to be sent to the selected component 
 * @param value 
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
            sendRequests
        (request)
            break;
        case '2':
            request.messages = TimeSlotMessage.generateMessage(requestNumber);
            request.topic = '/Team5/Dentistimo/GenerateTimeSlots'
            sendRequests
        (request)
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
 * Sends the generated request to the specified component via MQTT
 * @param request 
 */
function sendRequests(request){
    
    for(var i = 0; i < requestNumber; i++){
        mqtt.client.publish(request.topic, JSON.stringify(request.messages[i]));
        console.log('No: '+ i +' message sent, Message: ' + JSON.stringify(request.messages[i]))
    }
} 

module.exports.generateMessage = generateMessage;