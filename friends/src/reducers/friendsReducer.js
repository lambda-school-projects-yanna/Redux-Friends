import {GETTING, GET_SUCCESS, GET_FAILURE} from '../actions';

const initialState = {
    gettingFriends: false,
    friendsGot: false,
    friendsSaved: false,
    savingFriends: false,
    updatingFriend: false,
    friendUpdated: false,
    deletingFriend: false,
    friendDeleted: false,
    friends: [],
    error: null
};

export const friendsReducer = (state = initialState, action) => {
    switch (action.type) {
        case(GETTING): {
          console.log('success');
          return {...state, error: '', gettingFriends: true}
        };
        case(GET_SUCCESS): {
          console.log('success');
          return {...state, friends: action.payload, gettingFriends: false, error: '' };
        };
        case(GET_FAILURE): {
          console.log('failure');
          return {...state, error: action.payload, gettingFriends: false};
        };
        default:
          return state;
      };
};