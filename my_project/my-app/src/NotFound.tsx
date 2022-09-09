import React from "react";
import { NavLink } from "react-router-dom";
import Headbar from './Headbar'

export default function NotFound() {
    return(
        <><Headbar /><div>查無此頁。<NavLink to="/">回到主頁</NavLink></div></>
    )
}