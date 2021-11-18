import React from "react";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import ProfileInfoHook from "./ProfileInfo/ProfileInfoHook";

function Profile(props) {
    return (
        <div className="col-12 col-md-9 col-lg-10 p-0">
            <ProfileInfoHook
                profile={props.profile}
                status={props.status}
                updateStatus={props.updateStatus} />
            <MyPostsContainer />
        </div>
    );
}

export default Profile;