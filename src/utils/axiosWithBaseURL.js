import axios from "axios";

export const axiosWithBaseURL = () => {
    return axios.create({
        baseURL: `` // add base url
    })
}