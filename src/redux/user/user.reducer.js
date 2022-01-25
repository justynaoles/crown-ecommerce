import UserActionTypes from "./user.types";

const INITIAL_STATE = {
    currentUser: null,
    error: null
}

const userReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case UserActionTypes.GOOGLE_SIGN_IN_SUCCESS:
        case UserActionTypes.EMAIL_SIGN_IN_SUCCESS:
        case UserActionTypes.SIGN_UP_SUCCESS:
            return {
                ...state,
                error: null,
                currentUser: action.payload
            }

        case UserActionTypes.SIGN_OUT_SUCCESS:
            return {
                ...state,
                error: null,
                currentUser: null
            }

        case UserActionTypes.GOOGLE_SIGN_IN_FAILURE:
        case UserActionTypes.EMAIL_SIGN_IN_FAILURE:
        case UserActionTypes.SIGN_OUT_FAILURE:
        case UserActionTypes.SIGN_UP_FAILURE:
            return {
                ...state,
                currentUser: action.payload,
                error: action.payload
            }
        default:
            return state; 
    }
}

export default userReducer;