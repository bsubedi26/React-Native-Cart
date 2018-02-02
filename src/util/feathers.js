import feathers from '@feathersjs/client/dist/feathers.min';
import auth from '@feathersjs/client/dist/authentication.min';
import socketio from '@feathersjs/client/dist/socketio.min';

import io from 'socket.io-client'
// import feathers from '@feathersjs/client/index'
// import errors from '@feathersjs/errors'
// import socketio from '@feathersjs/socketio-client'
// import auth from '@feathersjs/authentication-client'
// import fRest from '@feathersjs/rest-client'
// import axios from 'axios'

const HOST = 'http://192.168.1.4:3030'
const socket = io(HOST)
// const restClient = fRest(HOST)

const app = feathers()
  .configure(socketio(socket))
  // .configure(restClient.axios(axios))
  .configure(auth());


// app
//   .configure(fHooks())
//   // .configure(restClient.axios(axios))
//   .configure(fSocketio(socket))
//   // .configure(fPrimus(primusSocket, { timeout: 2000 }))
//   .configure(fAuthentication({
//     // storage: window.localStorage
//   }))

export default app
