import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyA1_LuOKV1JCkS6-hJuuyvjm-o2YUZdc-g",
    authDomain: "mymoney-6a031.firebaseapp.com",
    projectId: "mymoney-6a031",
    storageBucket: "mymoney-6a031.appspot.com",
    messagingSenderId: "55863144127",
    appId: "1:55863144127:web:d911cbd7adbfc42980200a"
}

//init firebase
firebase.initializeApp(firebaseConfig)

// init service
const projectFirestore = firebase.firestore()
const projectAuth = firebase.auth()

//timestamp
const timestamp = firebase.firestore.Timestamp

export { projectFirestore, projectAuth, timestamp }