import React, { Component, useEffect } from 'react';
import {connect} from 'react-redux';
import Highcharts from 'highcharts/highstock';
import HighchartsReact from 'highcharts-react-official';
import getSeriesData, {generateTimeSeries} from '../../utils/util';

import {getDailyStockTimeSeries} from '../../actions/action'
import {ErrorToast} from '../presentation/ErrorToast'

const DailyStock = props => {
    const {ticker, isTickerValid} = props;
    let stockData;
    let options;
    console.log('Params', props.match.params.preference);
    useEffect(() => {
        if(ticker !== '')
        props.getDailyStockTimeSeries(ticker);
    }, [ticker]);
    if(ticker === '' && !isTickerValid)
    return null;
    if(props.match.params && props.match.params.preference){
        let preference = props.match.params.preference;
        switch(preference){
            case 'open':
                stockData = generateTimeSeries(props.openTimeSeries);
                break;
            case 'high':
                stockData = generateTimeSeries(props.highTimeSeries);
                break;
            case 'low':
                stockData = generateTimeSeries(props.lowTimeSeries);
                break;
            case 'close':
                stockData = generateTimeSeries(props.closeTimeSeries);
                break;
        }
        options = {
            title: {
                text: `Daily Stocks of ${props.ticker}`
            },
            rangeSelector: {
                selected: 6
            },
            series: [
                {
                    name: props.ticker,
                    data: stockData
                }
            ]
        }
        return (
            <div>
                <HighchartsReact highcharts={Highcharts} constructorType ={'stockChart'} options={options}/>
            </div>)
    }else {
        if(ticker !== '' && isTickerValid) {
            stockData = generateTimeSeries(props.openTimeSeries);
            const stockHighData = stockData.map(data => {
                return [data[0], data[1]]
            })
            options = {
                title: {
                    text: `Daily Stocks of ${props.ticker}`
                },
                rangeSelector: {
                    selected: 6
                },
                series: [
                    {
                        name: props.ticker,
                        data: stockData
                    }
                ]
            }
            return (
                <div>
                    <HighchartsReact highcharts={Highcharts} constructorType ={'stockChart'} options={options}/>
                </div>)
    
    
        } 
        else {
            return <ErrorToast/>
        }
    }
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
    


export default connect(mapStatetoProps, {getDailyStockTimeSeries})(DailyStock);

