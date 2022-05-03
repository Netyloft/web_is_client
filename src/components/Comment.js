import React from 'react';
import Dotdotdot from "react-dotdotdot";
import {Link, useNavigate} from "react-router-dom";
import styled from "styled-components";

const Styles = styled.div `
    a, .navbar-brand, .navbar-nav, .nav-link{
    color: #adb1b8;
      text-decoration: none;
    &:hover {
        color: white
    }
}
`

const Comment = (props) => {
    //console.log(props)
    const navigate = useNavigate();

    const url = `/user/${props.comment.author.id}`;

    return (
        <div className={"post"}>
             <div>
                 <div className={"author-text"}>
                     <Link to={url}>{props.comment.author.nickName}</Link>
                 </div>
                 <div>
                     {props.comment.text}
                 </div>
             </div>
       </div>
    );
};

export default Comment;