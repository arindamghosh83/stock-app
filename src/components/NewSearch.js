import React, { Component, useEffect } from 'react';
import {Route} from 'react-router-dom';
import {connect} from 'react-redux';
import Highcharts from 'highcharts/highstock';
import HighchartsReact from 'highcharts-react-official';
import getSeriesData, {generateTimeSeries} from '../utils/util';

import {getDailyStockTimeSeries, setStockTicker} from '../actions/action'
import {ErrorToast} from './presentation/ErrorToast'

const NewSearch = props => {
    const {isTickerValid} = props;
    console.log('Params', props.match.params.ticker);
    let stockData = [];
    let options;
    const ticker = props.match.params.ticker;
    useEffect(() => {
        if(ticker !== ''){
            props.setStockTicker(props.match.params.ticker);
            props.getDailyStockTimeSeries(props.match.params.ticker);
        }

    }, [ticker]);
    useEffect(() => {
        props.setStockTicker(props.match.params.ticker);
        //props.getDailyStockTimeSeries(props.match.params.ticker);
    }, [])
        if(Object.keys(props.openTimeSeries).length > 0) {
        stockData = generateTimeSeries(props.openTimeSeries);
        options = {
            title: {
                text: `Daily Stocks of ${ticker}`
            },
            rangeSelector: {
                selected: 6
            },
            series: [
                {
                    name: ticker,
                    data: stockData
                }
            ]
        }

    } 
    return stockData.length > 0 ? (
        <div>
        <HighchartsReact highcharts={Highcharts} constructorType ={'stockChart'} options={options}/>
        </div>): !isTickerValid && isTickerValid !== ''  ? <ErrorToast/> : null

  
}

const mapStatetoProps = state => ({
    dailyStocks: state.stocks.dailyStocks,
    ticker: state.stocks.ticker,
    isTickerValid: state.stocks.isTickerValid,
    preference: state.stocks.preference,
    openTimeSeries: state.stocks.openTimeSeries,
    highTimeSeries: state.stocks.highTimeSeries,
    lowTimeSeries: state.stocks.lowTimeSeries,
    closeTimeSeries: state.stocks.closeTimeSeries,
})
    


export default connect(mapStatetoProps, {getDailyStockTimeSeries, setStockTicker})(NewSearch);