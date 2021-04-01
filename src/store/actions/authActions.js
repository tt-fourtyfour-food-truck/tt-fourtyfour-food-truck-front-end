import { axiosWithBaseURL } from "../../utils/axiosWithBaseURL";

export const DINER_SIGNED_UP = "DINER_SIGNED_UP";
export const OPERATOR_SIGNED_UP = "OPERATOR_SIGNED_UP";
export const DINER_LOGGED_IN = "DINER_LOGGED_IN";
export const OPERATOR_LOGGED_IN = "OPERATOR_LOGGED_IN";
export const LOGOUT = "LOGOUT";

export const dinerSignedUp = (newDiner) => dispatch => {
    console.log(newDiner)
    axiosWithBaseURL()
        .post(`/api/auth/register`, newDiner)
        .then(res => {
            console.log(res)
            dispatch({ type: DINER_SIGNED_UP, payload: newDiner });
        })
        .catch(err => {
            console.log(err, err.message, err.response)
            // dispatch({  });
        });
}

export const operatorSignedUp = (newOperator) => dispatch => {
    console.log(newOperator)
    axiosWithBaseURL()
        .post(`/api/auth/register`, newOperator)
        .then(res => {
            console.log(res)
            // dispatch({ type: DINER_SIGNED_UP });
        })
        .catch(err => {
            console.log(err)
            // dispatch({  });
        });
}

export const dinerLoggedIn = diner => dispatch => {
    axiosWithBaseURL()
        .post(`/api/auth/login`, diner)
        .then(res => {
            console.log(res);
            // dispatch({ type: DINER_LOGGED_IN });
        })
        .catch(err => {
            // dispatch({  });
            console.log(err);
        });
}

export const operatorLoggedIn = operator => dispatch => {
    axiosWithBaseURL()
        .post(`/api/auth/login`, operator)
        .then(res => {
            // dispatch({ type: OPERATOR_LOGGED_IN });
            console.log(res);
        })
        .catch(err => {
            // dispatch({  });
            console.log(err);
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