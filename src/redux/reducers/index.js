import { combineReducders } from 'redux';
import { productreducer } from './productReducer';

const reducers = productreducer({
    allProducts : productreducer,
});

export default reducers;