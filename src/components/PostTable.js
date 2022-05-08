import React, {useLayoutEffect, useState, useContext} from "react";
import {URL_API} from "../constans/constans";
import {UserContext} from "../context";
import axios from "axios";

const headPost = [
    {name: "Id"}, {name: "Заголовок"}, {name: "Автор"}, {name: "Тэги"}
]


export function PostTable(props) {
    const [posts, setPosts] = useState([])
    const {user } = useContext(UserContext);


    useLayoutEffect(() => {
        (async () => {
            const response = await axios.get(URL_API + '/article/',
            {
                headers: {Authorization: `Bearer ${user.jwt}`}
            })
            setPosts(response.data.data.items)
        })()

    }, []);
    

    return (
        <table className="table table-bordered">
            <thead>
            <tr>
                {headPost.map(h => <th key={h.name} scope="col">{h.name}</th>)}
            </tr>
            </thead>
            <tbody>
                {posts.map(post =>
                    <tr key={post.id}>
                        <th scope="row">{post.id}</th>
                        <td>{post.title}</td>
                        <td>{post.author.nickName}</td>
                        <td>{post.tags}</td>
                    </tr>)}
            </tbody>
        </table>
    )
}