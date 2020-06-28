import {FETCH_DAILY_STOCK_TIME_SERIES,FETCH_DAILY_STOCK_TIME_SERIES_FAILED,SET_STOCK_TICKER, CHANGE_PREFERENCE} from '../actions/action-types'

const initialState = {
    dailyStocks: {},
    ticker: '',
    isTickerValid: false,
    openTimeSeries: {},
    highTimeSeries: {},
    lowTimeSeries: {},
    closeTimeSeries: {},

}

export default (state = initialState, action) => {
    switch(action.type) {
        case FETCH_DAILY_STOCK_TIME_SERIES:
            return {
                ...state,
                dailyStocks: action.payload,
                openTimeSeries: transformOpenTimeSeries(action.payload['Time Series (Daily)']),
                highTimeSeries: transformHighTimeSeries(action.payload['Time Series (Daily)']),
                lowTimeSeries:  transformLowTimeSeries(action.payload['Time Series (Daily)']),
                closeTimeSeries: transformCloseTimeSeries(action.payload['Time Series (Daily)']),
                isTickerValid: true,
            }
        case FETCH_DAILY_STOCK_TIME_SERIES_FAILED:
                return {
                    ...state,
                    dailyStocks: {},
                    openTimeSeries: {},
                    highTimeSeries: {},
                    lowTimeSeries: {},
                    closeTimeSeries: {},
                    isTickerValid: false
                }
        case SET_STOCK_TICKER:
                return {
                    ...state,
                    dailyStocks: {},
                    openTimeSeries: {},
                    highTimeSeries: {},
                    lowTimeSeries: {},
                    closeTimeSeries: {},
                    isTickerValid: false,
                    ticker: action.payload,
                }
        default:
        return state;
    }
}

function transformOpenTimeSeries(timeSeries) {
    let data = {}, stock;
    for (var each in timeSeries) {
        stock = timeSeries[each];
        // data[each] = {[each]: stock["1. open"]};
        data[each] = stock["1. open"];
    }
    return data;
}


function transformHighTimeSeries(timeSeries) {
    let data = {}, stock;
    for (var each in timeSeries) {
        stock = timeSeries[each];
        // data[each] = {[each]: stock["2. high"]};
        data[each] = stock["2. high"];
    }
    return data;
}

function transformLowTimeSeries(timeSeries) {
    let data = {}, stock;
    for (var each in timeSeries) {
        stock = timeSeries[each];
        // data[each] = {[each]: stock["3. low"]};
        data[each] = stock["3. low"];
    }
    return data;
}

function transformCloseTimeSeries(timeSeries) {
    let data = {}, stock;
    for (var each in timeSeries) {
        stock = timeSeries[each];
        // data[each] = {[each]: stock["4. close"]};
        data[each] = stock["4. close"];
    }
    return data;
}