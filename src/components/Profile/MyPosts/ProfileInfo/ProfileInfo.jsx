import s from './ProfileInfo.module.css';
import Preloader from '../../../common/Preloader/Preloader';
import React from 'react';
import userPhoto from "../../../../assets/images/user-logo.png";


const ProfileInfo = (props) => {
    if (!props.profile) {
        return <Preloader/>;
    }
    return (
        <div>
            <div>
                <img
                    src='https://images.ctfassets.net/hrltx12pl8hq/7yQR5uJhwEkRfjwMFJ7bUK/dc52a0913e8ff8b5c276177890eb0129/offset_comp_772626-opt.jpg?fit=fill&w=800&h=300'
                    alt=''/>
            </div>
            <div className={s.descriptionBlock}>
                <img className={s.userPhoto} src={props.profile.photos.large != null ? props.profile.photos.large : userPhoto} alt=''/>
                description
            </div>
        </div>
    );
}
export default ProfileInfo;