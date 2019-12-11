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

    ccomponentWillUnmount() {
        this.setState({
            friends: []
        })
    }

    getData = () => {
        axiosWithAuth()
            .get('/friends')
            .then(res => {
                this.setState({
                    friends: res.data
                })
            })
            .catch(err=> console.log(err))
    };

    render() {
        return(
        <div className="friend-list"> 
            <AddFriend/>
            {this.state.friends.map((item, index) => (
                <Friend key={index} item={item}/>
            ))}
            
        </div>
        )
    }
}

export default FriendsList;