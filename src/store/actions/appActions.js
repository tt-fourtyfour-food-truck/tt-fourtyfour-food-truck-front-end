
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
        .post(``, newTruck)
        .then(res => {
            dispatch({ type: ADD_TRUCK, payload: newTruck });
        })
        .catch(err => {
            dispatch({  });
        });
}

export const deleteTruck = () => dispatch => {
    axiosWithAuth()
        .delete(``)
        .then(res => {
            dispatch({ type: DELETE_TRUCK });
        })
        .catch(err => {
            dispatch({  });
        })
}

export const updateTruck = (/* tuckToEdit */) => dispatch => {
    axiosWithAuth()
        .put(``, /* truckToEdit */)
        .then(res => {
            dispatch({ type: UPDATE_TRUCK });
        })
        .catch(err => {
            dispatch({  });
        })
}

export const createMenuItem = (/* newItem */) => dispatch => {
    axiosWithAuth()
        .post(``)
        .then(res => {
            dispatch({ type: CREATE_MENU_ITEM });
        })
        .catch(err => {
            dispatch({  });
        })
}

export const updateMenuItem = (/* updatedMenuItem */) => dispatch => {
    axiosWithAuth()
        .put(``, /* updatedMenuItem */)
        .then(res => {
            dispatch({ type: UPDATE_MENU_ITEM });
        })
        .catch(err => {
            dispatch({  });
        });

}