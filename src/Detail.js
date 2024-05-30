import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import userEvent from "@testing-library/user-event";


function Detail(props) {

  let {id} = useParams();
  let finditems = props.shoes.find(function(x){
    return x.id == id
  });

  id = parseFloat(id);

  let [alert, setAlert] = useState(true); // 알림 메시지 표시
  let [remaintime, SetRemainTime] = useState(2); // 남은 시간 표시(초기값 2초)
  let [input, setInput] = useState("");

  useEffect(() => {
    if(isNaN(input) === true){
      window.alert("숫자만 입력하세요!");
    }
  }, [input])

  useEffect (() => {

    let timer = setInterval(() => { // 1초마다 SetRemainTime 실행
      SetRemainTime((prevTime) => { 

        if (prevTime > 0){
          return prevTime - 1; // 이전 시간이 0보다 크면 1초씩 감소
        } else {
          clearInterval(timer); // 0인 경우 타이머 중지
          return 0;
        }
      });
    }, 1000);

    let timerout = setTimeout (
      () => { setAlert(false) }, 2000) // 2초 후에 alert 상태를 false로 설정

      return () => {
        clearInterval(timer);
        clearTimeout(timerout);
      }
  }, [])

  useEffect(() => {
    if (remaintime === 0) { // 남은 시간이 0이면
      setAlert(false); // alert를 false로 설정하여 알림 숨김
    } else {
      setAlert(true); // 남은 시간이 0이 아닐 경우 true로 설정하여 알림 표시
    }
  }, [remaintime]);

    return(
    <div className="container">
      {
        alert && (
      <div className="alert alert-warning">
        {remaintime}초 이내 구매 시 할인
      </div>
       )}
    <div className="row">
    <div className="col-md-6">
      <img src={"https://codingapple1.github.io/shop/shoes"+[id+1]+".jpg"}  width="100%" />
    </div>
    <div className="col-md-6">
    <input type="text" value={input} onChange={(e) => {setInput(e.target.value)}}/>
      <h4 className="pt-5">{finditems.title}</h4>
      <p>{finditems.content}</p>
      <p>{finditems.price}</p>
      <button className="btn btn-danger">주문하기</button> 
        </div>

    </div>
    </div> 
    )

} export default Detail;