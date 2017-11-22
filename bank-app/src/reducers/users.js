import axios from 'axios';
const GET_USER_INFO = 'GET_USER_INFO';


let initialState = {
  data: [],
  fetching: false,
  errorMessage: ''
}

export default function(state=initialState, action) {
  switch(action.type){
    case GET_USER_INFO + '_PENDING':
      return Object.assign({}, state, {fetching: true});
    case GET_USER_INFO + '_REJECTED':
      return Object.assign({}, state, {fetching:false, errorMessage: 'something went wrong'});
    case GET_USER_INFO + '_FULFILLED':
      return Object.assign({}, state, {fetching: false, data: action.payload});
    default:
      return state;
  }
}

export function getUserInfo() {
  const userInfo =
    axios.get('http://localhost:3005/auth/me', {withCredentials: true}).then(res => {
      return res.data
    })
  return {
    type: GET_USER_INFO,
    payload: userInfo
  }
}
