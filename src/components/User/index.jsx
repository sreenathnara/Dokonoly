import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getUsersById } from '../../redux/slices/userActions';

export const User = () => {
    const dispatch = useDispatch();
    const { userById } = useSelector(state => state.user);
    useEffect(() => {
        dispatch(getUsersById());
    }, [])
    return (
        <div>{userById.name}</div>
    )
}
