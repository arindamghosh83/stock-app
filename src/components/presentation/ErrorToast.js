import React, {useState, useEffect} from 'react';
import {connect} from 'react-redux';
import Toast from 'react-bootstrap/Toast';
import {resetError} from '../../actions/action'


export const ErrorToast = (props) => {
    const [showA, setShowA] = useState(true);

    return  (

    <div className='row'>
        <div className='col-xs-12'>
        <Toast show={showA} onClose={() => {
            setShowA(!showA);
            //props.resetError();
            }} autohide={false}>
        <Toast.Header>
          <img
            src="holder.js/20x20?text=%20"
            className="rounded mr-2"
            alt=""
          />
          <strong className="mr-auto">{props.header || 'Something went wrong while fetching the data'}</strong>
          <small></small>
        </Toast.Header>
        <Toast.Body>{props.body || 'Please check to see if the ticker id is correct'}</Toast.Body>
      </Toast>
        </div>
    </div>

  )
}

    

export default connect(null, {resetError})(ErrorToast);