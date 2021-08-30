import React from 'react';
import UserItem from './user-item';
import Spinner from '../layout/spinner';
import PropTypes from 'prop-types';



const Users = ({users, loading}) => {
    if(loading) {
        return <Spinner/>
    } else {
        return (
            <div style={userStyle}>
                {users.map(user => (
                    //pass user as props
                    <UserItem key={user.id} user={user}></UserItem>
                ))}
               
            </div>
        )
    }
    
}

Users.PropTypes = {
    users: PropTypes.array.isRequired,
    loading: PropTypes.bool.isRequired
}


const userStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)', 
    gridGap: '1rem'
};

export default Users;
