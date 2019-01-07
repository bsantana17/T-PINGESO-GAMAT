import * as actionTypes from './actionTypes';
// import axios from '../../axios-config';
import axios from 'axios'


export const loginStart = () => {
    return {
        type: actionTypes.LOGIN_START
    };
}

export const loginSuccess = (userType, userId) => {
    return {
        type: actionTypes.LOGIN_SUCCSESS,
        userType: userType,
        userId: userId
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
    localStorage.removeItem('idUser');
    return {
        type: actionTypes.LOGIN_LOGOUT
    };
};

export const login =  (email,password) => {
    return dispatch => {
        dispatch(loginStart());

        
        const loginData = {
           username: email,
            password: password,
        }
        
        // const config = {
        //     headers: {
        //       'Content-Type': 'application/json',
        //       Authorization: `Bearer ${user.jwt}`,
        //     },
        //     data: {},
        //   };
       // dispatch(loginSuccess('2', 6));
        console.log(loginData)
        axios.post( 'http://localhost:8080/login',loginData,{headers: {
           
            'Content-Type': "application/json",
          }}  )
            .then( response => {
                //console.log('post success');
              
                if(response.data === "NOT_FOUND"){
                    //console.log(response.data);
                    dispatch(loginFail("Ups, hubo un error al intentar iniciar sesión"));
                }
                else{
                    localStorage.setItem('userType', response.data.role);
                    localStorage.setItem('idUser', response.data.idUser);
                   
                    dispatch(loginSuccess(response.data.role, response.data.idUser));
                }
            } )
            .catch( error => {
                //console.log(error);
              
                //dispatch(loginFail(error.data));
                dispatch(loginFail("Ups, hubo un error al intentar iniciar sesión"));
            } );
    };
}

export const loginCheckState = () => {
    return dispatch => {
        const userType = localStorage.getItem('userType');
        if (!userType) {
            dispatch(logout());
        } else {
            const userId = localStorage.getItem('idUser');
            dispatch(loginSuccess(userType, userId));
        }
    };
};