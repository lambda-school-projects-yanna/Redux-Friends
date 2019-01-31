import React from "react";
import { connect } from "react-redux";
import  FriendsList from "../components/FriendsList";
import { getAction } from '../actions'

class FriendView extends React.Component {
  constructor() {
    super();
  };

  componentDidMount() {
    // call our action
    getAction()
  };

  render() {
    if (this.props.gettingFriends) {
      // return something here to indicate that you are fetching data, like loading logo
      console.log('Hello from FriendView... getting your friends data');
    };
    
    return (
      <div className="FriendsList_wrapper">
        <FriendsList friends={this.props.friends} />
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