import {Home} from "../pages/Home/Home";
import {Admin} from "../pages/Admin/Admin";
import {NewPost} from "../pages/NewPost/NewPost";
import {Post} from "../pages/Post/Post";
import {UserProfile} from "../pages/UserProfile/UserProfile";
import {LogIn} from "../pages/Login/LogIn";
import React from "react";

export const privateRoutes = [
        {path: '/new-post', element: <NewPost/>}
]

export const publicRoutes = [
        {path: '/', element: <Home/>},
        {path: '/post/:id', element: <Post/>},
        {path: '/user/:id', element: <UserProfile/>},
]

export const adminRoutes = [
        {path: '/admin', element: <Admin/>},
]

export const adminNavi = [
    {to: "/admin", text: "Администраторская"}
]

export const privatNavi = [
        {to: "/new-post", text: "Новая статья"}
]

export const publicNavi = [
        {to: "/", text: "Главная"}
]

export const buttonAuth = [
        {to: "/", text: "Главная"}
]
