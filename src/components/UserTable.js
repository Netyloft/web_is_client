import React from "react";
import axios from "axios";
import {URL_API} from "../constans/constans";

const headUser = [
    {name: "id"}, {name: "Пользователь"}, {name: "Email"}, {name: "Роль"}
]

export function UserTable(props) {

    return (
        <table className="table table-bordered">
            <thead>
            <tr>
                {headUser.map(h => <th scope="col">{h.name}</th>)}
            </tr>
            </thead>
            <tbody>
            {props.user.map(user =>
                <tr>
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