import {Container} from "react-bootstrap";
import React, {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import axios from "axios";

export const UserInfo = (props) => {

    console.log(props)

    return (

        <div className={"post"}>
            <div className={"main_nick"}>
                {props.user.nickName}
            </div>
        </div>

    )
}