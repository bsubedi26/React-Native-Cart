import { Contacts, Permissions } from 'expo'

async function showFirstContactAsync() {
  // Ask for permission to query contacts.
  const permission = await Permissions.askAsync(Permissions.CONTACTS);
  if (permission.status !== 'granted') {
    // Permission was denied...
    return;
  }
  const contacts = await Contacts.getContactsAsync({
    fields: [
      Expo.Contacts.PHONE_NUMBERS,
      Expo.Contacts.EMAILS,
    ],
    pageSize: 10,
    pageOffset: 0,
  });
  if (contacts.total > 0) {
    Alert.alert(
      'First contact is...',
      `Name: ${contacts.data[0].name}\n` +
      `Phone: ${JSON.stringify(contacts.data[0].phoneNumbers)}\n` +
      `Email: ${JSON.stringify(contacts.data[0].emails)}`
    );
  }
}

const initState = {

}

export default function reducer(state = initState, action) {
  const { type, payload } = action
    switch(type) {

      default: return state
    }
}