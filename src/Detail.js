import React, { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from "react-router-dom";
import styled from 'styled-components';

// let YellowBtn = styled.button`
//     background : yellow;
//     color : black;
//     padding : 10px;
// `
// let Box = styled.div`
//     background : grey;
//     padding : 20px;
// `

function Detail(props) {
    let { id } = useParams();

    let [alert, setAlert] = useState(true);
    let [input, setInput] = useState("");

    useEffect(() => {
        if (isNaN(input) === true) {
            window.alert('경고: 숫자만 입력하세요.');
        }
    }, [input]);

    useEffect(() => {
        let timer = setTimeout(() => {
            setAlert(false);
        }, 2000);

        // Clean-up 함수 추가
        return () => clearTimeout(timer);
    }, []);

    return (
        <div className="container">
            {/* <Box>
                <YellowBtn>버튼</YellowBtn>
            </Box> */}
            {alert === true ?
                <div className='alert alert-warning'>
                    2초 이내 구매 시 할인
                </div>
                : null
            }

            <div className="row">
                <div className="col-md-6">
                    <img src="https://codingapple1.github.io/shop/shoes1.jpg" width="100%" alt="shoes" />
                </div>
                <div className="col-md-6">
                    <input onChange={(e) => { setInput(e.target.value) }} />
                    <h4 className="pt-5">{props.shoes[id].title}</h4>
                    <p>{props.shoes[id].content}</p>
                    <p>{props.shoes[id].price}원</p>
                    <button className="btn btn-danger">주문하기</button>
                </div>
            </div>
        </div>
    );
}

export default Detail;