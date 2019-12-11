import React from 'react';

const Friend = (props) => {

    return (
        <div className="friend">
            <p>id: {props.item.id}</p>
            <p>name: {props.item.name}</p>
            <p>age: {props.item.age}</p>
            <p>email: {props.item.email}</p>
        </div>
    )
}

export default Friend;