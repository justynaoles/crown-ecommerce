import { combineReducers } from 'redux';
import userReducer from './user/user.reducer';
import cartReducer from './cart/cart.reducer';
import directoryReducer from './directory/directory.reducers';
import mobileMenuReducer from './mobile-menu/mobile-menu.reducer';
import shopReducer from './shop/shop.reducer';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['cart']
  }

const rootReducers = combineReducers({
    user: userReducer,
    cart: cartReducer,
    mobileMenu: mobileMenuReducer,
    directory: directoryReducer,
    shop: shopReducer
})

export default persistReducer(persistConfig, rootReducers);