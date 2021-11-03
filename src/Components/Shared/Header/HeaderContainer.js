import React from "react";
import * as axios from "axios";
import Header from "./Header";
import { connect } from 'react-redux';
import { setUserData, toggleIsFetching } from './../../../Redux/AuthReducer';

class HeaderAPI extends React.Component {
    componentDidMount() {
        this.props.toggleIsFetching(true);
        axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
            withCredentials: true
        }).then(response => {
            if (response.data.resultCode === 0) {
                let {id, email, login} = response.data.data;
                this.props.setUserData(id, email, login);
            }
            this.props.toggleIsFetching(false);
        });
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
    setUserData,
    toggleIsFetching
}

const HeaderContainer = connect(mapState, mapDispatch)(HeaderAPI);

export default HeaderContainer;