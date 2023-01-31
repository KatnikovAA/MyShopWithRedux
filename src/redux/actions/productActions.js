//ations - когда пользователь, что то делает происходит событие - действия

import {ActionTypes} from '../contants/action-types'; // посметсил экшены в отдельный модуль

const CITY_VALUE = 'CITY_VALUE' // тестовый экшен оставил тут

export const setProducts = (products) => {
    return {
        type: ActionTypes.SET_PRODUCTS,
        payload: products,
    };
};

export const selectedProducts = (product) => {
    return {
        type: ActionTypes.SELECTED_PRODUCT,
        payload: product,
    };
};

export const removeSelectedProducts = () => {
    return {
        type: ActionTypes.REMOVE_SELECTED_PRODUCT
    };
};

export const cityValue = (value) => {
    return {
        type: ActionTypes.CITY_VALUE,
        payload: value
    };
};