import * as actionTypes from './actionTypes';
import axios from '../../axios-config';



export const addRequestsSuccess = ( id, requestData ) => {
    return {
        type: actionTypes.ADD_REQUESTS_SUCCESS,
        requestId: id,
        requestData: requestData
    };
};

export const addRequestsFail = ( error ) => {
    return {
        type: actionTypes.ADD_REQUESTS_FAIL,
        requestError: error
    };
}

export const addRequestsStart = () => {
    return {
        type: actionTypes.ADD_REQUESTS_START
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
        dispatch( addRequestsStart() );
        axios.post( '/requests/create/'+userId, requestData )
            .then( response => {
                console.log( response.data );
                dispatch( addRequestsSuccess( response.data.idRequest, requestData ) );
            } )
            .catch( error => {
                dispatch( addRequestsFail( error ) );
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