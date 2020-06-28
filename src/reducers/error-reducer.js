import {SET_ERROR_OCURRED,RESET_ERROR_OCURRED, FETCH_DAILY_STOCK_TIME_SERIES_FAILED,LOGIN_FAIL} from '../actions/action-types'

const initialState = {
    errorMessage: '',
    errorOccurred: false
}

export default (state = initialState, action) => {
    switch(action.type) {
        case SET_ERROR_OCURRED:
            return {
                ...state,
                errorOccurred: true,
                errorMessage: action.payload
            }
        case RESET_ERROR_OCURRED:
                return {
                    ...state,
                errorOccurred: false
                }
        case FETCH_DAILY_STOCK_TIME_SERIES_FAILED:
                    return {
                        ...state,
                        errorOccurred: true,
                        errorMessage: action.payload
                    }
        case LOGIN_FAIL:
                return {
                        ...state,
                        errorOccurred: true,
                        errorMessage: 'Login Failed. Please try again'
                        }
        default:
        return state;
    }
} 