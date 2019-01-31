import axios from 'axios';

export const GETTING = 'GETTING';
export const GET_SUCCESS = 'GET_SUCCESS';
export const GET_FAILURE = 'GET_FAILURE';
export const POSTING = 'POSTING';
export const POST_SUCCESS = 'POST_SUCCESS';
export const POST_FAILURE = 'POST_FAILURE';

export const getAction = () => dispatch => {
    axios
        .get('http://localhost:5000/api/friends')
        .then(res => dispatch({type: GET_SUCCESS, payload: res.data}))
        .catch(err => dispatch({type: GET_FAILURE, payload: err}));
};

// need post action for mvp