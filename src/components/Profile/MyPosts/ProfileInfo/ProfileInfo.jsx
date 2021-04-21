import s from './ProfileInfo.module.css';
import Preloader from '../../../common/Preloader/Preloader';
import React from 'react';
import userPhoto from "../../../../assets/images/user-logo.png";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";

const ProfileInfo = ({profile, status, updateStatus}) => {
    if (!profile) {
        return <Preloader/>;
    }
    return (
        <div>
            <div className={s.descriptionBlock}>
                <img className={s.userPhoto}
                     src={profile.photos.large != null ? profile.photos.large : userPhoto} alt=''/>
                <ProfileStatusWithHooks status={status} updateStatus={updateStatus}/>
            </div>
        </div>
    );
}
export default ProfileInfo;