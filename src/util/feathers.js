import { AsyncStorage } from 'react-native';
import feathers from '@feathersjs/client/dist/feathers.min';
import auth from '@feathersjs/client/dist/authentication.min';
// import socketio from '@feathersjs/client/dist/socketio.min';
// import io from 'socket.io-client'

import fRest from '@feathersjs/rest-client'

// const socketOptions = { transports: ['websocket'], pingTimeout: 3000, pingInterval: 5000 }
const HOST = 'http://192.168.0.18:3030'
// const socket = io(HOST, socketOptions)
const restClient = fRest(HOST)

const app = feathers()
  // .configure(socketio(socket))
  .configure(restClient.fetch(fetch))
  .configure(auth({
      storage: AsyncStorage
    }));


// app
//   .configure(fHooks())
//   // .configure(restClient.axios(axios))
//   .configure(fSocketio(socket))
//   // .configure(fPrimus(primusSocket, { timeout: 2000 }))
//   .configure(fAuthentication({
//     // storage: window.localStorage
//   }))

// app.service('comments')
// .find()
//   .then(res => console.log(res))
//   .catch(res => console.log('.CATCH ERR ', res))
export default app
