import {takeLatest, call, put, all} from 'redux-saga/effects';
import UserActionTypes from './cart.types';
import { clearCart } from './cart.actions';

export function* clearCartItems() {
    yield put(clearCart());
}

export function* onSignOut() {
    yield takeLatest(UserActionTypes.SIGN_OUT_START, clearCartItems)
    
}

export function* cartSagas() {
    yield all([
        call(onSignOut), 
    ]);
}