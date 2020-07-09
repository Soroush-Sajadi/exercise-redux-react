import {
    FETCH_USER_FAILUER,
    FETCH_USER_REQUEST,
    FETCH_USER_SUCCESS
} from './type'
import axios from 'axios';

export const fetchUserRequest = () => {
    return {
        type: FETCH_USER_REQUEST,
    }
}

const fetchUserSuccess = user => {
    return {
        type: FETCH_USER_SUCCESS,
        payload: user

    }
}

const fetchUserFailure = error => {
    return {
        type: FETCH_USER_FAILUER,
        payload: error
    }
}

export const fetchData = (url) => {
    return (dispatch) => {
        dispatch(fetchUserRequest)
        axios.get(url)
            .then(res => {
                const data = res.data
                dispatch(fetchUserSuccess(data))
            })
            .catch(error => {
                const errMsg = error.message
                dispatch(fetchUserFailure(errMsg))
            })
    }
}