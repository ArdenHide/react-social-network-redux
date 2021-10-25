import React from "react";

function Post(props) {
    return (
        <div className="col-12 col-lg-6">
            <div className="card bg-dark text-white mb-4 shadow-lg">
                <div className="card-body">
                    <h5 className="card-title">{props.title}</h5>
                    <p className="card-text">{props.text}</p>
                </div>
                <div className="card-footer">
                    <span className="text-small">Like count {props.likeCount}</span>
                </div>
            </div>
        </div>
    );
}

export default Post;