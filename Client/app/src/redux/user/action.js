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

const fetchUserFailure = err => {
    return {
        type: FETCH_USER_FAILUER,
        payload: err
    }
}

export const fetchData = () => {
    return (dispatch) => {
        dispatch(fetchUserRequest)
        axios.get('http://api.openweathermap.org/data/2.5/weather?q=London&units=metric&APPID=67fddc841569cd4432f8dcefdae751c3')
            .then(res => {
                const data = res.data
                dispatch(fetchUserSuccess(data))
            })
            .then(error => {
                const errMsg = error.message
                dispatch(fetchUserFailure(errMsg))
            })
    }
}