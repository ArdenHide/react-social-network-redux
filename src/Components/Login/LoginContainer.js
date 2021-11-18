import { connect } from "react-redux";
import { login } from "../../Redux/AuthReducer";
import Login from "./Login";

function mapState(state) {
    return {
        isAuth: state.auth.isAuth
    };
}
function mapDispatch(dispatch) {
    return {
        login: (email, password, rememberMe) => {
            dispatch(login(email, password, rememberMe));
        }
    };
}
const LoginContainer = connect(mapState, mapDispatch)(Login);

export default LoginContainer;