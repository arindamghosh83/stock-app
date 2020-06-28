import React from 'react';
import {ErrorToast} from '../components/presentation/ErrorToast'

export const Home = props => {
    console.log(props);
    return (
    <div>
        {props.error && props.error.errorOccurred ? <ErrorToast {...props} /> : null }
    </div>
)}

    


