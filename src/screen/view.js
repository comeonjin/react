import React from "react";
import {Router, Route, browserHistory, hashHistory, IndexRoute} from "react-router";
import {View as HeaderComponent} from "../components/header/";
import "./reset.css";
import {View as IndexComponent} from "../pages/index/index";
import {View as ListComponent} from "../pages/list/index";
import {View as DetailsComponent} from "../pages/details/index";

//在screen中, screen的作用就是用来展示路由系统,作为所有组件显示的父级组件(或者容器组件),没有state要绑定,所以把这个组间设计为一个无状态组件就可以了, 也就是一个函数,返回值是一个路由系统


const ScreenUI = () =>{
    return (
        <Router history={browserHistory}>
            {/*header组件作为所有组件都需要使用的一个组件,使用分支路由的方式*/}
            <Route path="/" component={HeaderComponent}>
                <IndexRoute component={IndexComponent}/>
                {/*这里使用了动态路由,path="list(/:id)",可以从list页面中的props.param获取到id值*/}
                <Route path="list(/:id)" component={ListComponent} />
                <Route path="detail(/:id)" component={DetailsComponent} />

            </Route>
        </Router>
    )
}

export default ScreenUI;