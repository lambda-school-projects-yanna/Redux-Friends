import React from 'react';
import {connect} from 'react-redux';
import {postAction} from '../actions'


class FriendForm extends React.Component {
    constructor() {
        super();
    };

    addFriend = () => {
        const name = prompt('New Friend Name');
        const age = prompt('New Friend Name');
        const email = prompt('New Friend Name');
        this.props.postAction({name, age, email});
    };

    render() {
        return (
            <div>
                <p>Add a New Friend by Pressing the Button Below</p>
                <button onClick={() => this.addFriend()}>Add New Friend</button>
            </div>
        );
    };
};

const mapStateToProps = state => {
    return {
      error: state.error,
    };
  };
  
  export default connect(mapStateToProps, { postAction })(FriendForm);
