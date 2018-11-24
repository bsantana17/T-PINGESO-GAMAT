import * as actionTypes from './actionTypes';
import axios from '../../axios-config';


export const loginStart = () => {
    return {
        type: actionTypes.LOGIN_START
    };
}

export const loginSuccess = (userType) => {
    return {
        type: actionTypes.LOGIN_SUCCSESS,
        userType: userType
    };
}

export const loginFail = (error) => {
    return {
        type: actionTypes.LOGIN_FAIL,
        loginError: error
    };
}

export const logout = () => {
    localStorage.removeItem('userType');
    return {
        type: actionTypes.LOGIN_LOGOUT
    };
};

export const login =  (email,password) => {
    return dispatch => {
        dispatch(loginStart());
        const loginData = {
            email: email,
            password: password,
        }
        axios.post( 'https://pingeso-back.herokuapp.com/users/login',loginData)
            .then( response => {
                console.log(response);
                if(response.data === "NOT_FOUND"){
                    console.log(response.data);
                    dispatch(loginFail("Ups, hubo un error al intentar iniciar sesión"));
                }
                else{
                    localStorage.setItem('userType', response.data.roles[0].idUserType);
                    dispatch(loginSuccess(response.data.roles[0].idUserType));
                }
            } )
            .catch( error => {
                //console.log(error);
                dispatch(loginFail(error.data));
            } );
    };
}