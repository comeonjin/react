import React from "react";
import {Link} from "react-router";
import "./common.css";

export default (props) => {

    return (

            <div className="details_content">
                <div className="details_content_title">
                    <h1>{props.data.title}</h1>
                    <div className="details_info">
                        时间 : <span>{props.data.info.time}</span>来源 : <span><Link to={props.data.info.link}>VOA官网</Link> </span>收听下载次数 : <span>{props.data.info.downloadTimes}</span>
                    </div>
                </div>

                <div className="details_content_main">
                    <div dangerouslySetInnerHTML = {{__html:props.data.content}} />
                </div>

                <div className="related_links">
                    <h2>VOA内容相关链接：</h2>
                    <ul>
                        {props.data.relatedLinkList.map((value) => {
                                return (<li key={value.id}><Link to={value.link}>  {value.value} </Link></li>)
                            })}
                    </ul>
                </div>
            </div>


    )
}