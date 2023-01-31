// reducers - пользователь что то сделал происхоидт событие и это собоытие что то за самбой несет, как раз в редусере 
// редусер - это фильтр знает состояние нашего стора и события на акшен ( функция которая смотри на событие и берет состояние, зависит от события обновляет состояние)

import { combineReducers } from "redux";
import { productReducer,selectedProductsReducer,setValueCity} from "./productReducer";

const reducers = combineReducers({
    allProducts:productReducer,
    product:selectedProductsReducer,
    city:setValueCity,
}); 


export default reducers;