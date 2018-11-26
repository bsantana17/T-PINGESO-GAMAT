import * as actionTypes from './actions/actionTypes';
import { updateObject } from './utility';
//import { login } from './actions';
//import { loginSuccess, loginFail } from './actions/login';

const initialState = {
    requests: [],
    requestLoading: false,
    userType: null,
    userId: null,
    loginLoading: false,
    loginError: null,
    loading: false,
    requestSent: false
};

const addRequestStart = ( state, action ) => {
    return updateObject( state, { loading: true } );
};

const addRequestSuccess = ( state, action ) => {
    const newRequest = updateObject( action.requestData, { id: action.requestId } );
    return updateObject( state, {
        loading: false,
        requestSent: true,
        requests: state.concat( newRequest )
    } );
};

const addRequestFail = ( state, action ) => {
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

const fetchLoginStart = ( state, action ) => {
    return updateObject( state , { loginLoading: true } );
};

const fetchLoginSuccess = ( state, action ) => {
    return updateObject( state , { 
        loginLoading: false,
        error: null,
        userType: action.userType,
        userId: action.userId
     } );
};

const fetchLoginFail = ( state, action ) => {
    return updateObject( state , { 
        loginLoading: false,
        loginError: action.loginError
    } );
};

const fetchLogout = (state, action) => {
    return updateObject(state, { userType: null});
};

const reducer = ( state = initialState, action ) => {
    switch ( action.type ) {
        case actionTypes.FETCH_REQUESTS_START: return fetchRequestsStart( state, action );
        case actionTypes.FETCH_REQUESTS_SUCCESS: return fetchRequestsSuccess( state, action );
        case actionTypes.FETCH_REQUESTS_FAIL: return fetchRequestsFail( state, action );
        case actionTypes.LOGIN_START: return fetchLoginStart( state, action);
        case actionTypes.LOGIN_SUCCSESS: return fetchLoginSuccess( state, action);
        case actionTypes.LOGIN_FAIL: return fetchLoginFail( state, action);
        case actionTypes.LOGIN_LOGOUT: return fetchLogout( state, action);
        default: return state;
    }
};

export default reducer;