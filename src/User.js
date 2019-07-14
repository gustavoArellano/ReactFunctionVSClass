import React from 'react';

const User = (props) => {
    return (
        <div>
            <h3>Name: {props.user.name}</h3>
            <h4>Title: {props.user.title}</h4>
            <hr />
        </div>
    )
}


export default User