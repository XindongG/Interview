import React,{useState,useEffect} from 'react'
import {useParams,useHistory} from "react-router-dom";
export default function App() {
    const history = useHistory();
    const [count,setCount] = useState(10);
    const params:object = useParams();
    useEffect(()=>{
        console.log("执行了useEffect");
        console.log(params,'params')
        setCount(100);
    },[])
    const link = () =>{
        history.push('/login')
    }

    return <div className="container">
        <h1>欢迎来到React的世界</h1>
        <p>点击跳转到home页</p>
        <br/>
        <p>点击跳转到login页面</p>
        <br/>
        <p>
            当前count次数:{count}
        </p>
        <p>当前的参数json数据为：{JSON.stringify(params)}</p>
        <button onClick={()=>{setCount(count+1)}}>更新次数</button>
        <button onClick={()=>{link()}}>跳转login</button>
    </div>
}

