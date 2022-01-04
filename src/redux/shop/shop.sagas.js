import {takeLatest, call, put} from 'redux-saga/effects';
import { ShopActionTypes } from './shop.types';
import { collectionData, firestore } from '../../firebase/firebase.utils';
import {fetchCollectionsSucces,  fetchCollectionFailure } from './shop.actions';

export function* fetchCollectionAsync(){

    try {

        const collectionRef = firestore.collection('collection');
        const snapshot = yield collectionRef.get();
        const snapshotCollections = snapshot.docs
        const collectionsMap = yield call(
            collectionData,
            snapshotCollections
        );

        yield put(fetchCollectionsSucces(collectionsMap));

    } catch(error) {
        yield put(fetchCollectionFailure(error))
    }

    // collectionRef.get().then((snapShot) => {
    //     const snapShotCollection = snapShot.docs;
    //     const collectionMap = collectionData(snapShotCollection);

    //     console.log(collectionMap, 'collection');

    //     dispatch(fetchCollectionsSucces(collectionMap));

    // }).catch(error => {
    //     dispatch(fetchCollectionFailure(error));
    // });
}


export function* fetchCollectionStart(){
    yield takeLatest(
        ShopActionTypes.FETCH_COLLECTIONS_START,
        fetchCollectionAsync
    );
}