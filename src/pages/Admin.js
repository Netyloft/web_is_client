import React, {useContext, useEffect, useState} from "react";
import {Button, Container, Table} from "react-bootstrap";
import axios from "axios";
import {BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer} from 'recharts';
import {URL, URL_API} from "../constans/constans";
import {UserContext} from "../context";
import {Home} from "./Home";
import {UserTable} from "../components/UserTable";
import {PostTable} from "../components/PostTable";
import {UserStatTable} from "../components/UserStatTable";
import {Graphick} from "../components/Graphick";

const headUserStat = [
    {name: "Id"}, {name: "Пользователь"}, {name: "Кол-во статей"}, {name: "Кол-во комментариев"}
]

const initNav = {statVis: false, userStatVis:false,usersVis:false, postsVis:false };

export function Admin() {
    const [statNav , setStatNav] = useState(initNav);

    async function getFile() {
        window.open(URL_API + '/file/')
    }

    function getUsersStat() {
        setStatNav({...initNav, usersStatVis: true})
    }

    function getPosts() {
        setStatNav({...initNav, postsVis: true})
    }

    function getStat() {
        setStatNav({...initNav, statVis: true})
    }

    function getUsers() {
        setStatNav({...initNav, statVis: true})
    }    

    return (
        <>
            <Container>
                <Button className="btn btn-primary mt-3 mb-3 me-2" 
                        onClick={getFile}>
                            Скачать файл
                        </Button>
                <Button className="btn btn-primary mt-3 mb-3 me-2" 
                        onClick={getStat}>
                            График
                        </Button>
                <Button className="btn btn-primary mt-3 mb-3 me-2" 
                        onClick={getUsers}>
                        Пользователи
                        </Button>
                <Button className="btn btn-primary mt-3 mb-3 me-2" 
                        onClick={getPosts}>
                        Статьи
                        </Button>
                <Button className="btn btn-primary mt-3 mb-3 me-2" 
                        onClick={getUsersStat}>
                        Статистика пользователей
                        </Button>

                {statNav.usersVis && <UserTable /> } 
                {statNav.postsVis && <PostTable/>} 
                {statNav.userStatVis && <UserStatTable />}  
                {statNav.statVis && <Graphick /> }

            </Container>

        </>)
}