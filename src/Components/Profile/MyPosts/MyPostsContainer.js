import { connect } from "react-redux";
import { addPost } from "../../../Redux/ProfileReducer";
import MyPosts from "./MyPosts";

function mapState(state) {
    return {
        postsData: state.profilePage.postsData
    };
}
function mapDispatch(dispatch) {
    return {
        addPost: (title, text) => {
            dispatch(addPost(title, text));
        }
    };
}
const MyPostsContainer = connect(mapState, mapDispatch)(MyPosts);

export default MyPostsContainer;