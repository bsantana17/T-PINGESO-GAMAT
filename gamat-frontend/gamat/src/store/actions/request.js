import * as actionTypes from './actionTypes';

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