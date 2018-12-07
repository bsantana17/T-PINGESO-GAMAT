import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../utility';
import { removedToFalseRequest } from '../actions/requestActions';

const initialState = {
    requests: [],
    removed: false,
    userType: null,
    userId: null,
    error: null,
    loading: false,
    requestSent: false,
    requestRemoved: false,
    requestApprove:false,
    requestReject:false,
    //cuando se modifique la bd esto se modificara 
    budgetSuccess:false,
};

const addRequestsStart = ( state, action ) => {
    return updateObject( state, { 
        loading: true 
    } );
};

const addRequestsSuccess = ( state, action ) => {
    //const newOrder = updateObject( action.requestId, { id: action.requestId } );
    return updateObject( state, {
        loading: false,
        requestSent: true,
    } );
};

const addRequestsFail = ( state, action ) => {
    return updateObject( state, { 
        loading: false, 
        error: action.error 
    } );
};

const removeRequestsStart = ( state, action ) => {
    return updateObject( state, { 
        loading: true 
    } );
};

const removeRequestsSuccess = ( state, action ) => {
    return updateObject( state, {
        loading: false,
        requestRemoved: true,
    } );
};

const removeRequestsFail = ( state, action ) => {
    return updateObject( state, { 
        loading: false, 
        error: action.error 
    } );
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

const removedToFalse= ( state, action) =>{
    return updateObject( state, { 
        requestRemoved: false
    } );
};
const falseRequest= ( state, action) =>{
    return updateObject( state, { 
        requestApprove:false,
        requestReject:false
    } );
};

const approveRequest = (state,action) =>{
    return updateObject(state,{
        requestApprove:true
    })
}

const rejectRequest = (state,action) =>{
    return updateObject(state,{
        requestReject:true
    })
}

const budgetSuccess= (state,action) =>{
    return updateObject(state,{budgetSuccess:true})
}

const reducer = ( state = initialState, action ) => {
    switch ( action.type ) {
        case actionTypes.FETCH_REQUESTS_START: return fetchRequestsStart( state, action );
        case actionTypes.FETCH_REQUESTS_SUCCESS: return fetchRequestsSuccess( state, action );
        case actionTypes.FETCH_REQUESTS_FAIL: return fetchRequestsFail( state, action );
        case actionTypes.FECTH_APPROVE_SUCCESS: return approveRequest(state,action);
        case actionTypes.FECTH_REJECT_SUCCESS: return rejectRequest(state,action);
        case actionTypes.ADD_REQUESTS_START: return addRequestsStart( state, action );
        case actionTypes.ADD_REQUESTS_SUCCESS: return addRequestsSuccess( state, action );
        case actionTypes.ADD_REQUESTS_FAIL: return addRequestsFail( state, action );
        case actionTypes.REMOVE_REQUESTS_START: return removeRequestsStart( state, action );
        case actionTypes.REMOVE_REQUESTS_SUCCESS: return removeRequestsSuccess( state, action );
        case actionTypes.REMOVE_REQUESTS_FAIL: return removeRequestsFail( state, action );
        case actionTypes.REMOVED_TO_FALSE: return removedToFalse( state, action );
        case actionTypes.REMOVED_TO_FALSE_REQUEST: return falseRequest( state, action );
        case actionTypes.ADD_BUDGET_SUCCESS: return budgetSuccess(state,action);
        default: return state;
    }
};

export default reducer;