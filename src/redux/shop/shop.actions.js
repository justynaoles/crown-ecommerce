import { ShopActionTypes } from './shop.types';
import { collectionData } from '../../firebase/firebase.utils';
import { firestore } from '../../firebase/firebase.utils';

export const fetchCollectionsStart = () => ({
    type: ShopActionTypes.FETCH_COLLECTIONS_START,
});

export const fetchCollectionsSucces = (collectionMap) => ({
    type: ShopActionTypes.FETCH_COLLECTIONS_SUCESS,
    payload: collectionMap

});

export const fetchCollectionFailure = (errorMsg) => ({
    type: ShopActionTypes.FETCH_COLLECTIONS_FAILURE,
    payload: errorMsg

});

export const fetchCollectionsAsync = () => {
    return dispatch => {
        const collectionRef = firestore.collection('collection');

        dispatch(fetchCollectionsStart());

        collectionRef.get().then((snapShot) => {
            const snapShotCollection = snapShot.docs;
            const collectionMap = collectionData(snapShotCollection);

            // updateCollection(collectionMap)

            dispatch(fetchCollectionsSucces(collectionMap));

        }).catch(error => {
            dispatch(fetchCollectionFailure(error));
        });
    }
};

