import React from 'react';
import s from './Users.module.css';

let Users = (props) => {
    debugger;
    if (props.users.length === 0) {
        props.setUsers([
                {
                    id: 1,
                    photoUrl: 'https://bodysize.org/wp-content/uploads/2018/06/Dmitry-Nagiev-300x400.jpg',
                    followed: false,
                    fullName: 'Dmitry',
                    status: 'i am a boss',
                    location: {city: 'Minsk', country: 'Belarus'}
                },
                {
                    id: 2,
                    photoUrl: 'https://bodysize.org/wp-content/uploads/2018/06/Dmitry-Nagiev-300x400.jpg',
                    followed: true,
                    fullName: 'Sasha',
                    status: 'i am a boss too',
                    location: {city: 'Moscow', country: 'Russia'}
                },
                {
                    id: 3,
                    photoUrl: 'https://bodysize.org/wp-content/uploads/2018/06/Dmitry-Nagiev-300x400.jpg',
                    followed: false,
                    fullName: 'Andrew',
                    status: 'i am number one',
                    location: {city: 'Kiev', country: 'Ukraine'}
                }
            ]
        );
    }

    return (
        <div>
            {
                props.users.map(u => <div key={u.id}>
                    <span>
                        <div>
                            <img src={u.photoUrl} className={s.userPhoto}/>
                        </div>
                        <div>
                            {u.followed
                                ? <button onClick={() => {
                                    props.toUnfollow(u.id)
                                }}>Unfollow</button>
                                : <button onClick={() => {
                                    props.toFollow(u.id)
                                }}>Follow</button>
                            }
                        </div>
                    </span>
                    <span>
                        <span>
                            <div>{u.fullName}</div>
                            <div>{u.status}</div>
                        </span>
                        <span>
                            <div>{u.location.country}</div>
                            <div>{u.location.city}</div>
                        </span>
                    </span>
                </div>)
            }
        </div>
    );
}

export default Users;