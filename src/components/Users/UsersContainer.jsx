import React from 'react';
import {connect} from "react-redux";
import Users from "./Users";
import {followAC, setUsersAC, unfollowAC} from "../../redux/users-reducer";

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users
    };
}
let mapDispatchToProps = (dispatch) => {
    return {
        toFollow: (userId) => {
            dispatch(followAC(userId));
        },
        toUnfollow: (userId) => {
            dispatch(unfollowAC(userId));
        },
        setUsers: (users) => {
            dispatch(setUsersAC(users));
        }
    };
}
export default connect(mapStateToProps, mapDispatchToProps)(Users);