import React from "react";
import {Link} from "react-router";
import "./header.css";
import axios from "axios";

class Header extends React.Component {
    constructor(props){
        super(props);

        this.state ={
            list : [],
            leftNavList:[],
            middleNavList:[],
            rightNavList:[]
        }
    }

    render(){
        return (
            <div className="headerContainer">
                <header >
                    {/*header 区*/}
                    <div className="header">
                        <Link to="/">
                            <img src={require("../../imgs/voalogo.png")} alt="" className="logo"/>
                        </Link>
                        <ul className="listContainer">
                            {this.state.list.map((value) => {
                                return <li className="listItem" key={value.id}><Link className="common" to={value.link}>{value.value}</Link></li>
                            })}
                        </ul>
                    </div>
                    {/*headerNav 区*/}
                    <div className="headerNav">
                        <div className="navblock navblock-left">
                            <h2><Link to="/list">常速英语</Link></h2>
                            <ul>
                                {this.state.leftNavList.map((value) => {
                                    return <li key={value.id}><Link to={value.link}>{value.value}</Link></li>
                                })}
                            </ul>
                        </div>
                        {/*------------------*/}
                        <div className="navblock navblock-middle">
                            <h2><Link to="/list">慢速英语（中级）</Link></h2>
                            <ul>
                                {this.state.middleNavList.map((value) => {
                                    return <li key={value.id}><Link to={value.link}>{value.value}</Link></li>
                                })}
                            </ul>
                        </div>
                        {/*----------------------*/}
                        <div  className="navblock navblock-right">
                            <h2><Link to="/list">英语教学（初级）</Link></h2>
                            <ul>
                                {this.state.rightNavList.map((value) => {
                                    return <li key={value.id}><Link to={value.link}>{value.value}</Link></li>
                                })}
                            </ul>
                        </div>
                    </div>
                </header>
                <div>{this.props.children}</div>

                <div className="footer">
                    <p>本网站由 <Link to="/">EasyVOA</Link> 开发上线 © 2011-2014
                        <Link to="/">手机版 EasyVOA</Link></p>
                    <p>网站所有内容，均来自VOA官方网站，所有资料均只作为英文学习资料使用。 站长QQ:1801785742 欢迎联系合作</p>
                    <p>
                        <img alt="51.La 网站流量统计系统" src={require("../../imgs/icon_9.gif")} />
                    </p>
                </div>

            </div>
        )
    }

    componentDidMount () {
        axios.get("/api/header").then((res) => {
            console.log(res);
            this.setState({
                list : res.data.list,
                leftNavList: res.data.leftNavList,
                middleNavList: res.data.middleNavList,
                rightNavList: res.data.rightNavList
            })
        })
    }
}

export default Header;
