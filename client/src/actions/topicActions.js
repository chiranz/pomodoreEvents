import axios from "axios";
import { GET_ITEMS, DELETE_ITEM, ADD_ITEM, ITEMS_LOADING } from "./types";
import { getTokenConfig } from "./authActions";
import { returnErrors } from "./errorActions";

export const getItems = () => dispatch => {
  dispatch(setItemsLoading());
  axios
    .get("/api/topics")
    .then(res =>
      dispatch({
        type: GET_ITEMS,
        payload: res.data
      })
    )
    .catch(err => {
      const { data, status } = err.response;
      dispatch(returnErrors(data, status));
    });
};

export const deleteItem = id => (dispatch, getState) => {
  axios
    .delete(`api/topics/${id}`, getTokenConfig(getState))
    .then(() =>
      dispatch({
        type: DELETE_ITEM,
        payload: id
      })
    )
    .catch(err => {
      const { data, status } = err.response;
      dispatch(returnErrors(data, status));
    });
  return {
    type: DELETE_ITEM,
    payload: id
  };
};

export const addItem = item => (dispatch, getState) => {
  axios
    .post("/api/topics", item, getTokenConfig(getState))
    .then(res =>
      dispatch({
        type: ADD_ITEM,
        payload: res.data
      })
    )
    .catch(err => {
      const { data, status } = err.response;
      dispatch(returnErrors(data, status));
    });
};

export const setItemsLoading = () => {
  return {
    type: ITEMS_LOADING
  };
};
