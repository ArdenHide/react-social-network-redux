import React from "react";
import { NavLink } from "react-router-dom";

function DialogItem(props) {
    return (
        <NavLink to={"/Dialogs/" + props.id} className="nav-link py-2 my-1">{props.userName}</NavLink>
    );
}

export default DialogItem;