import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";



function Detail (props){

    let {id} = useParams();
    let 찾은상품 = props.shoes.find(function(x){ return x.id ==id });
    let [alert, setAlert] = useState(true);
    let [input, setInput] = useState('');

    useEffect(()=>{
      if( input && isNaN(input)) {
        window.alert('경고: 숫자만 입력하세요.');
      }
    }, [input]);

    id = parseFloat(id);

    useEffect(()=>{
      setTimeout(()=>{ setAlert(false) },2000)
    })

    
    return(
<div className="container">
    {
    alert == true 
    ? <div className="alert alert-warning">
      2초 이내 구매시 할인
      </div>
      : null
      }
  <div className="row">
    <div className="col-md-6">
      <img src={"https://codingapple1.github.io/shop/shoes"+ [id+1] + ".jpg"} width="100%" />
    </div>
    <div className="col-md-6">
      <input type="text" value={input} onChange={(e) => setInput(e.target.value)}></input>
      <h4 className="pt-5">{찾은상품.title}</h4>
      <p>{찾은상품.content}</p>
      <p>{찾은상품.price}</p>
      <button className="btn btn-danger">주문하기</button> 
    </div>
  </div>
  </div> 
  )

}


export default Detail;