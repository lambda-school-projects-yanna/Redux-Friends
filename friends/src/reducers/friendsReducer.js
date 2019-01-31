import {GETTING, GET_SUCCESS, GET_FAILURE, POSTING, POST_FAILURE, POST_SUCCESS} from '../actions';

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
    name: '',
    age: '',
    email: '',
    error: null
};

export const friendsReducer = (state = initialState, action) => {
    switch (action.type) {
        case(GETTING): {
          console.log('loading');
          return {...state, error: '', gettingFriends: true, friendsGot: false}
        };
        case(GET_SUCCESS): {
          console.log('success');
          return {...state, friends: action.payload, gettingFriends: false, friendsGot: true, error: '' };
        };
        case(GET_FAILURE): {
          console.log('failure');
          return {...state, error: action.payload, gettingFriends: false, friendsGot: false};
        };
        case(POSTING): {
          console.log('loading');
          return {...state, error: '', friendsSaved: false, savingFriends: true}
        };
        case(POST_SUCCESS): {
          console.log('success');
          return {...state, friends: action.payload, friendsSaved: true, savingFriends: false, error: '' };
        };
        case(POST_FAILURE): {
          console.log('failure');
          return {...state, error: action.payload, friendsSaved: false, savingFriends: false};
        };
        default:
          return state;
      };
};