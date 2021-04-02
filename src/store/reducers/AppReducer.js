import { ADD_TRUCK, DELETE_TRUCK, UPDATE_TRUCK, CREATE_MENU_ITEM, UPDATE_MENU_ITEM, UPDATE_DINER_INFO, UPDATE_OPERATOR_INFO, ADD_TRUCK_TO_FAVORITES } from '../../store';

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
                    id: '',
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
            return {
                ...state,
                operator: {...state.operator, trucksOwned: [...state.trucksOwned, action.payload]}
            }

        case UPDATE_TRUCK:
            return {
                ...state,
                operator: {...state.operator, 
                    trucksOwned: state.trucksOwned.map((truck)=>{
                    if(truck.id === action.payload.id){
                        const updatedTruck = Object.assign(truck, action.payload)
                        return updatedTruck
                    }else
                    {
                        return truck
                    }
                })}
                
            }

        case DELETE_TRUCK:
            return {
                ...state,
                operator: {...state.operator, 
                    trucksOwned: state.trucksOwned.filter((truck => truck.id !== action.payload.id))}
                
            }

        case CREATE_MENU_ITEM:
            return{
                ...state,
                operator: {...state.operator.trucksOwned.truck.menu, menuItems: action.payload},
                operator: {...state.operator.trucksOwned.truck, menu: [...menu, action.payload]}
                
            }

        case UPDATE_MENU_ITEM:
            return {
                ...state,
                operator: {...state.operator.trucksOwned.truck, 
                    menu: state.menu.map((menuItem)=>{
                    if(menuItem.id === action.payload.id){
                        const updatedMenu = Object.assign(menuItem, action.payload)
                        return updatedMenu
                    }else
                    {
                        return menuItem
                    }
                })}
                
            }

        case UPDATE_DINER_INFO:
            return {
                ...state,
                diner: Object.assign(state.diner, action.payload)
            }

        case UPDATE_OPERATOR_INFO:
            return {
                ...state,
                operator: Object.assign(state.operator, action.payload)
            }
        
        case ADD_TRUCK_TO_FAVORITES:
            return {
                ...state,
                diner: {...state.diner, favoriteTrucks: [...state.diner.favoriteTrucks, action.payload]}
            }
       
        default:
            return state;
    }
};