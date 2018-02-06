import { AsyncStorage } from 'react-native';
import feathers from '@feathersjs/client/dist/feathers.min';
import auth from '@feathersjs/client/dist/authentication.min';
import socketio from '@feathersjs/client/dist/socketio.min';
import io from 'socket.io-client';
// import fRest from '@feathersjs/rest-client';

const HOST = 'http://192.168.0.18:3030';
const socketOptions = { transports: ['websocket'] };
const socket = io(HOST, socketOptions);
// const restClient = fRest(HOST)

const app = feathers()
  .configure(socketio(socket))
  // .configure(restClient.fetch(fetch))
  .configure(auth({
      storage: AsyncStorage
    }));

export default app
