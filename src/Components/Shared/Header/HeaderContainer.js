import React from "react";
import Header from "./Header";
import { connect } from 'react-redux';
import { getUserData } from './../../../Redux/AuthReducer';

class HeaderAPI extends React.Component {
    componentDidMount() {
        this.props.getUserData();
    }

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
    getUserData
}

const HeaderContainer = connect(mapState, mapDispatch)(HeaderAPI);

export default HeaderContainer;