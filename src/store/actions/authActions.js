import { axiosWithAuth } from "../../utils/axiosWithAuth";
import { axiosWithBaseURL } from "../../utils/axiosWithBaseURL";

export const DINER_SIGNED_UP = "DINER_SIGNED_UP";
export const OPERATOR_SIGNED_UP = "OPERATOR_SIGNED_UP";
export const DINER_LOGGED_IN = "DINER_LOGGED_IN";
export const OPERATOR_LOGGED_IN = "OPERATOR_LOGGED_IN";
export const UPDATE_DINER_INFO = "UPDATE_DINER_INFO";
export const FETCH_DINER_INFO = "FETCH_DINER_INFO";
export const LOGOUT = "LOGOUT";

export const dinerSignedUp = (newDiner) => dispatch => {
    axiosWithBaseURL()
        .post(`/api/auth/register`, newDiner)
        .then(res => {
            dispatch({ type: DINER_SIGNED_UP, payload: res.data.registered });
        })
        .catch(err => {
            console.log(err, err.message, err.response)
        });
}

export const operatorSignedUp = (newOperator) => dispatch => {
    axiosWithBaseURL()
        .post(`/api/auth/register`, newOperator)
        .then(res => {
            dispatch({ type: OPERATOR_SIGNED_UP, payload: res.data.registered })
        })
        .catch(err => {
            console.log(err);
        });
}

export const dinerLoggedIn = diner => dispatch => {
    axiosWithBaseURL()
        .post(`/api/auth/login`, diner)
        .then(res => {
            localStorage.setItem("token", res.data.token);
            dispatch({ type: DINER_LOGGED_IN, payload: res.data.loggedIn });
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
            console.log(res)
            localStorage.setItem("token", res.data.token);
            dispatch({ type: OPERATOR_LOGGED_IN, payload: res.data.loggedIn });
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

export const updateDinerInfo = (diner) => dispatch => {
    axiosWithAuth()
        .put(`/api/user/${diner.user_id}`, diner)
        .then(res => {
            console.log(res);
            dispatch({ type: UPDATE_DINER_INFO });
        })
        .catch(err => {
            console.log(err)
        })
}

export const fetchDinerInfo = () => dispatch => {
    // axiosWithAuth()
    //     .get(`/api/user/${user_id}`)
    //     .then(res => {
    //         console.log(res);
    //         dispatch({ type: FETCH_DINER_INFO })
    //     })
    //     .catch(err => {
    //         console.log(err);
    //     })
}