<p align="center">
  <img width="368" height="80" src="https://github.com/guilhermeomt/nlw-ecoleta/blob/master/uploads/Logo.png">
</p>
<p align="center"><strong>Ecoleta is an application that helps people share and find out recycling points!</strong></p>

This sample project was developed during <strong> Next Level Week #1 (Booster) </strong> organized by [Rocketseat](https://rocketseat.com.br/). It uses popular Javascript runtime/libs/frameworks (Node.js, React.js, React Native) and includes three minor projects in it:
- Server side (backend)
- Client side (frontend)
- Mobile

<img align="left" src="https://github.com/guilhermeomt/nlw-ecoleta/blob/master/uploads/demo.gif">
<p align="center">
  <img width="375" height="812"  src="https://github.com/guilhermeomt/nlw-ecoleta/blob/master/uploads/Home.png">
  <img width="375" height="812"  src="https://github.com/guilhermeomt/nlw-ecoleta/blob/master/uploads/Detalhes.png">
</p>

## Built With
                   
* [HTML](https://www.w3.org/html/)/[CSS](http://w3.org/Style/CSS/)
* [JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript)/[TypeScript](https://www.typescriptlang.org/)
* [Node.js](https://nodejs.org/en/)
* [React.js](https://en.reactjs.org/) 
* [Expo](https://expo.io/)
* [React Native](https://reactnative.dev/)
* [SQLite](https://www.sqlite.org/index.html)

## How to run

These instructions show how to get a copy of this entire project and run into your local machine.

### Prerequisites

In order to run this project in your development enviroment you need to install [Git](https://git-scm.com/) and [Node.js](https://nodejs.org/en/). Once you have installed those and want to run mobile app, you will have to install the Expo-CLI by running this command into your terminal:
```bash
# This will install the Expo-CLI globally
$ npm install -g expo-cli
```

### Setting Up

#### 1. Clone this repository
```bash
$ git clone https://github.com/guilhermeomt/nlw-ecoleta
```

#### 2. Open cloned directory
```
$ cd nlw-ecoleta/ 
```

#### 3. Follow instructions below for each application you desire to run
###### (Frontend and mobile depends backend to run propertly. Make sure you run the backend before frontend or mobile)

#### 3.1 Backend
Into your terminal, open backend directory with ``` cd server ``` then execute ``` npm install ``` to install dependencies packages. Finally run the app with ``` npm run server ``` command. This will make the application run into your localhost at port 3001 (http://localhost:3001).

#### 3.2 Frontend
 In a similar way that was done to backend,  change to ``` web ```  directory then ``` npm install ``` to install dependencies. Start the app by running ``` npm start ``` command. Frontend application will run into your localhost at port 3000 (http://localhost:3000) 
 
#### 3.3 Mobile
If you doesn\`t installed [Expo-CLI](#prerequisites) yet, do it. Open ``` mobile ``` folder and also install dependencies with ``` npm install ```. Run Expo with ``` npm start ```. This will open an Expo development tab into your browser that contains a QR Code. Download Expo app into your phone. Open it and scan the QR Code. If it doesn\`t load Ecoleta app, switch from "LAN" to "Tunnel" option in the Expo browser tab and try scanning again.

##### Important Note: Replace "BaseURL" property [mobile/src/services/api.ts](https://github.com/guilhermeomt/nlw-ecoleta/blob/master/mobile/src/services/api.ts) to your local machine IP address at 3001 port (backend) so your mobile connected in LAN can access the API. I used [Serveo](http://serveo.net/) and you should too in case you simply can\`t connect even with your mobile and backend in the same local network.
##### TL;DR
###### replace ~~baseURL: \'https://basium.serveo.net\',~~ to
```
baseURL: 'http://yourip:3001',
```
##### Do the same for both ocurrences in [server/src/controller/PointsController.ts](https://github.com/guilhermeomt/nlw-ecoleta/blob/master/server/src/controller/PointsController.ts)
###### replace ~~image_url: \`https://basium.serveo.net/uploads/${point.image}\`~~ to
```
image_url: `http://yourip:3001/uploads/${point.image}`
```
<hr></hr>

#### - Special thanks to Rocketseat for the free and awesome content over NLW.

