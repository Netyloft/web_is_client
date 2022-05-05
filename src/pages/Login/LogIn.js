import React, {useContext, useState} from "react";
import {Button, Container} from "react-bootstrap";
import axios from "axios";
import {URL, URL_API} from "../../constans/constans";
import {UserContext} from "../../context";
import {useNavigate} from "react-router-dom";

export function LogIn() {

    const {user, setUser} = useContext(UserContext);

    const navigate = useNavigate();

    async function GetJWT() {
        const responsePost = await axios.post(URL + '/authenticate', {
            name: "4444",
            password: "4444"
        })

        await GetUser(responsePost.data)
    }

    async function GetUser(JWT){
        const responseGet = await axios.get(URL_API + `/user/jwt/${JWT}`)
        const id = responseGet.data.data.id
        const role = responseGet.data.data.role
        setUser({id:id, role:role})

        //navigate('/')
    }

    return(
        <>
        </>
    )
}