

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

export const AuthReducers = (state = initialState, action) => {
    switch(action.type){
        case DINER_SIGNED_UP:
            return state;

        case OPERATOR_SIGNED_UP:
            return state;

        case DINER_LOGGED_IN:
            return state;

        case OPERATOR_LOGGED_IN:
            return state;

        default: 
            return state;
    }
};
