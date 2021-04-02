import { DINER_SIGNED_UP, OPERATOR_SIGNED_UP, DINER_LOGGED_IN, OPERATOR_LOGGED_IN, LOGOUT } from '../../store';

const initialState = {
    diner: {
        email: "",
        role: "",
        user_id: null,
        username: ""
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
            return {
                ...state,
                diner: action.payload
            }

        case OPERATOR_SIGNED_UP:
            return {
                ...state,
                operator: action.payload
            }

        case DINER_LOGGED_IN:

            return {
                ...state,
                diner: {
                    ...state.diner,
                    email: action.payload.email,
                    role: action.payload.role,
                    user_id: action.payload.user_id,
                    username: action.payload.username
                }
            };

        case OPERATOR_LOGGED_IN:
            return state;

        case LOGOUT: 
            return state;

        default: 
            return state;
    }
};
