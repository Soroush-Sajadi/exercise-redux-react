import { FETCH_USER_REQUEST, FETCH_USER_SUCCESS, FETCH_USER_FAILUER } from "./type"

const initialState = {
    loading: false,
    user: [],
    err: ''
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_USER_REQUEST :
        return {
            ...state,
            loading: true
        }
        case FETCH_USER_SUCCESS :
            return {
                loading: false,
                user: action.payload,
                err: ''
            }
        case FETCH_USER_FAILUER :
            return {
                loading: false,
                user: [],
                err: action.payload
            }
        default : return state
    }
}

export default reducer;