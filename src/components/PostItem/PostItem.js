import React from 'react';
import {Link} from "react-router-dom";
import style from './PostItem.module.scss';

export function PostItem({post}) {
    const urlPost = `/post/${post.id}`;

    return (
            <div className={style.Post}>
                <Link className={style.Link} key={urlPost} to={urlPost}>
                    <div className={style.PostContent}>
                            <div className={style.AuthorText}>
                                {post.author.nickName}
                            </div>
                            <div className={style.TitleText}>
                                {post.title}
                            </div>
                        <div className={style.TagsText}>
                            {post.tags}
                        </div>
                    </div>
                </Link>
            </div>
    );
};

// export default PostItem;