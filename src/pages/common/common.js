import React from "react";
import {Link} from "react-router";
import "./common.css";

export default (props) => {

        return (
            <div className="container">
                    <h1><Link to="/">{props.title}</Link></h1>
                <ul>
                    {
                        props.mainList.map((value) => {
                            return (
                                <li className="item" key={value.id}>
                                    <Link to={value.link}><span className="content_simple">{value.value}</span></Link>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        )
}