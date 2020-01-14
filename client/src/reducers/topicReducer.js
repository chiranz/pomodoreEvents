import {
  GET_ITEMS,
  ADD_ITEM,
  DELETE_ITEM,
  ITEMS_LOADING
} from "../actions/types";

const initialState = {
  topics: [],
  loading: false
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_ITEMS:
      return {
        ...state,
        topics: action.payload,
        loading: false
      };
    case DELETE_ITEM:
      const filteredTopics = state.topics.filter(
        item => item._id !== action.payload
      );
      return {
        ...state,
        topics: filteredTopics
      };
    case ADD_ITEM:
      return {
        ...state,
        topics: [...state.topics, action.payload]
      };
    case ITEMS_LOADING:
      return {
        ...state,
        loading: true
      };
    default:
      return state;
  }
}
