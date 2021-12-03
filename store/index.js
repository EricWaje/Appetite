import { createStore, combineReducers } from 'redux';

import shopReducer from './reducers/ShopReducer';

const RootReducers = combineReducers({
    shopReducer: shopReducer,
});

export default createStore(RootReducers);
