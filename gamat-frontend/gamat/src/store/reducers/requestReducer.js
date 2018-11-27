import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../utility';

const initialState = {
    requests: [],
    userType: null,
    userId: null,
    error: null,
    loading: false,
    requestSent: false
};

const addRequestsStart = ( state, action ) => {
    return updateObject( state, { loading: true } );
};

const addRequestsSuccess = ( state, action ) => {
    const newRequest = updateObject( action.requestData, { id: action.requestId } );
    return updateObject( state, {
        loading: false,
        requestSent: true,
        requests: state.concat( newRequest )
    } );
};

const addRequestsFail = ( state, action ) => {
    return updateObject( state, { loading: false } );
};


const fetchRequestsStart = ( state, action ) => {
    return updateObject( state, { requestLoading: true } );
};

const fetchRequestsSuccess = ( state, action ) => {
    return updateObject( state, {
        requests: action.requests,
        requestLoading: false
    } );
};

const fetchRequestsFail = ( state, action ) => {
    return updateObject( state, { requestLoading: false } );
};


const reducer = ( state = initialState, action ) => {
    switch ( action.type ) {
        case actionTypes.FETCH_REQUESTS_START: return fetchRequestsStart( state, action );
        case actionTypes.FETCH_REQUESTS_SUCCESS: return fetchRequestsSuccess( state, action );
        case actionTypes.FETCH_REQUESTS_FAIL: return fetchRequestsFail( state, action );
        case actionTypes.ADD_REQUESTS_START: return addRequestsStart( state, action );
        case actionTypes.ADD_REQUESTS_SUCCESS: return addRequestsSuccess( state, action );
        case actionTypes.ADD_REQUESTS_FAIL: return addRequestsFail( state, action );
        default: return state;
    }
};

export default reducer;