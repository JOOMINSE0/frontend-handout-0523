import {useEffect} from "react";
import {useParams} from "react-router-dom";
import { useState } from 'react';

function Detail(props){

    let {id} = useParams();
    //let shoe = props.shoes.find(x =>  x.id == id);
    let[count, setCount] = useState(0);
    let[alert, setAlert] = useState(true);
    let[input,setInput] = useState("");

    useEffect(()=>{
        let a = setTimeout(()=> { setAlert(false) }, 2000)
        return()=>{
            clearTimeout(a)
        }
    }, []);

    useEffect(() =>{
        if(input && isNaN(input)){
            window.alert("숫자를 입력하세요.")
        }
    }, [input]);

    const handleInputChange = (e) =>{
        setInput(e.target.value);
    }

    return(
        <div className="container">
        <div className="alert alert-warning" style={{ display: alert ? 'block' : 'none' }}></div>

        {count}
        <button onCLick={()=>{setCount(count+1)}}>버튼</button>
        <div className="row">
            <div className="col-md-6">
            <img src="https://codingapple1.github.io/shop/shoes1.jpg" width="100%" />
            </div>
            <div className="col-md-6">
                <h4 className="pt-5">{props.shoes[id].title}</h4>
                <p>{props.shoes[id].content}</p>
                <p>{props.shoes[id].price}원</p>
                <button className="btn btn-danger">주문하기</button> 
            </div>
            <input type ="text" value={input} onChange={handleInputChange}/>
        </div>
        </div>         
    )
}

export default Detail;