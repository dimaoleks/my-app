import React from 'react';
import s from './Dialogs.module.css';
import {sendMessageCreator, updateNewMessageBodyCreator} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import StoreContext from "../../StoreContext";


const DialogsContainer = (props) => {

    return <StoreContext.Consumer>
        {
        (store) => {
            let state = store.getState().dialogsPage;

            let onSendMessageClick = () => {
                store.dispatch(sendMessageCreator());
            }

            let onNewMessageChanged = (body) => {
                store.dispatch(updateNewMessageBodyCreator(body));
            }
            return <Dialogs updateNewMessageBody={onNewMessageChanged} sendMessage={onSendMessageClick}
                     dialogsPage={state}/>
        }
    }
    </StoreContext.Consumer>
}

export default DialogsContainer;