import React from "react";
import Common from "../common/common";
import axios from "axios";

export default class List extends React.Component{

    constructor(props){
        super(props);

        this.state = {
            headerList : [],
        }
    }

    render(){
        console.log("render");
        return(
            <Common mainList={this.state.headerList} title={"list"+this.props.params.id} />
        )
    }

    componentDidUpdate() {
        console.log("will updata");
    }

    componentWillMount(){
        console.log("will mount");

        axios.get("http://www.abc.com:3000/list?page="+this.props.params.id).then((res) => {

            this.setState((preState) => ({
                headerList : res.data.data.list
            }));
        })
    }






}

