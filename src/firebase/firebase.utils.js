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

export const addCollectionAndDocuments = async (collectionKey, objectsToAdd) => {
  //create collection for example 'users', 'items'
  const collectionRef= firestore.collection(collectionKey);
  const batch = firestore.batch();

  objectsToAdd.forEach(object => {
    //build in method to generate unique id
    const newDocRef = collectionRef.doc();
  
    //set element in db via below method, arg: id and element
    batch.set(newDocRef, object);
  });

  return await batch.commit();
}

firebase.initializeApp(config);

export const auth = firebase.auth();

//firestore element
export const firestore = firebase.firestore();

export const googleProvider = new firebase.auth.GoogleAuthProvider();
googleProvider.setCustomParameters({
  prompt: 'select_account',
});
export const signInWithGoogle = () => auth.signInWithPopup(googleProvider);

//get data collection (shop)
export const collectionData = (collection) => {
  const data = collection.map(doc => {

    //.data() inbuilt method to get object form
    const {title, items} = doc.data();

    return {
      routeName: encodeURI(title.toLowerCase()),
      id: doc.id,
      items,
      title
    }
  });

  //turn data (array) into object, we need  objects wchich represents categories, so we use reduce method
  // instead of array [ {title: 'hats', items: []}, {title: 'jackets', items: []}] we have 1 object { hats: { items: []}, jackets: {items: []}} 
  const arrayToObj = data.reduce((acumulator, data) => {
    acumulator[data.title.toLowerCase()] = data;
    return acumulator;
  }, {});

  return arrayToObj;
}

export default firebase;