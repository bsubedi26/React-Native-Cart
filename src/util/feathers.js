// feathers/client	=> @feathersjs
// feathers-client	=> @feathersjs/client
// feathers-rest/client =>	@feathersjs/rest-client
// feathers-socketio/client	=> @feathersjs/socketio-client
// feathers-primus/client	=> @feathersjs/primus-client
// feathers-authentication/client => @feathersjs/authentication-client

import io from 'socket.io-client'
import feathers from '@feathersjs/client/index'
// import feathers from '@feathersjs/feathers'
import errors from '@feathersjs/errors'
import socketio from '@feathersjs/socketio-client'
import auth from '@feathersjs/authentication-client'
import fRest from '@feathersjs/rest-client'
import axios from 'axios'

const HOST = 'http://192.168.1.4:3030'
// const socket = io(HOST)
const restClient = fRest(HOST)

const app = feathers()
  // .configure(socketio(socket))
  .configure(restClient.axios(axios))
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
