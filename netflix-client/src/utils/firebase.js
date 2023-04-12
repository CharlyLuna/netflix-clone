
import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
  apiKey: 'AIzaSyCVcQuSEPH8-T0RrrYGp93xezG1N0XrRsE',
  authDomain: 'netflix-clone-86d8b.firebaseapp.com',
  projectId: 'netflix-clone-86d8b',
  storageBucket: 'netflix-clone-86d8b.appspot.com',
  messagingSenderId: '183780453487',
  appId: '1:183780453487:web:d61d64ec4e62493b11719a',
  measurementId: 'G-M377T9YT2T'
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
export const auth = getAuth(app)
