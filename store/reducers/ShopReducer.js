import { ADD_TO_CART } from '../actions/ShopActions';

const initialState = {
    selectedItems: { items: [], restaurantName: '' },
};

const shopReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TO_CART: {
            const newState = { ...state };
            if (action.payload.checkValue) {
                console.log('add');
                newState.selectedItems = {
                    items: [...newState.selectedItems.items, action.payload],
                    restaurant: action.payload.restaurantName,
                };
            } else {
                console.log('remove');
                newState.selectedItems = {
                    items: [
                        ...newState.selectedItems.items.filter(
                            (item) => item.title !== action.payload.title
                        ),
                    ],
                    restaurantName: action.payload.restaurantName,
                };
            }
            console.log(newState);
            return newState;
        }
        default:
            return state;
    }
};

export default shopReducer;
