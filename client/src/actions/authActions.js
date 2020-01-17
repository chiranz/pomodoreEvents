import axios from "axios";
import {
  USER_LOADING,
  USER_LOADED,
  AUTH_ERROR,
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  LOGOUT_SUCCESS
} from "./types";
import { returnErrors } from "./errorActions";

// check token and load user
export const loadUser = () => (dispatch, getState) => {
  dispatch({ type: USER_LOADING });

  let config = getTokenConfig(getState);
  axios
    .get("/api/auth/user", config)
    .then(res => dispatch({ type: USER_LOADED, payload: res.data }))
    .catch(err => {
      dispatch(returnErrors(err.response.data, err.response.status));
      dispatch({
        type: AUTH_ERROR
      });
    });
};

// Setup Config/Headers and Token
export const getTokenConfig = getState => {
  // get token from local storage
  const token = getState().authReducer.token;
  // Headers
  const config = {
    headers: {
      "Content-type": "application/json"
    }
  };
  if (token) {
    config.headers["x-auth-token"] = token;
  }
  return config;
};

// Register User
export const register = ({ name, email, password }) => dispatch => {
  // Headers
  const config = {
    headers: {
      "Content-type": "application/json"
    }
  };
  // Request body
  const body = JSON.stringify({ name, email, password });
  axios
    .post("/api/users", body, config)
    .then(res => {
      dispatch({
        type: REGISTER_SUCCESS,
        payload: res.data
      });
    })
    .catch(err => {
      dispatch(
        returnErrors(err.response.data, err.response.status, REGISTER_FAIL)
      );
      dispatch({
        type: REGISTER_FAIL
      });
    });
};

export const logout = () => dispatch => {
  dispatch({
    type: LOGOUT_SUCCESS
  });
};
