import * as actionTypes from './actions';

const initialState = {
    items: null
};

const reducer = (state = initialState, action) => {
    switch(action.type){
        case actionTypes.ADD_ITEM:
            return{

            };
        case actionTypes.REMOVE_ITEM:
            return{

            };
        default: 
            return state;
    }
};

export default reducer;