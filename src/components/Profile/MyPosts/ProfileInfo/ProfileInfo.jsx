import s from './ProfileInfo.module.css';
import Preloader from '../../../common/Preloader/Preloader';
import React from 'react';
import userPhoto from "../../../../assets/images/user-logo.png";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";

const ProfileInfo = ({profile, status, updateStatus, isOwner, savePhoto}) => {
    if (!profile) {
        return <Preloader/>;
    }

    const onMainPhotoSelected = (e) => {
        if (e.target.files.length) {
            savePhoto(e.target.files[0]);
        }
    }

    return (
        <div>
            <div className={s.descriptionBlock}>
                <img className={s.userPhoto}
                     src={profile.photos.large || userPhoto} alt=''/>
                {isOwner && <input type={"file"} onChange={onMainPhotoSelected}/>}
                <ProfileStatusWithHooks status={status} updateStatus={updateStatus}/>
            </div>
        </div>
    );
}
export default ProfileInfo;