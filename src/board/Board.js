import { useEffect } from "react";
import { useState } from "react";

function Notice(){

    const [page, setPage]=useState(1);
    const[boardList, setBoardList] = useState([]);

    useEffect(()=>{
        getList();
    })

    async function getList(){
        fetch(`http://localhost:80/notice/list`)
            .then(result => result.json())
            .then(res => setBoardList(res));
    }

    return(
        <>
            <h1>board</h1> 
            <table className="table table-hover">
                <thead></thead>
                <tr>
                    <th>번호</th>
                    <th>타이틀</th>
                    <th>작성자</th>
                    <th>날짜</th>
                    <th>조회수</th>
                </tr>
                    {
                        boardList.map((ele, idx)=>(
                            <tr key={idx}>
                                <td>{ele.boardNum}</td>
                                <td>{ele.boardTitle}</td>
                                <td>{ele.boardWriter}</td>
                                <td>{ele.boardDate}</td>
                                <td>{ele.boardHit}</td>
                            </tr>
                        )) 
                    }
                    {/* {
                        boardList.map((ele, idx)=>{
                            return `<tr key=${idx}>
                                <td>${ele.boardNum}</td>
                                <td>${ele.boardTitle}</td>
                                <td>${ele.boardWriter}</td>
                                <td>${ele.boardDate}</td>
                                <td>${ele.boardHit}</td>
                            </tr>`
                        })
                    } */}
                <tbody>

                </tbody>
            </table>
            <button onClick={page+1}>next</button>
        </>
    );
}



export default Notice;
