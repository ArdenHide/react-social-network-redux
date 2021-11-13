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
import Login from './Components/Login/Login';

function App(props) {

    return (
        <div className="wrapper">
            <HeaderContainer />
            <main className="row m-0">
                <Aside />
                <Route path='/Profile/:userId?' render={() => <ProfileContainer />} />
                <Route path='/Dialogs' render={() => <DialogsContainer />} />
                <Route path='/FindUsers' render={() => <FindUsersContainer />} />
                <Route path='/Home' render={() => <Home />} />
                <Route path='/Login' render={() => <Login />} />
            </main>
            <Footer />
        </div>
    );
}

export default App;