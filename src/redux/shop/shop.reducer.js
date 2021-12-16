import { ShopActionTypes } from './shop.types';

const INITIAL_STATE = {
    collections: null,
    isFetchingCollection: false,
    errorMsg: undefined
}

const shopReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {

        case ShopActionTypes.FETCH_COLLECTIONS_START:
            return {
                ...state,
                isFetchingCollection: true
            }

        case ShopActionTypes.FETCH_COLLECTIONS_SUCESS:
            return {
                ...state,
                collections: action.payload,
                isFetchingCollection: false
            }

        case ShopActionTypes.FETCH_COLLECTIONS_FAILURE:
            return {
                ...state,
                isFetchingCollection: true,
                errorMsg: action.payload
            }
            
        default:
            return state;
    }
}

export default shopReducer;