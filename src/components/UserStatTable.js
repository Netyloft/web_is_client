import React, {useLayoutEffect, useState, useContext} from "react";
import {URL_API} from "../constans/constans";
import {UserContext} from "../context";
import axios from "axios";

const headUser = [
    {name: "id"}, {name: "Пользователь"}, {name: "Кол-во статей"}, {name: "Кол-во комментариев"}
]

export function UserStatTable(props) {

    const [users, setUsers] = useState([])
    const {user } = useContext(UserContext);


    useLayoutEffect(() => {
        (async () => {
            const response = await axios.get(URL_API + '/stat/users',
            {
                headers: {Authorization: `Bearer ${user.jwt}`}
            }) 
            setUsers(response.data.data.items)
        })()

    }, []);

    return (
        <table className="table table-bordered">
            <thead>
            <tr>
                {headUser.map(h => <th key={h.name} scope="col">{h.name}</th>)}
            </tr>
            </thead>
            <tbody>
            {users.map(user =>
                <tr key={user.id}>
                    <th scope="row">{user.id}</th>
                    <td>{user.nickName}</td>
                    <td>{user.articleCount}</td>
                    <td>{user.commentCount}</td>
                </tr>
            )}
            </tbody>
        </table>
    )
}