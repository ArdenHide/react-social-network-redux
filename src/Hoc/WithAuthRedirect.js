import React from "react";
import { Redirect } from "react-router";
import { connect } from 'react-redux';

let mapState = (state) => {
    return {
        isAuth: state.auth.isAuth
    };
}
export function WithAuthRedirect(Component) {
    class RedirectComponent extends React.Component {
        render() {
            if (!this.props.isAuth) return <Redirect to={"/Login"} />
            return <Component {...this.props} />
        };
    }
    const ConnectedRedirectComponent = connect(mapState)(RedirectComponent);
    return ConnectedRedirectComponent;
}