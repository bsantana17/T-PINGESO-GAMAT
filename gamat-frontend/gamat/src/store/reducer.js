import * as actionTypes from './actions/actionTypes';
import { updateObject } from './utility';

const requestsInitialState = {
    requests: [],
    loading: false 
};

const fetchRequestsStart = ( state, action ) => {
    return updateObject( state, { loading: true } );
};

const fetchRequestsSuccess = ( state, action ) => {
    return updateObject( state, {
        requests: action.requests,
        loading: false
    } );
};

const fetchRequestsFail = ( state, action ) => {
    return updateObject( state, { loading: false } );
};

const reducer = ( state = requestsInitialState, action ) => {
    switch ( action.type ) {
        case actionTypes.FETCH_REQUESTS_START: return fetchRequestsStart( state, action );
        case actionTypes.FETCH_REQUESTS_SUCCESS: return fetchRequestsSuccess( state, action );
        case actionTypes.FETCH_REQUESTS_FAIL: return fetchRequestsFail( state, action );
        default: return state;
    }
};

export default reducer;