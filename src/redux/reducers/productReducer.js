import { ActionTypes } from "../contants/action-types";
const initialState = {
    products:[],
};
export const productReducer = (state = initialState, {type, payload}) => { // состояние
    switch (type){
        case ActionTypes.SET_PRODUCTS:
            return {...state,products:payload};
    default:
        return state;
    }
}
export const selectedProductsReducer = (state = {}, { type, payload }) => { // состояние
    console.log("selectedProductsReducer: ", type);
    switch (type) {
      case ActionTypes.SELECTED_PRODUCT:
        return { ...state, ...payload };
      case ActionTypes.REMOVE_SELECTED_PRODUCT:
        return {};
      default:
        return state;
    }
  };

  export const setValueCity = (state = "", { type, payload }) => { // состояние
    console.log("setValueCity: ", payload);
    switch (type){
      case ActionTypes.CITY_VALUE:
          return {state,text:payload};
  default:
      return state;
    }
  };
