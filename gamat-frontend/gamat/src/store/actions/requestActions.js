import * as actionTypes from './actionTypes';
import axios from '../../axios-config';

export const addRequestsSuccess = (id, requestData) => {
    return {
        type: actionTypes.ADD_REQUESTS_SUCCESS,
        requestId: id,
        requestData: requestData
    };
};

export const addRequestsFail = (error) => {
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
        requestId: requestId
    };
};

export const removeRequestsFail = (error) => {
    return {
        type: actionTypes.REMOVE_REQUESTS_FAIL,
        error: error
    };
}

export const fetchRequestsSuccess = (requests) => {
    return {
        type: actionTypes.FETCH_REQUESTS_SUCCESS,
        requests: requests
    };
};

export const fetchRequestsFail = (error) => {
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

export const approveSuccess = () =>{
    return {
        type: actionTypes.FECTH_APPROVE_SUCCESS
    }
}

export const rejectSuccess = () =>{
    return {
        type: actionTypes.FECTH_REJECT_SUCCESS
    }
}

export const removedToFalse = () => {
    return {
        type: actionTypes.REMOVED_TO_FALSE
    };
};

export const removedToFalseRequest = () => {
    return {
        type: actionTypes.REMOVED_TO_FALSE_REQUEST
    };
};

export const addRequest = (requestData, userId) => {

    return dispatch => {
        dispatch(addRequestsStart());
        axios.post('/requests/create/' + userId, requestData)
            .then(response => {
                dispatch(addRequestsSuccess(response.data.idRequest, requestData));
            })
            .catch(error => {
                dispatch(addRequestsFail(error));
            });
    };
};

export const fetchRequests = (userId, userType) => {
    return dispatch => {
        let ruta = ''
        // console.log("userType",userType)
        userType == 1 ?
            ruta = `/requests/${userId}/approver` :
            ruta = `/requests/${userId}/manager`;
        // console.log('id de user es ',userId)
        console.log(ruta)
        dispatch(fetchRequestsStart());
        axios.get(ruta)
            .then(res => {
                const fetchedRequests = res.data;
                // console.log("respuesta",res.data)
                dispatch(fetchRequestsSuccess(fetchedRequests));
            })
            .catch(err => {
                dispatch(fetchRequestsFail(err));
            });
    };
};

export const removeRequests = (requestId) => {
    return dispatch => {
        dispatch(removeRequestsStart());
        axios.delete('/requests/delete/' + requestId)
            .then(res => {
                console.log(res.data);
                dispatch(removeRequestsSuccess(requestId));
            })
            .catch(err => {
                dispatch(removeRequestsFail(err));
            });
    };
};

export const fetchApproveRequests = (requestId) =>{
    return dispatch => {
    axios.get(`requests/approve/${requestId}`)
        .then(res =>{
            console.log("aprobada",res)
            dispatch (approveSuccess());
        })
        .catch(err =>{
            console.log('error',err)
        })

    }

}

export const fetchRejectRequests = (requestId) =>{
    return dispatch => {
    axios.get(`requests/reject/${requestId}`)
        .then(res =>{
            console.log("rechazada",res)
            dispatch (rejectSuccess());
        })
        .catch(err =>{
            console.log('error',err)
        })

    }

}
export const removedFalseRequest = () => {
    return dispatch => {
        dispatch(removedToFalseRequest());
    };
};

export const removedFalse = () => {
    return dispatch => {
        dispatch(removedToFalse());
    };
};