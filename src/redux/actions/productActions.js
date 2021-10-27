import { ActionsTypes } from "../constants/action-types";


export const setProducts = (products) => {
    return {
        type : ActionsTypes.SET_PRODUCTS,
        payload : products
    };
};

export const selectedProduct = (product) => {
    return {
        type : ActionsTypes.SELCETED_PRODUCT,
        payload : product
    };
};