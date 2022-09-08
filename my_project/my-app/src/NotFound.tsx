import React from "react";
import { NavLink } from "react-router-dom";

export default function NotFound() {
    return(
        <div>查無此頁。<NavLink to="/">回到主頁</NavLink></div>
    )
}