import React from 'react';
import {connect} from 'react-redux';
import ErrorToast from '../components/presentation/ErrorToast';
import {resetError} from '../actions/action'

export const Home = props => {
    return (
    <div>
        {props.errorOccurred ? <ErrorToast {...props} /> : null }
    </div>
)}

const mapStatetoProps = state => ({
    loggedIn: state.auth.loggedIn,
    errorMessage: state.error.errorMessage,
    errorOccurred: state.error.errorOccurred,
  
  })
    
export default connect(mapStatetoProps, {resetError})(ErrorToast);