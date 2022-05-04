import React from 'react';
import {Link, useNavigate} from "react-router-dom";
import styled from "styled-components";


const Comment = (props) => {

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