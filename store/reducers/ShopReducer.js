import { ADD_TO_CART, REMOVE_FROM_CART } from '../actions/ShopActions';

const initialState = {
    selectedItems: { items: [], restaurantName: '' },
};

const shopReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TO_CART: {
            const newState = { ...state };
            if (action.payload.checkValue) {
                newState.selectedItems = {
                    items: [...newState.selectedItems.items, action.payload],
                    restaurant: action.payload.restaurantName,
                };
            } else {
                newState.selectedItems = {
                    items: [
                        ...newState.selectedItems.items.filter(
                            (item) => item.title !== action.payload.title
                        ),
                    ],
                    restaurantName: action.payload.restaurantName,
                };
            }
            return newState;
        }
        case REMOVE_FROM_CART: {
            const productsFiltered = state.selectedItems.items.filter(
                (prod) => prod.id !== action.payload
            );
            return {
                selectedItems: {
                    items: productsFiltered,
                    restaurantName: '',
                },
            };
        }
        default:
            return state;
    }
};

export default shopReducer;
