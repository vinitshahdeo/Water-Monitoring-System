import {FETCH_TANKS} from './types';

export const fetchTanks = () => {
  return ({
    type: FETCH_TANKS,
    payload: [
      {"id":"1","value":"70"},
      {"id":"2","value":"80"},
      {"id":"3","value":"40"},
      {"id":"4","value":"90"}
    ]
  }) 
};