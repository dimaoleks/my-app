import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import { /*BrowserRouter,*/ Route} from 'react-router-dom';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import UsersContainer from './components/Users/UsersContainer';
import ProfileContainer from './components/Profile/ProfileContainer';


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
                <Route path='/profile'
                       render={() => <ProfileContainer/>}/>
                <Route exact path='/users'
                       render={() => <UsersContainer/>}/>
            </div>
        </div>
    );
}


export default App;
