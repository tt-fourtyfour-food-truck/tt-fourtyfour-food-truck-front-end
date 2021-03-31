import { axiosWithBaseURL } from "../../utils/axiosWithBaseURL";

export const DINER_SIGNED_UP = "DINER_SIGNED_UP";
export const OPERATOR_SIGNED_UP = "OPERATOR_SIGNED_UP";
export const DINER_LOGGED_IN = "DINER_LOGGED_IN";
export const OPERATOR_LOGGED_IN = "OPERATOR_LOGGED_IN";
export const LOGOUT = "LOGOUT";

export const dinerSignedUp = (/* newDiner */) => dispatch => {
    axiosWithBaseURL()
        .post(``, /* newDiner */)
        .then(res => {
            dispatch({ type: DINER_SIGNED_UP });
        })
        .catch(err => {
            dispatch({  });
        });
}

export const operatorSignedUp = (/* newOperator */) => dispatch => {
    axiosWithBaseURL()
        .post(``, /* newOperator */)
        .then(res => {
            dispatch({ type: DINER_SIGNED_UP });
        })
        .catch(err => {
            dispatch({  });
        });
}

export const dinerLoggedIn = diner => dispatch => {
    console.log(diner);
    // axiosWithBaseURL()
    //     .post(``, diner)
    //     .then(res => {
    //         dispatch({ type: DINER_LOGGED_IN });
    //     })
    //     .catch(err => {
    //         dispatch({  });
    //     });
}

export const operatorLoggedIn = (/* diner */) => dispatch => {
    axiosWithBaseURL()
        .post(``, /* diner */)
        .then(res => {
            dispatch({ type: OPERATOR_LOGGED_IN });
        })
        .catch(err => {
            dispatch({  });
        });
}
    
export const logout = (/* user */) => dispatch => {
    axiosWithBaseURL()
        .post(``, /* user */)
        .then(res => {
            dispatch({ type: LOGOUT });
        })
        .catch(err => {
            dispatch({  });
        });
}