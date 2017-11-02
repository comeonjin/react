import React from "react";
import DetailComponent from "../common/details/common";
import axios from "axios";
export default class Details extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            data : {
                title : "",
                info : {
                    time : "",
                    link : "",
                    downloadTimes : ""
                },
                content : "",
                relatedLinkList : []
            }
        }
    }

    render(){
        return (
            <div className="details_container">
                    <DetailComponent data={this.state.data} />
                    <div className="advertisRight" ref={(dom) => {
                        this.refDom = dom;
                    }}>
                        <img src={require("../../imgs/advertisRight.gif")} alt=""/>
                    </div>
            </div>
        )
    }

    componentWillMount() {
        axios.get("http://www.abc.com:3000/details1").then((res) => {
            this.setState({
                data: res.data.data
            });
        })
    }

    componentDidMount(){

        window.onscroll = () => {
            let scrolltop=document.documentElement.scrollTop||document.body.scrollTop;
            if(scrolltop >= 180){
                this.refDom.style.top = scrolltop-180+"px";
            }
        }
    }

    componentWillUnmount() {
        window.onscroll = null;
    }



}