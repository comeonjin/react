import React from "react";
import {Link} from "react-router";
import axios from "axios";
import {connect} from "react-redux";  //这就涉及到了connect是什么?
import "./index.css";


class Index extends React.Component{
    render() {
        return (
            <div className="indexContainer">
                <div className="news">
                    <h1>VOA（美国之音）慢速英语,常速英语,官网最新内容在线收听。</h1>
                    <ul>
                        {
                            this.props.homeList.map((value) => {
                                    return (
                                        <li className="item" key={value.id}><Link to={value.link}><span className={value.title.type}>{value.title.value}</span></Link>
                                            <Link to={value.link}><span className="content_simple">{value.value}</span></Link></li>
                                    )
                            })
                        }
                    </ul>
                </div>
                <div className="friendLink">
                    <h1>VOA友情链接</h1>
                    <ul>
                        {
                            this.props.friendList.map((value) => {
                                return(<li key={value.id}><Link to={value.link}>{value.value}</Link></li>)
                            })
                        }
                    </ul>
                </div>

            </div>
        )
    }

    componentDidMount(){
        if(this.props.homeList.length === 0){
            this.props.getIndexData(); //因为这里重新ajax请求了才会执行两次mapstate, 从reducer中拿两次数据
        }
    }
}


const mapStateToProps = (state) => {

    return ({
        homeList: state.index.homeList,
        friendList : state.index.friendList
    })

};

const mapDispatchToProps = (dispatch) =>({
    getIndexData: () => {
        console.log("axios is working ... ");
        axios.get("/api/index").then((res) => {
            console.log(res);
            dispatch({
                type: "GETSTATE",
                list : res.data.homeList,
                friendList : res.data.friendList
            });
        }).catch((err) => {
            console.log(err);
        })
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(Index);

