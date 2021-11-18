import React from "react";
import Header from "./Header";
import { connect } from 'react-redux';
import { logout } from './../../../Redux/AuthReducer';

class HeaderAPI extends React.Component {
    render() {
        return (
            <Header {...this.props} />
        )
    }
}

function mapState(state) {
    return {
        isFetching: state.auth.isFetching,
        isAuth: state.auth.isAuth,
        login: state.auth.login
    };
}
let mapDispatch = {
    logout
}

const HeaderContainer = connect(mapState, mapDispatch)(HeaderAPI);

export default HeaderContainer;