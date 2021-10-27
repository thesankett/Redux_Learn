
import { ActionsTypes } from "../constants/action-types";

const initialState = {
    products:[{
        id: 1,
        title : 'Sanket',
        category : 'Programmer'
    },
]
}

export const productreducer = (state = initialState, {type, payload}) => {
    switch (type) {
        case ActionsTypes.SET_PRODUCTS:    
            return state;
        default:
            return state;

    }
}