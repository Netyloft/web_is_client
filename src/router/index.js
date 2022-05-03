import {Home} from "../pages/Home";
import {Admin} from "../pages/Admin";
import {NewPost} from "../pages/NewPost";
import {Post} from "../pages/Post";
import {UserProfile} from "../pages/UserProfile";
import {LogIn} from "../pages/LogIn";
import React from "react";

export const privateRoutes = [
        {path: '/', component: <Home/>},
        {path: '/new-post', component: <NewPost/>},
        {path: '/post/:id', component: <Post/>},
        {path: '/user/:id', component: <UserProfile/>},
]

export const publicRoutes = [
        {path: '/', component: <Home/>},
        {path: '/login', component: <LogIn/>},
        {path: '/post/:id', component: <Post/>},
        {path: '/user/:id', component: <UserProfile/>},
]

export const adminRoutes = [
        {path: '/', component: <Home/>},
        {path: '/admin', component: <Admin/>},
        {path: '/login', component: <LogIn/>},
        {path: '/new-post', component: <NewPost/>},
        {path: '/post/:id', component: <Post/>},
        {path: '/user/:id', component: <UserProfile/>},
]

export const adminNavi = [
    {to: "/", text: "Главная"},
    {to: "/new-post", text: "Новая статья"},
    {to: "/admin", text: "Администраторская"}
]

export const privatNavi = [
        {to: "/", text: "Главная"},
        {to: "/new-post", text: "Новая статья"}
]

export const publicNavi = [
        {to: "/", text: "Главная"}
]

export const buttonAuth = [
        {to: "/", text: "Главная"}
]
