import {takeLatest, call, put, all} from 'redux-saga/effects';
import UserActionTypes from './user.types';
import { googleProvider, auth, createUserProfileDocument, getCurrentUser } from '../../firebase/firebase.utils';
import {
    googleSignInSuccess, 
    googleSignInFailure, 
    emailSignInSuccess, 
    emailSignInFailure,
    signOutSuccess,
    signOutFailure,
    signUpSuccess,
    signUpFailure} from './user.action';

export function* signOut(){
    try {

        yield auth.signOut();
        yield put(signOutSuccess());

    } catch(error) {
        yield put(signOutFailure(error));
    }
}

export function* signInWithGoogle() {
    try {

        const {user} = yield auth.signInWithPopup(googleProvider);
        const userRef = yield call(createUserProfileDocument, user);
        const userSnapshot = yield userRef.get();

        yield put(googleSignInSuccess({
            id: userSnapshot.id,
            ...userSnapshot.data()
        }));


    } catch(error) {
        yield put(googleSignInFailure(error))
    }
}

export function* signInWithEmail({payload: {email, password}}) {
    try {
        const {user} = yield auth.signInWithEmailAndPassword(email, password);
        const userRef = yield call(createUserProfileDocument, user);
        const userSnapshot = yield userRef.get();

        yield put(emailSignInSuccess({
            id: userSnapshot.id,
            ...userSnapshot.data()
        }));


    } catch(error) {
        yield put(emailSignInFailure(error))
    }
}

export function* isUserAuthenticated() {
    try {

        //check user session based on utils method
        const userAuth = yield getCurrentUser();

        //if session does not exist, stop it
        if(!userAuth) return;

        const userRef = yield call(createUserProfileDocument, userAuth);
        const userSnapshot = yield userRef.get();

        yield put(googleSignInSuccess({
            id: userSnapshot.id,
            ...userSnapshot.data()
        }));

    } catch {

    }
}


export function* onGoogleSignInStart() {
    yield takeLatest(UserActionTypes.GOOGLE_SIGN_IN_START, signInWithGoogle)
}

export function* onEmailSignInStart() {
    yield takeLatest(UserActionTypes.EMAIL_SIGN_IN_START, signInWithEmail)
}

export function* onCheckUserSession() {
    yield takeLatest(UserActionTypes.CHECK_USER_SESSION, isUserAuthenticated)
}

export function* onSignOut () {
    yield takeLatest(UserActionTypes.SIGN_OUT_START, signOut)
}

export function* signUp ({payload: {email, password, displayName}}) {

    try {
            const { user }  = yield auth.createUserWithEmailAndPassword(email, password);
            yield put(signUpSuccess({ user, additionalData: { displayName } }));

    } catch(error) {
        yield put(signUpFailure(error))
    }
}

export function* signUpSuccessAfter( { user, additionalData: { displayName }} ){

    try {
        console.log('user: ', user, 'display name: ',displayName )
    } catch {

    }
}

export function* onSignUp() {
    yield takeLatest(UserActionTypes.SIGN_UP_START, signUp)
}


export function* onSignUpSuccess() {
    yield takeLatest(UserActionTypes.SIGN_UP_SUCCESS, signUpSuccessAfter)
}

export function* userSagas() {
    yield all([
        call(onGoogleSignInStart), 
        call(onEmailSignInStart), 
        call(onCheckUserSession),
        call(onSignOut),
        call(onSignUp),
        call(onSignUpSuccess)
    ]);
}