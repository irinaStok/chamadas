
import {initializeApp} from 'firebase/app' 
import {getAuth} from 'firebase/auth' 
import {getFirestore} from 'firebase/firestore' 
import {getStorage} from 'firebase/storage' 

const firebaseConfig = {
    apiKey: "AIzaSyCGK-wx-jX4mcb7Sk1coMnEo2uzQNK7LUo",
    authDomain: "projeto-375e2.firebaseapp.com",
    projectId: "projeto-375e2",
    storageBucket: "projeto-375e2.appspot.com",
    messagingSenderId: "621582453553",
    appId: "1:621582453553:web:cc813522988094ee7bfe10",
    measurementId: "G-080W41GE25"
  };

  const firebaseApp = initializeApp(firebaseConfig)

  const auth = getAuth(firebaseApp);
  const db = getFirestore(firebaseApp);
  const storage = getStorage(firebaseApp);

  export{ auth, db, storage} ;