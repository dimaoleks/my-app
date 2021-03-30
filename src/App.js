import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import { /*BrowserRouter,*/ Route} from 'react-router-dom';
import DialogsContainer from "./components/Dialogs/DialogsContainer";


const App = (props) => {
    return (
        <div className='app-wrapper'>
            <Header/>
            <Navbar/>
            <div className='app-wrapper-content'>
                {/* <Route exact path='/dialogs' component={Dialogs} />
          <Route exact path='/profile' component={Profile} /> */}

                <Route exact path='/dialogs'
                       render={() => <DialogsContainer/>}/>
                <Route exact path='/profile'
                       render={() => <Profile/>}/>
            </div>
        </div>
    );
}


export default App;
