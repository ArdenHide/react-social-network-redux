import React from "react";
import './App.css';
import Footer from './Components/Shared/Footer/Footer';
import Aside from './Components/Shared/Aside/Aside';
import { Route } from 'react-router';
import ProfileContainer from './Components/Profile/ProfileContainer';
import DialogsContainer from './Components/Dialogs/DialogsContainer';
import FindUsersContainer from './Components/FindUsers/FindUsersContainer';
import HeaderContainer from "./Components/Shared/Header/HeaderContainer";
import Home from "./Components/Home/Home";
import LoginContainer from "./Components/Login/LoginContainer";
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { compose } from "redux";
import { initialize } from './Redux/AppReducer';
import Preloader from "./Components/Shared/Preloader/Preloader";

class App extends React.Component {
    componentDidMount() {
        this.props.initialize();
    }

    render() {
        if (!this.props.initialize) {
            return <Preloader/>   
        }
        return (
            <div className="wrapper">
                <HeaderContainer />
                <main className="row m-0">
                    <Aside />
                    <Route path='/Profile/:userId?' render={() => <ProfileContainer />} />
                    <Route path='/Dialogs' render={() => <DialogsContainer />} />
                    <Route path='/FindUsers' render={() => <FindUsersContainer />} />
                    <Route path='/Home' render={() => <Home />} />
                    <Route path='/Login' render={() => <LoginContainer />} />
                </main>
                <Footer />
            </div>
        )
    }
}

function mapState(state) {
    return {
        initialized: state.app.initialized
    };
}
let mapDispatch = {
    initialize
}
const AppContainer = compose(
    withRouter,
    connect(mapState, mapDispatch)
)(App);

export default AppContainer;