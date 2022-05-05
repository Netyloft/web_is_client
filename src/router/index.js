import {Home} from "../pages/Home/Home";
import {Admin} from "../pages/Admin/Admin";
import {NewPost} from "../pages/NewPost/NewPost";
import {Post} from "../pages/Post/Post";
import {UserProfile} from "../pages/UserProfile/UserProfile";
import {LogIn} from "../pages/Login/LogIn";
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
