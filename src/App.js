import React from "react";
import './App.css';
import Header from './Components/Shared/Header/Header';
import Footer from './Components/Shared/Footer/Footer';
import Aside from './Components/Shared/Aside/Aside';
import { Route } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import Profile from './Components/Profile/Profile';
import DialogsContainer from './Components/Dialogs/DialogsContainer';

function App(props) {

    return (
        <div className="wrapper">
            <BrowserRouter>
                <Header />
                <main className="row m-0">
                    <Aside />
                    <Route path='/Profile' render={ () => <Profile store={props.store} />} />
                    <Route path='/Dialogs' render={ () => <DialogsContainer store={props.store} />} />
                </main>
                <Footer />
            </BrowserRouter>
        </div>
    );
}

export default App;