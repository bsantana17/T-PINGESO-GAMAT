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
        requestError: error
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
        requestError: error
    };
};

export const fetchRequestsStart = () => {
    return {
        type: actionTypes.FETCH_REQUESTS_START
    };
};

export const addRequest = ( requestData, userId ) => {

  return dispatch => {
        //console.log('Datos a enviar: ' + requestData);
        //console.log('Al user: '+ userId);
        dispatch( addRequestStart() );
        axios.post( '/request/create/'+userId+'/1', requestData )
            .then( response => {
                console.log( response.data );
                //dispatch( addRequestSuccess( response.data, requestData ) );
            } )
            .catch( error => {
                dispatch( addRequestFail( error ) );
           } );
        };
};

export const fetchRequests = (userId) => {
    return dispatch => {
        dispatch(fetchRequestsStart());
        axios.get( '/requests/'+userId+'/manager')
            .then( res => {
                const fetchedRequests = res.data;
                dispatch(fetchRequestsSuccess(fetchedRequests));
            } )
            .catch( err => {
                dispatch(fetchRequestsFail(err));
            } );
    };
};