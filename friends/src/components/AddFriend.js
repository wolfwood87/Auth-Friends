import React, {useState} from 'react'
import {axiosWithAuth} from '../axiosWithAuth';


const AddFriend = () => {
    const [newFriend, setNewFriend] = useState ({id: 0, name: '', age: 0, email: ''})

    const handleChange = e => {
        setNewFriend({
            ...newFriend,
            [e.target.name]: e.target.value
        })
    }

    const addFriend = e => {
        e.preventDefault();
        axiosWithAuth()
            .post('/friends', newFriend)
            .then(res=> {
                console.log(res)
            })
            .catch(err => console.log(err.message))
    }
    return (
        <form onSubmit={addFriend}>
                <ul>
                    <li>
                        <span>Id: </span>
                        <input
                        type='number'
                        name="id"
                        value={newFriend.id}
                        onChange={handleChange}
                    />
                    </li>
                    <li>
                        <span>Name: </span>
                        <input
                        type='text'
                        name="name"
                        value={newFriend.name}
                        onChange={handleChange}
                    />
                    </li>
                    <li>
                        <span>Age: </span>
                        <input
                        type='number'
                        name="age"
                        value={newFriend.age}
                        onChange={handleChange}
                    />
                    </li>
                    <li>
                        <span>Email: </span>
                        <input
                        type='email'
                        name="email"
                        value={newFriend.email}
                        onChange={handleChange}
                    />
                    </li>
                </ul>
                <button>Add Friend</button>
            </form>
    )
}

export default AddFriend;