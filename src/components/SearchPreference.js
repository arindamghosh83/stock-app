import React from 'react';
import {connect} from 'react-redux';
import Highcharts from 'highcharts/highstock';
import HighchartsReact from 'highcharts-react-official';
import {generateTimeSeries} from '../utils/util';

const SearchPreference = props => {
    let stockData = [];
    let options;
    const preferenceId = props.match.params.preferenceId;
        switch(preferenceId){
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
                    name: props.ticker, //props.dailyStocks['Meta Data']['2. Symbol'],
                    data: stockData
                }
            ]
        }
        return (
            <div>
                <HighchartsReact highcharts={Highcharts} constructorType ={'stockChart'} options={options}/>
            </div>)
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
    


export default connect(mapStatetoProps)(SearchPreference);
