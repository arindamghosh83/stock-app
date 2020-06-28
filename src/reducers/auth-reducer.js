import {LOGIN_START, LOGIN_SUCCESS, LOGIN_FAIL} from '../actions/action-types'

const initialState = {
    loggedIn: false,
    username: ''
}

export default (state = initialState, action) => {
    switch(action.type) {
        case LOGIN_SUCCESS:
            return {
                ...state,
                loggedIn: true,
                username: action.payload
            }
            case LOGIN_FAIL:
                return {
                    ...state,
                    loggedIn: false,
                    username: ''
                }
        default:
        return state;
    }
} 