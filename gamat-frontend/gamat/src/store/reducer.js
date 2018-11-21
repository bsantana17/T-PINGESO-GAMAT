import * as actionTypes from './actions/actionTypes';

const initialState = {
    item: {
        name: '',
        quantity: '',
        urgency: false,
        description: ''
    }
};

const reducer = (state = initialState, action) => {
    switch(action.type){
        case actionTypes.ADD_ITEM:
            return{
                ...state,
                item: {
                    ...state.item,
                    [action.itemName]: state.item[action.itemName] + ' holi'

                }
            };
        case actionTypes.REMOVE_ITEM:
            return{

            };
        default: 
            return state;
    }
};

export default reducer;