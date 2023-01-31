import React, { useEffect, useCallback, useMemo } from "react";
import ProductComponent from "./ProductComponent";
import { AxiosProvider, Request, Get, Delete, Head, Post, Put, Patch, withAxios } from 'react-axios'
import { selectedProducts,removeSelectedProducts} from "../redux/actions/productActions";
import axios from "axios";
import { useParams } from "react-router-dom";
//useSelector - используем когда хотим получить данные из глобального хранилища 
//useDispatch - получаем событие через хук 
import { useDispatch, useSelector } from "react-redux"; 


const ProductDetail = () => {
    const {productId} = useParams();
    const dispatch = useDispatch();
    const featchProduct = async () => {
    const response = await axios
    .get(`https://fakestoreapi.com/products/${productId}`)
    .catch((err) => {
      console.log("ErrId: ", err);
    });
    dispatch(selectedProducts(response.data))
    console.log(response.data)
    }
    const product = useSelector((state) => state.product) // идет в store дергает reducers проваливается в нужный параметр и возвращает состояние если перед этим был dispatch например REMOVE_SELECTED_PRODUCT то вернет пустоту
    const valueCity = useSelector((state) => state.city.text)
    const { image, title, price, category, description } = product;
    useEffect(()=>{
        console.log("useEffect: ", productId)
        if(productId && productId !=="") {
            featchProduct();
        }
        return () => { // если добавить return то реакт вызовет ее после очистки
            dispatch(removeSelectedProducts()) // через хук передаем действия - сработал removeSelectedProducts он в store вернет REMOVE_SELECTED_PRODUCT
        }
    },[productId])
    return (
        <div className="ui grid container">
        {Object.keys(product).length === 0 ? (
          <div>...Loading</div>
        ) : (
          <div className="ui placeholder segment">
            <div className="ui two column stackable center aligned grid">
              <div className="ui vertical divider">AND</div>
              <div className="middle aligned row">
                <div className="column lp">
                  <img className="ui fluid image" src={image} />
                </div>
                <div className="column rp">
                  <h1>{title}</h1>
                  <h2>
                    <a className="ui teal tag label">${price}</a>
                  </h2>
                  <h3 className="ui brown block header">{category}</h3>
                  <h2>City: {valueCity}</h2>
                  <p>{description}</p>
                  <div className="ui vertical animated button" tabIndex="0">
                    <div className="hidden content">
                      <i className="shop icon"></i>
                    </div>
                    <div className="visible content">Add to Cart</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    )
};

export default ProductDetail;