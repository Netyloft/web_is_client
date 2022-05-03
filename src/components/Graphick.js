import React from "react";
import {Bar, BarChart, CartesianGrid, Legend, Tooltip, XAxis, YAxis} from "recharts";

export function Graphick(props) {

    return (
        <BarChart
            width={1500}
            height={400}
            data={props.stat}
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