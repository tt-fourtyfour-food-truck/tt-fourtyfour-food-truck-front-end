
//axiosWithAuth
import { axiosWithAuth } from "../../utils/axiosWithAuth";

export const ADD_TRUCK = "ADD_TRUCK";
export const DELETE_TRUCK = "DELETE_TRUCK";
export const UPDATE_TRUCK = "UPDATE_TRUCK";
export const CREATE_MENU_ITEM = "CREATE_MENU_ITEM";
export const UPDATE_MENU_ITEM = "UPDATE_MENU_ITEM";
export const UPDATE_DINER_INFO = "UPDATE_DINER_INFO";
export const UPDATE_OPERATOR_INFO = "UPDATE_OPERATOR_INFO";
export const ADD_TRUCK_TO_FAVORITES = "ADD_TRUCK_TO_FAVORITES";

export const addTruck = newTruck => dispatch => {
    axiosWithAuth()
        .post(`/api/trucks`, newTruck)
        .then(res => {
            dispatch({ type: ADD_TRUCK, payload: newTruck });
        })
        .catch(err => {
            dispatch({  });
        });
}

export const deleteTruck = () => dispatch => {
    axiosWithAuth()
        .delete(`/api/trucks/:truck_id`)
        .then(res => {
            dispatch({ type: DELETE_TRUCK });
        })
        .catch(err => {
            dispatch({  });
        })
}

export const updateTruck = (/* tuckToEdit */) => dispatch => {
    axiosWithAuth()
        .put(`/api/trucks/:truck_id`, /* truckToEdit */)
        .then(res => {
            dispatch({ type: UPDATE_TRUCK });
        })
        .catch(err => {
            dispatch({  });
        })
}

export const createMenuItem = (/* newItem */) => dispatch => {
    axiosWithAuth()
        .post(`/api/items`)
        .then(res => {
            dispatch({ type: CREATE_MENU_ITEM });
        })
        .catch(err => {
            dispatch({  });
        })
}

export const updateMenuItem = (/* updatedMenuItem */) => dispatch => {
    axiosWithAuth()
        .put(`/api/items/:item_id`, /* updatedMenuItem */)
        .then(res => {
            dispatch({ type: UPDATE_MENU_ITEM });
        })
        .catch(err => {
            dispatch({  });
        });

}

export const updateDinerInfo = (/* id ? */) => dispatch => {
    axiosWithAuth()
        .put(`/api/user/:user_id`, /* id */)
        .then(res => {
            dispatch({ type: UPDATE_DINER_INFO })
        })
        .catch(err => {
            dispatch({  });
        });
}

export const updateOperatorInfo = (/* id ? */) => dispatch => {
    axiosWithAuth()
        .put(`/api/user/:user_id`, /* id */)
        .then(res => {
            dispatch({ type: UPDATE_OPERATOR_INFO })
        })
        .catch(err => {
            dispatch({  });
        });
}

export const addTruckToFavorites = (/* id ? */) => dispatch => {
    axiosWithAuth()
        .post(`/api/trucks/:truck_id/favorites`, /* id */)
        .then(res => {
            dispatch({ type: ADD_TRUCK_TO_FAVORITES })
        })
        .catch(err => {
            dispatch({  });
        });
}

