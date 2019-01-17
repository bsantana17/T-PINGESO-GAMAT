import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../utility';


const initialState = {
    providers:[],
    loading:false,
    

  
};

const fetchSuccessProvider=(state,action)=>{
    return updateObject(state,{
        providers:action.providersData,
        loading:false})
}


const  startLoading = (state,action) =>{
    return updateObject(state,{loading:true})
}

const reducer = ( state = initialState, action ) => {
    switch ( action.type ) {
        case actionTypes.FETCH_PROVIDER_SUCCESS : return fetchSuccessProvider(state,action);
        case actionTypes.FETCH_PROVIDER_START: return startLoading(state,action);
       
       
        default: return state;
    }
};

export default reducer;