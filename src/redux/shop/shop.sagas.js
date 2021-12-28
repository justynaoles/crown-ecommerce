import {takeEvery} from 'redux-saga/effects';
import { ShopActionTypes } from './shop.types';

export function* fetchCollectionAsync(){

    yield console.log('async action here')
}

export function* fetchCollectionStart(){
    yield takeEvery(
        ShopActionTypes.FETCH_COLLECTIONS_START,
        fetchCollectionAsync
    );
}