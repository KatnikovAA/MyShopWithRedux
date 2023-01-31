import React, { useEffect, useCallback, useMemo } from "react";
import ProductComponent from "./ProductComponent";
import { AxiosProvider, Request, Get, Delete, Head, Post, Put, Patch, withAxios } from 'react-axios'
import { setProducts} from "../redux/actions/productActions";
import axios from "axios";
//useSelector - используем когда хоти получить данные из глобального хранилища 
//useDispatch - получаем событие через хук 
import { useDispatch, useSelector } from "react-redux"; 



const ProcuctListing = () => {
        const products = useSelector((state) => state)
        const dispatch = useDispatch(); //достаме функцию диспетчер
        const fetchProducts = async () => {
            const response = await axios
            .get("https://fakestoreapi.com/products")
            .catch((err) => {
              console.log("Err: ", err);
            });
            dispatch(setProducts(response.data)) // вызываем и получаем обртано действие SET_PRODUCTS далее вызывается store 
        }
        useEffect(()=>{
            fetchProducts();
        },[])
    return (
        <div className="ui grid container">
           <ProductComponent/>
        </div>
    )
};

export default ProcuctListing;