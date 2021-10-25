import React from "react";

function Message(props) {
    return (
        <p className="fs-6 bg-light py-2 px-3 mx-3 my-2 rounded">{props.message}</p>
    );
}

export default Message;