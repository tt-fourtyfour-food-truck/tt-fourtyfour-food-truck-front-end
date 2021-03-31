import axios from "axios";

export const axiosWithBaseURL = () => {
    return axios.create({
        baseURL: `https://tt44-food-truck-back-end.herokuapp.com`
    })
}