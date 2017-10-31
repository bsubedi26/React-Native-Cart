import feathers from 'feathers/client'
import fHooks from 'feathers-hooks'
import fAuthentication from 'feathers-authentication-client'
import io from 'socket.io-client'
import fSocketio from 'feathers-socketio/client'
// import * as rest from 'feathers-rest/client'

const HOST = 'http://192.168.1.4:3030'
const app = feathers()
const socket = io(HOST, { transports: ['websocket'] })
// const restClient = rest(HOST)

app
  .configure(fHooks())
  // .configure(restClient.axios(axios))
  .configure(fSocketio(socket))
  .configure(fAuthentication({
    // storage: window.localStorage
  }))

export default app