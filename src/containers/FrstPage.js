import React from "react";
import { useDispatch, useSelector } from "react-redux"; 
import { cityValue } from "../redux/actions/productActions";
const FrstPage = ({handleButtonCity}) =>{
    const dispatch = useDispatch();
    const clickButton = () => {
        let value = "Moscow"
        dispatch(cityValue(value)) // отрпавляем в стор Экшены — это обычные JavaScript-объекты. Экшены должны иметь поле type, которое указывает на тип исполняемого экшена
    }
    const clickButtonOther = () => {
        let value = "Other"
        dispatch(cityValue(value)) // отрпавляем в стор Экшены — это обычные JavaScript-объекты. Экшены должны иметь поле type, которое указывает на тип исполняемого экшена

}

    return (
        <div className="city">
            <div className="ui orange block header">
                <div>Select you city</div>
                <div className="ui vertical button" tabIndex="0" onClick={clickButton}>
                    <div className="hidden content"></div>
                    <div className="visible content">Moscow</div>
                </div>
                <div className="ui vertical button" tabIndex="0" onClick={clickButtonOther}>
                    <div className="hidden content"></div>
                    <div className="visible content">Other</div>
                </div>
            </div>
        </div>
    )
};

export default FrstPage;