import { UserActionTypes } from './user-types';
import api from '../../services/api';


export function login(values) {
  return submit(values, '/authenticate')
}

function submit(values, url) {
  return dispatch => {
    api.post(url, values)
      .then(resp => {
        dispatch([
          { type: UserActionTypes.USER_FETCHED, payload: resp.data }
        ])
      })
      .catch(e => {
        e.response.data.errors.forEach(
          error => console.log('Erro', error));
      })
  }
}

export function validateToken(token) {
  return dispatch => {
    if (token) {
      dispatch({ type: 'TOKEN_VALIDATED', payload: true })
    } else {
      dispatch({ type: 'TOKEN_VALIDATED', payload: false })
    }
  }
}