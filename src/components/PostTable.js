import React from "react";
import axios from "axios";
import {URL_API} from "../constans/constans";

const headPost = [
    {name: "Id"}, {name: "Заголовок"}, {name: "Автор"}, {name: "Тэги"}
]

export function PostTable(props) {
    return (
        <table className="table table-bordered">
            <thead>
            <tr>
                {headPost.map(h => <th scope="col">{h.name}</th>)}
            </tr>
            </thead>
            <tbody>
            {props.post.map(post =>
                <tr>
                    <th scope="row">{post.id}</th>
                    <td>{post.title}</td>
                    <td>{post.author.nickName}</td>
                    <td>{post.tags}</td>
                </tr>
            )}
            </tbody>
        </table>
    )
}