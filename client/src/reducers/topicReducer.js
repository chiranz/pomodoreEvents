import uuid from "uuid";
import { GET_ITEMS, ADD_ITEM, DELETE_ITEM } from "../actions/types";

const initialState = [
  {
    id: uuid(),
    weight: Math.floor(Math.random() * 20),
    name: "Ethereum",
    createdAt: new Date()
  },
  {
    id: uuid(),
    weight: Math.floor(Math.random() * 20),
    name: "Lightening",
    createdAt: new Date()
  },
  {
    id: uuid(),
    weight: Math.floor(Math.random() * 20),
    name: "BTCPay Server",
    createdAt: new Date()
  },
  {
    id: uuid(),
    weight: Math.floor(Math.random() * 20),
    name: "JAMStack",
    createdAt: new Date()
  },
  {
    id: uuid(),
    weight: Math.floor(Math.random() * 20),
    name: "Graphql",
    createdAt: new Date()
  }
];

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_ITEMS:
      return {
        ...state
      };
    default:
      return state;
  }
}
