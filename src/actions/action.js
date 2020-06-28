import axios from 'axios';
import {FETCH_DAILY_STOCK_TIME_SERIES, FETCH_DAILY_STOCK_TIME_SERIES_FAILED, SET_STOCK_TICKER, CHANGE_PREFERENCE, LOGIN_SUCCESS, LOGIN_FAIL,RESET_ERROR_OCURRED} from './action-types'
export const getDailyStockTimeSeries = symbol => dispatch => {
    axios.get('/query',{
            params:  {
            function: 'TIME_SERIES_DAILY',
            symbol: symbol,
            apikey: '6NQ84CAJ1T1RHQC4' //'6NQ84CAJ1T1RHQC4'
        }
    })
    .then(stockData => {
        if(stockData.data && stockData.data['Error Message']){
            console.log('Error');
            return dispatch({
                type: FETCH_DAILY_STOCK_TIME_SERIES_FAILED,
            })
        } else if(stockData.data && !stockData.data['Error Message']){

            return dispatch({
                type: FETCH_DAILY_STOCK_TIME_SERIES,
                payload: stockData.data
            });
        }
    })
    .catch(error => dispatch({
        type: FETCH_DAILY_STOCK_TIME_SERIES_FAILED,
        payload: 'Something went wrong while fetching the data'
    }))
}

export const setStockTicker = stockTicker => {
    return {
        type: SET_STOCK_TICKER,
        payload: stockTicker
}
}

export const changePreference = preference => {
    return {
        type: CHANGE_PREFERENCE,
        payload: preference
}
}

export const login = (username, password) => dispatch => {
    setTimeout(() => {
        if(username === password){
            return dispatch({type: LOGIN_SUCCESS, payload: username});
        } else {
            return dispatch({type: LOGIN_FAIL});
        }
    },2000)
}

export const resetError = () => ({
    type: RESET_ERROR_OCURRED
})

