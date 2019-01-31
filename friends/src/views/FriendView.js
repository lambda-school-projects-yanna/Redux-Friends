import React from "react";
import { connect } from "react-redux";
import  FriendsList from "../components/FriendsList";
import FriendForm from '../components/FriendForm'
import { getAction, postAction } from '../actions'

class FriendView extends React.Component {
  constructor() {
    super();
  };

  componentDidMount() {
    getAction()
  };
  
  render() {
    if (this.props.gettingFriends) {
      console.log('Hello from FriendView... getting your friends data');
    };
    
    return (
      <div className="FriendsList_wrapper">
        <FriendsList friends={this.props.friends} />
        <FriendForm postAction={postAction} />
      </div>
    );
  };
};

const mapStateToProps = state => {
  return {
    friends: state.friendsReducer.friends,
    error: state.friendsReducer.error,
    gettingFriends: state.friendsReducer.gettingFriends
  };
};

export default connect(
  mapStateToProps, getAction

)(FriendView);