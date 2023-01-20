import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getUsers } from '../../redux/slices/userActions';


export const Users = () => {
    const dispatch = useDispatch();
    const users = useSelector(state => state.user)
    useEffect(() => {
        dispatch(getUsers())
    }, []);
    if (users.loading) {
        return <p>Loading...</p>
    }
    return (
        <div>
            <h2>Hello, {users.userInfo.name && users.userInfo.name}</h2>
            <div>{users.users.length > 0 && users.users.map((item) => <p key={item.id}>{item.name}</p>)}</div>
        </div>
    )
}
