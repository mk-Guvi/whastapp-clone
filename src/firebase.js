import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyD0qKu-dsMzvbcJDj7e7moiZ9lCcoLT00Y",
  authDomain: "whatsapp-clone-16aff.firebaseapp.com",
  projectId: "whatsapp-clone-16aff",
  storageBucket: "whatsapp-clone-16aff.appspot.com",
  messagingSenderId: "515941803667",
  appId: "1:515941803667:web:a9afa0202c3f7e98624f66",
  measurementId: "G-59Q7LQ9X53"
};
const firbaseApp=firebase.initializeApp(firebaseConfig)

const db=firbaseApp.firestore()//it will access the firebase instances/files
const auth=firebase.auth()//used for authentication part
const provider=new firebase.auth.GoogleAuthProvider()//used for google authenticaion part


export {auth,provider};
export default db
