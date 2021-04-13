import s from "./AddMessageForm.module.css";
import {Field, reduxForm} from "redux-form";
import React from "react";
import {TextArea} from "../../common/FormsControls/FormsControls";
import {maxLengthCreator, required} from "../../../utils/validators/validators";

const maxLength150 = maxLengthCreator(150);

const AddMessageForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit} className={s.inputMessage}>
            <div>
                <Field component={TextArea} name="newMessageBody"
                       validate={[required, maxLength150]}
                       placeholder="Enter your message"/>
            </div>
            <div className={s.buttonSetting}>
                <button>Send message</button>
            </div>
        </form>
    );
}

export default reduxForm({form: "dialogAddMessageForm"})(AddMessageForm);