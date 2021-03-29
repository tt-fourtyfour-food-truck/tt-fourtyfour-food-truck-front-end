import { DINER_SIGNED_UP, OPERATOR_SIGNED_UP, DINER_LOGGED_IN, OPERATOR_LOGGED_IN, LOGOUT } from '../../store';

const initialState = {
    diner: {
        username: '',
        email: '',
        password: '',
        currentLocation: '',
    },
    operator: {
        username: '',
        email: '',
        password: '',
        trucksOwned: [] //ability to add multiple
    }
};

export const AuthReducer = (state = initialState, action) => {
    switch(action.type){
        case DINER_SIGNED_UP:
            return state;

        case OPERATOR_SIGNED_UP:
            return state;

        case DINER_LOGGED_IN:
            return state;

        case OPERATOR_LOGGED_IN:
            return state;

        case LOGOUT: 
            return state;

        default: 
            return state;
    }
};
