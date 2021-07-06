import React from 'react';
import {axiosWithAuth} from '../axiosWithAuth';
import { Redirect } from 'react-router-dom';
import Friend from './Friend';
import AddFriend from './AddFriend'
class FriendsList extends React.Component {
    state = {
        friends: [],
        isLogged: true
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
    logout = () => {
        localStorage.clear();
        this.setState({
            isLogged: false
        })
        // this.props.history.push('/login')
    }
    render() {
        if(this.state.isLogged) {return(
        <div className="friend-list"> 
            <span onClick={this.logout} className="log-button">Log Out</span>
            <AddFriend/>
            {this.state.friends.map((item, index) => (
                <Friend key={index} item={item}/>
            ))}
            
        </div>
        )
        }
        else{
            return (
                <Redirect to='login' />
            )
        }
    }
}

export default FriendsList;