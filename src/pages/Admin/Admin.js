import React, {useContext, useEffect, useState} from "react";
import {Button, Container, Table} from "react-bootstrap";
import axios from "axios";
import {BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer} from 'recharts';
import {URL, URL_API} from "../../constans/constans";
import {UserContext} from "../../context";
import {Home} from "../Home/Home";
import {UserTable} from "../../components/UserTable";
import {PostTable} from "../../components/PostTable";
import {UserStatTable} from "../../components/UserStatTable";
import {Graphick} from "../../components/Graphick";
import AppStyle from '../../App.module.scss';
import cn from 'classnames';

const headUserStat = [
    {name: "Id"}, {name: "Пользователь"}, {name: "Кол-во статей"}, {name: "Кол-во комментариев"}
]

export function Admin() {

    const {user, setUser} = useContext(UserContext);

    const [stat, setStat] = useState([]);
    const [statVis, setStatVis] = useState(false);

    const [userStat, setUserStat] = useState([]);
    const [userStatVis, setUserStatVis] = useState(false);

    const [users, setUsers] = useState([]);
    const [usersVis, setUsersVis] = useState(false);

    const [posts, setPosts] = useState([]);
    const [postsVis, setPostsVis] = useState(false);

    // useEffect(() => {
    //     getStat()
    // }, [])

    async function getFile() {
        window.open(URL_API + '/file/')
    }

    async function getUsers() {
        const response = await axios.get(URL_API + '/article/',
            {
                headers: {Authorization: `Bearer ${user.jwt}`}
            })

        setUsersVis(true)
        setPostsVis(false)
        setUserStatVis(false)
        setStatVis(false)
        setPosts(response.data.data.items)
    }

    async function getUsersStat() {
        const response = await axios.get(URL_API + '/stat/users',
            {
                headers: {Authorization: `Bearer ${user.jwt}`}
            })

        setUsersVis(false)
        setPostsVis(false)
        setStatVis(false)
        setUserStatVis(true)
        setUserStat(response.data.data.items)
    }

    async function getPosts() {
        const response = await axios.get(URL_API + '/user/',
            {
                headers: {Authorization: `Bearer ${user.jwt}`}
            })

        setUserStatVis(false)
        setUsersVis(false)
        setStatVis(false)
        setPostsVis(true)
        setUsers(response.data.data.items)
    }

    async function getStat() {
        const response = await axios.get(URL_API + '/stat/grapf',
            {
            headers: {Authorization: `Bearer ${user.jwt}`}
        })
        setStat(response.data.data.items)

        setUsersVis(false)
        setPostsVis(false)
        setStatVis(true)
        setUserStatVis(false)
    }

    return (
            <Container className={AppStyle.Body}>
                <Button className="btn btn-primary mt-3 mb-3 me-2" onClick={getFile}>Скачать файл</Button>
                <Button className="btn btn-primary mt-3 mb-3 me-2" onClick={getStat}>График</Button>
                <Button className="btn btn-primary mt-3 mb-3 me-2" onClick={getUsers}>Пользователи</Button>
                <Button className="btn btn-primary mt-3 mb-3 me-2" onClick={getPosts}>Статьи</Button>
                <Button className="btn btn-primary mt-3 mb-3 me-2" onClick={getUsersStat}>Статистика пользователей</Button>

                {usersVis ? <UserTable user={users}/> : postsVis ? <PostTable post={posts}/> : userStatVis ? <UserStatTable user={userStat}/> : statVis ? <Graphick stat={stat}/> : <></>}

            </Container>
)
}