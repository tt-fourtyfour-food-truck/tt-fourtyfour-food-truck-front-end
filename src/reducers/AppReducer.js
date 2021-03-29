import { ADD_TRUCK, DELETE_TRUCK, UPDATE_TRUCK, CREATE_MENU_ITEM, UPDATE_MENU_ITEM, UPDATE_DINER_INFO, UPDATE_OPERATOR_INFO, ADD_TRUCK_TO_FAVORITES } from './../actions/appActions';

const initialState = {
    diner: {
        username: '',
        password: '',
        currentLocation: '',
        favoriteTrucks: [],
    },
    operator: {
        username: '',
        password: '',
        trucksOwned: [
            {
                truck: {
                    img: '',
                    cuisineType: '',
                    customerRatings: [],
                    customerRatingAvg: null, //integer equal to the mean of the values in customer ratings
                    menu: [], //menuItems will be held in here when created
                    menuItems: {
                        itemName: '',
                        itemDescription: '',
                        itemPhotos: [], //array of images or url's
                        itemPrice: null, //integer
                        customerRatings: [],
                        customerRatingAvg: null,
                    },
                    currentLocation: {
                        location: '', //physical address
                        departureTime: '', //time
                        departureDate: '' //date
                },
            },
        }
    ],
    },
};

export const AppReducer = (state = initialState, action) => {
    switch(action.type){
        case ADD_TRUCK:
            return state;

        case UPDATE_TRUCK:
            return state;

        case DELETE_TRUCK:
            return state;

        case CREATE_MENU_ITEM:
            return state;

        case UPDATE_MENU_ITEM:
            return state;

        case UPDATE_DINER_INFO:
            return state;

        case UPDATE_OPERATOR_INFO:
            return state;
        
        case ADD_TRUCK_TO_FAVORITES:
            return state;
       
        default:
            return state;
    }
};