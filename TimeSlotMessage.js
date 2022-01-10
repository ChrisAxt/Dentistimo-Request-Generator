const today = new Date('10/01/2022');
const limit = new Date('10/01/2023');

/**
 * Generates unique messages for the timeSlot generator
 * @param requestNumber 
 * @returns an array of messages
 */
function generateMessage(requestNumber) {
    var messages = [];
    for(var i = 0; i < requestNumber; i++){
        var randomNumber = randomIntFromInterval(1, 4);
        messages[i] = clinicSelector(randomNumber)
    }
    if(messages.length < 1){
        console.log('No messages creates')
    }
    return messages;
}

/**
 * Selects a message to send based on a randomly generated number
 * @param value 
 * @returns a message
 */
function clinicSelector(value) {
    var date = randomDate(today, limit);
    var weekday = new Array("sunday", "monday", "tuesday", "wednesday",
            "thursday", "friday", "saturday");
      while(weekday[date.getDay()] == "saturday" || weekday[date.getDay()] == "sunday"){
        date = randomDate(today, limit)
      }

    switch (JSON.stringify(value)) {
        case '1':
            message = {
                date: date,
                clinic: {
                    id: 1,
                    name: "Your Dentist",
                    owner: "Dan Tist",
                    dentists: 3,
                    address: "Spannmålsgatan 20",
                    city: "Gothenburg",
                    coordinate: {
                        longitude: 11.969388,
                        latitude: 57.707619
                    },
                    openinghours: {
                        monday: "9:00-17:00",
                        tuesday: "8:00-17:00",
                        wednesday: "7:00-16:00",
                        thursday: "9:00-17:00",
                        friday: "9:00-15:00"
                    }
                }
            }
            return message;
        case '2':
            message = {
                date: date,
                clinic: {
                    id: 2,
                    name: "Tooth Fairy Dentist",
                    owner: "Tooth Fairy",
                    dentists: 1,
                    address: "Slottskogen",
                    city: "Gothenburg",
                    coordinate: {
                        longitude: 11.942625,
                        latitude: 57.685255
                    },
                    openinghours: {
                        monday: "7:00-19:00",
                        tuesday: "7:00-19:00",
                        wednesday: "7:00-19:00",
                        thursday: "7:00-19:00",
                        friday: "7:00-19:00"
                    }
                }
            }
            return message;
        case '3':
            message = {
                date: date,
                clinic: {
                    id: 3,
                    name: "The Crown",
                    owner: "Carmen Corona",
                    dentists: 2,
                    address: "Lindholmsallén 19",
                    city: "Gothenburg",
                    coordinate: {
                        longitude: 11.940386,
                        latitude: 57.709872
                    },
                    openinghours: {
                        monday: "6:00-15:00",
                        tuesday: "8:00-17:00",
                        wednesday: "7:00-12:00",
                        thursday: "7:00-17:00",
                        friday: "8:00-16:00"
                    }
                }
            }
            return message;
        case '4':
            message = {
                date: date,
                clinic: {
                    id: 4,
                    name: "Lisebergs Dentists",
                    owner: "Glen Hysén",
                    dentists: 3,
                    address: "Liseberg",
                    city: "Gothenburg",
                    coordinate: {
                        longitude: 11.991153,
                        latitude: 57.694723
                    },
                    openinghours: {
                        monday: "10:00-18:00",
                        tuesday: "10:00-18:00",
                        wednesday: "10:00-18:00",
                        thursday: "10:00-18:00",
                        friday: "10:00-18:00"
                    }
                }
            }
            return message;
        default:
    }
}

/**
 * Generates a random number between the specified interval
 * @param min 
 * @param max 
 * @returns a number
 */
function randomIntFromInterval(min, max) { // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min)
  }
  
/**
 * Generates a random date between two specific dates
 * @param start 
 * @param end 
 * @returns a date 
 */
  function randomDate(start, end) {
    return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
  }
  
  module.exports.generateMessage = generateMessage;