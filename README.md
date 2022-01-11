# Request Generator

## Description
The request generator is one of the components included in Dentistimos fault tolerance mechanism. The purpose of the Request generator is testing the system under stressful conditions, like for ex. sending a lot request at once to see how the system responds

## Components Responsibilities

Send request to selected component to test its stress tolerance

## Installing and running

### Prerequisits:
#### MQTT
You need to have a running version of <b>MQTT</b> on your machine. Please refer to this [link](https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=&ved=2ahUKEwjG3fWb6NH0AhXpQvEDHSGLC2MQFnoECAMQAQ&url=https%3A%2F%2Fmosquitto.org%2Fdownload%2F&usg=AOvVaw2rLN-Os_zfUrtqeV1Lrunf) to download the mosquitto broker if you do not have any. 
#### Node.js
To download the latest version of node.js, please follow this [link](https://nodejs.org/en/download/)

### Instructions

| Step | Command |
| ------ | ------ |
| Start your MQTT broker on port 1883| This differs based on which broker, as well as your settings. Make sure the broker listens to port 1883. (Default port with mosquitto) |
| Clone this project on your machine | `git clone < SSH address or HTTPS address >` |
| Go to the repo and add .env file | Please contact one of the developers of this project to recieve the contents of the file. It should be placed directly in the repo.
| Install necessary dependencies by running the following  | `npm install` |
| Start the system from the repo by running the following  | `npm start` |

In the window of your broker, you should see a message similar to this:

`1638885841: New client connected from 127.0.0.1:49531 as Dentistimo Team5 - Request Generator n°3c1ff99e (p2, c1, k60).`

The Request Generator is now ready to proceed your requests. 
