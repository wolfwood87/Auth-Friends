import React from 'react';
import {axiosWithAuth} from '../axiosWithAuth';
import Friend from './Friend';
import AddFriend from './AddFriend'
class FriendsList extends React.Component {
    state = {
        friends: []
    };

    componentDidMount() {
        this.getData();
    }

    componentDidUpdate() {
        this.getData();
    }

    getData = () => {
        axiosWithAuth()
            .get('/friends')
            .then(res => {
                console.log(res)
                this.setState({
                    friends: res.data
                })
            })
            .catch(err=> console.log(err))
    };

    render() {
        return(
        <> 
            <AddFriend/>
            {this.state.friends.map((item, index) => (
                <Friend key={index} item={item}/>
            ))}
            
        </>
        )
    }
}

export default FriendsList;