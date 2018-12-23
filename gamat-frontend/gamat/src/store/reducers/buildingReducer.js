import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../utility';

const initialState = {
    companies:[],
    buildings:[],
    loading:false
  
};

const fetchSuccessCompanies= (state,action)=>{
    return updateObject(state,{
        companies: action.companiesData,
        loading:false
    })
}

const fetchSuccessBuldings= (state,action )=>{
    return updateObject(state,{
        buildings: action.buildingsData,
        loading:false
    })
}

const startLoading = (state,action) =>{
    return updateObject(state,{loading:true})
}

const reducer = ( state = initialState, action ) => {
    switch ( action.type ) {
        case actionTypes.FETCH_COMPANIES_SUCCESS : return fetchSuccessCompanies(state,action);
        case actionTypes.FETCH_COMPANY_START: return startLoading(state,action);
        case actionTypes.FETCH_BUILDINGS_SUCCESS: return fetchSuccessBuldings(state,action);
        case actionTypes.FETCH_BUILDING_START: return startLoading(state,action);
       
        default: return state;
    }
};

export default reducer;