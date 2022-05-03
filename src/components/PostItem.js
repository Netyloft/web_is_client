import React from 'react';
import Dotdotdot from "react-dotdotdot";
import {Link, useHistory, useNavigate} from "react-router-dom";

export function PostItem(props) {
    const urlAuthor = `/user/${props.post.author.id}`;
    const urlPost = `/post/${props.post.id}`;

    return (
        <div className={"post"}>
            <div className={"post__content"}>
                <Dotdotdot clamp={3}>
                    <div className={"author-text"}>
                        <Link to={urlAuthor}>{props.post.author.nickName}</Link>
                    </div>
                    <div className={"title-text"}>
                        <Link to={urlPost}>{props.post.title}</Link>
                    </div>
                </Dotdotdot>
                <div className={"tags-text"}>
                    {props.post.tags}
                </div>
            </div>

        </div>
    );
};

// export default PostItem;