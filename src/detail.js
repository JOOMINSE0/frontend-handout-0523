import {useEffect} from "react";
import {useParams} from "react-router-dom";
import { useState } from 'react';

function Detail(props){

    let {id} = useParams();

    let[alert, alert변경] = useState(true);
    let[inputValue,setInputValue] = useState("");

    useEffect(()=>{
        setTimeout(()=> {alert변경(false) }, 2000)
    }, []);

    useEffect(() =>{
        if(inputValue && isNaN(inputValue)){
            window.alert("숫자를 입력하세요.")
        }
    }, [inputValue]);

    return(
        <div className="container">
            {alert && (<div className="alert alert-warning">
                2초 이내 구매시 할인
            </div>)} 
            <div className="row">
                <div className="col-md-6">
                <img src="https://codingapple1.github.io/shop/shoes1.jpg" width="100%" />
                </div>
                <div className="col-md-6">
                <input type ="text" value={inputValue} onChange={(e) => setInputValue(e.target.value)}/>
                    <h4 className="pt-5">{props.shoes[id].title}</h4>
                    <p>{props.shoes[id].content}</p>
                    <p>{props.shoes[id].price}원</p>
                    <button className="btn btn-danger">주문하기</button> 
                </div>
            </div>
        </div>         
    )
}

export default Detail;