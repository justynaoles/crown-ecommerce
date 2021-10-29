import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const config = {
    apiKey: "AIzaSyAkR7w1fvf3JLXBsVY78bv4R2BgrfHZYCE",
    authDomain: "crown-db-1dda0.firebaseapp.com",
    projectId: "crown-db-1dda0",
    storageBucket: "crown-db-1dda0.appspot.com",
    messagingSenderId: "1004078081635",
    appId: "1:1004078081635:web:a6a3b7b62c8e9e9fa07a56"
}


//create object snapShot in firebase (firestore) - db; add user to db
export const createUserProfileDocument = async (userAuth, additionalData) => {
  //if no one is signed in
  if(!userAuth) return;

  //******if user signed in, follow below code:

  //user with provided id
  const userRef = firestore.doc(`users/${userAuth.uid}`);

  //get info about user with specific id
  const snapShot = await userRef.get();

  //if user does not exist in db
  if(!snapShot.exists) {
    //variables from userAut object
    const {displayName, email} = userAuth;

    const createdAt = new Date();

    //take user id and set new record in db with same values
    try {
      userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      })
    } catch (error) {
      console.log('error creating user', error.message);
    }

  }

  return userRef;
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({
  prompt: 'select_account',
});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;