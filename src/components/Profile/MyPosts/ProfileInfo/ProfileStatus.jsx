//import s from "./ProfileInfo.module.css";
import React from "react";

class ProfileStatus extends React.Component {
    state = {
        editMode: false
    };

    activateEditMode = () => {
        //setState is asynchronously
        this.setState({
            editMode: true
        });
    }

    deactivateEditMode = () => {
        //setState is asynchronously
        this.setState({
            editMode: false
        });
    }

    render() {
        return (
            <div>
                {
                    !this.state.editMode &&
                    <div>
                        <span onDoubleClick={() => {
                            this.activateEditMode();
                        }}>{this.props.status}</span>
                    </div>
                }
                {
                    this.state.editMode &&
                    <div>
                        <input autoFocus={true} onBlur={() => {
                            this.deactivateEditMode();
                        }} value={this.props.status}/>
                    </div>
                }
            </div>
        );
    }

}

export default ProfileStatus;