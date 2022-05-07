import React from "react";
import { Link} from 'react-router-dom'

export function PostForm(props) {
    return (
        <div>
            <div>
                Автор:<Link to={`/user/${props.author.id}`}>{props.author.nickName}</Link>
            </div>
            <div className="input-group mb-3 mt-3">
                <h2>
                    {props.post.title}
                </h2>
            </div>
            <h4>Содержание</h4>
            <div className="input-group mb-3">
                <div >
                    {props.post.body}
                </div>
            </div>
            <h4>Теги</h4>
            <div className="input-group mb-3">
                <div>
                    {props.post.tags}
                </div>
            </div>
        </div>
    )
}