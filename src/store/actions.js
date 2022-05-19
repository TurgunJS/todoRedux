import * as actions from './actionTypes';
import axios from 'axios';

const API_URL = 'http://167.99.218.30/api';

export const addQuestion = question => ({
  type: actions.QUESTION_ADD,
  payload: question
});

export const removeQuestion = id => ({
  type: actions.QUESTION_REMOVE,
  payload: { id }
});

export const setFetchingProducts = () => ({
  type: actions.FETCH_PRODUCTS
});

export const setProducts = (products) => ({
  type: actions.RECEIVE_PRODUCTS,
  payload: products
});

export const fetchDataSource = () => (dispatch) => {
  dispatch(setFetchingProducts());

  axios.get(`${API_URL}/products/`)
    .then(function (response) {
      dispatch(setProducts(response.data))
    })
    
};


