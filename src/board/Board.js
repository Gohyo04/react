import { useEffect } from "react";


// let fnc = fetch("http://localhost/notice/list",{
//     method:"post",
//     headers : {               //데이터 타입 지정
//         "Content-Type":"application/json; charset=utf-8"
//     }
// })
// .then(res => console.log(res));


fetch("http://localhost/notice/list",(dd)=>{
    console.log(dd);
})
.then(res => console.log(res));

function Notice(){
    // return(
    //     useEffect(fnc,{

    //     }))
};

export default Notice;