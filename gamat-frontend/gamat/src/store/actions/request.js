import * as actionTypes from './actionTypes';
import axios from '../../axios-config';



export const addRequestSuccess = ( id, requestData ) => {
    return {
        type: actionTypes.ADD_REQUEST_SUCCESS,
        requestId: id,
        requestData: requestData
    };
};

export const addRequestFail = ( error ) => {
    return {
        type: actionTypes.ADD_REQUEST_FAIL,
        error: error
    };
}

export const addRequestStart = () => {
    return {
        type: actionTypes.ADD_REQUEST_START
    };
};

export const fetchRequestsSuccess = ( requests ) => {
    return {
        type: actionTypes.FETCH_REQUESTS_SUCCESS,
        requests: requests
    };
};

export const fetchRequestsFail = ( error ) => {
    return {
        type: actionTypes.FETCH_REQUESTS_FAIL,
        error: error
    };
};

export const fetchRequestsStart = () => {
    return {
        type: actionTypes.FETCH_REQUESTS_START
    };
};

export const addRequest = ( requestData ) => {
     return dispatch => {
        // dispatch( addRequestStart() );
        // axios.post( '/orders.json', orderData )
        //     .then( response => {
        //         console.log( response.data );
        //         dispatch( addRequestSuccess( response.data.name, orderData ) );
        //     } )
        //     .catch( error => {
        //         dispatch( addRequestFail( error ) );
        //     } );
    };
};

export const fetchRequests = () => {
    return dispatch => {
        dispatch(fetchRequestsStart());
        axios.get( 'http://pingeso-back.herokuapp.com/requests/6/manager')
            .then( res => {
                const fetchedRequests = res.data;

    
                dispatch(fetchRequestsSuccess(fetchedRequests));
            } )
            .catch( err => {
                dispatch(fetchRequestsFail(err));
            } );
    };
};