import React, {useLayoutEffect, useState, useContext} from "react";
import {URL_API} from "../constans/constans";
import {UserContext} from "../context";
import axios from "axios";

const headUser = [
    {name: "id"}, {name: "Пользователь"}, {name: "Email"}, {name: "Роль"}
]

export function UserTable(props) {

    const [users, setUsers] = useState([])
    const {user } = useContext(UserContext);


    useLayoutEffect(() => {
        (async () => {
            const response = await axios.get(URL_API + '/user/',
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
                    <td>{user.email}</td>
                    <td>{user.role}</td>
                </tr>
            )}
            </tbody>
        </table>
    )
}