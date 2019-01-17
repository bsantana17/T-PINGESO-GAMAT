import * as actionTypes from './actionTypes';
import axios from '../../axios-config';


export const fetchProviderStart = ()=>{
    return {
        type:actionTypes.FETCH_PROVIDER_START
    }
}

export const fetchProviderSuccess = (providers) =>{
    return {
        type:actionTypes.FETCH_PROVIDER_SUCCESS,
        providersData:providers
    }
}

export const addProvider=(provider)=>{
    return dispatch =>{
        dispatch(fetchProviderStart())
        axios.post('/distributors',provider)
        .then(res=>{
            dispatch(fetchProvider());
        })
        .catch(err=>{

        })
    }
}

export const deleteProvider= (id)=>{
    return dispatch=>{
        dispatch(fetchProviderStart())
        console.log("id",id)
        axios.delete(`/distributors/${id}`)
        .then(res=>{
            dispatch(fetchProvider());

        })
        .catch(err=>{

        })

    }
}

export const fetchProvider= ()=>{
    return dispatch=>{
        dispatch(fetchProviderStart())
        axios.get('/distributors')
        .then((res)=>{
            dispatch(fetchProviderSuccess(res.data))

        })
        .catch(err=>{

        })
    }
}