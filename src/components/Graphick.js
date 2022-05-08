import {Bar, BarChart, CartesianGrid, Legend, Tooltip, XAxis, YAxis} from "recharts";
import React, {useEffect, useState, useContext} from "react";
import {URL_API} from "../constans/constans";
import {UserContext} from "../context";
import axios from "axios";

export function Graphick() {
    const [data, setData ] = useState();
    const {user } = useContext(UserContext);

    useEffect(() => {
        ( async() =>{
            const response = await axios.get(URL_API + '/stat/grapf',
                {
                headers: {Authorization: `Bearer ${user.jwt}`}
            })
            setData(response.data.data.items)
        })()

    })

    return (
        <BarChart
            width={1500}
            height={400}
            data={data}
            margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 5
            }}
            barSize={20}
        >
            <XAxis dataKey="name" scale="point" padding={{left: 10, right: 10}}/>
            <YAxis/>
            <Tooltip/>
            <Legend/>
            <CartesianGrid strokeDasharray="3 3"/>
            <Bar dataKey="count" fill="#8884d8" background={{fill: "#eee"}}/>
        </BarChart>
    )
}