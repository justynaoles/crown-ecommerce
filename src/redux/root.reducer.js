import { combineReducers } from 'redux';
import userReducer from './user/user.reducer';
import cartReducer from './cart/cart.reducer';
import mobileMenuReducer from './mobile-menu/mobile-menu.reducer';

export default combineReducers({
    user: userReducer,
    hidden: cartReducer,
    mobileMenu: mobileMenuReducer
})