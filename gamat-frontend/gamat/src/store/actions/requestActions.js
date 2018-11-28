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
        error: error
    };
}

export const addRequestsStart = () => {
    return {
        type: actionTypes.ADD_REQUESTS_START
    };
};

export const removeRequestsStart = () => {
    return {
        type: actionTypes.REMOVE_REQUESTS_START
    };
};

export const removeRequestsSuccess = (requestId) => {
    return {
        type: actionTypes.REMOVE_REQUESTS_SUCCESS,
        requestId : requestId
    };
};

export const removeRequestsFail = ( error ) => {
    return {
        type: actionTypes.REMOVE_REQUESTS_FAIL,
        error: error
    };
}

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

export const removedToFalse = () => {
    return {
        type: actionTypes.REMOVED_TO_FALSE
    };
};

export const addRequest = ( requestData, userId ) => {

  return dispatch => {
        dispatch( addRequestsStart() );
        axios.post( '/requests/create/'+userId, requestData )
            .then( response => {
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

export const removeRequests = (requestId) => {
    return dispatch => {        
        dispatch(removeRequestsStart());
        axios.delete( '/requests/delete/'+requestId)
            .then( res => {
                console.log(res.data);
                dispatch(removeRequestsSuccess(requestId));
            } )
            .catch( err => {
                dispatch(removeRequestsFail(err));
            } );
    };
};

export const removedFalse = () => {
    return dispatch => {        
        dispatch(removedToFalse());
    };
};


