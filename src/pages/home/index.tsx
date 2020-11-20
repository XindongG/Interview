import React, {useState, useEffect} from 'react';
import {useParams, useHistory} from "react-router-dom";
import {observer, inject} from 'mobx-react';

const Home = (props:any) => {
	const history = useHistory();
	const [count, setCount] = useState(10);
	const params:object = useParams();
	useEffect(()=>{
		console.log(props, "props");
		console.log(params, 'params');
		setCount(100);
	}, []);
	const link = () =>{
		history.push('/login');
	};

	return <div className="container">
		<p>点击跳转到home页</p>
		<br/>
		<p>点击跳转到login页面</p>
		<p>state的count:{count}</p>
		<br/>
		<p>
            当前mobx次数:{props.homeStore.count}
		</p>
		<p>当前的参数json数据为：{JSON.stringify(params)}</p>
		<button onClick={()=>{ props.homeStore.addCount(); }}>更新次数</button>
		<button onClick={()=>{ link(); }}>跳转login</button>
	</div>;
};

export default inject('homeStore', 'detailStore')(observer(Home));
