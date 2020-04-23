import { FETCH_TANKS } from "../actions/types";

const initialState = {
  tanks: []
};

export default function(state = initialState, action) {
  switch (action.type) {
    case FETCH_TANKS:
      return {
        ...state,
        tanks: action.payload
      };
    default:
      return state;
  }
}
