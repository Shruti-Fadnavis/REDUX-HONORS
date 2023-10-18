import { ADD_CRUD } from './crudtypes'
import {DELETE_CRUD} from './crudtypes'
import { EDIT_CRUD } from './crudtypes';

import axios from 'axios';
export const addCrud = (crudData) => {
  return (dispatch) => {
    axios.post("http://localhost:5000/api/cruds/",crudData)
    .then((res) => {
       // Dispatch an action to update the Redux store with the new product
       dispatch({
        type: ADD_CRUD,

    payload: res.data
  });
})
.catch((error) => {
  console.log(error)
});
};
};
export const delCrud = (_id) => {
  return (dispatch) => {
    axios.delete(`http://localhost:5000/api/cruds/${_id}`)
    .then((res) => {
       // Dispatch an action to update the Redux store with the new product
       dispatch({
        type: DELETE_CRUD,

    payload: res.data
  });
})
.catch((error) => {
  console.log(error)
});
};
};
export const editCrud = (crudData) => {
  return (dispatch) => {
    axios.patch(`http://localhost:5000/api/cruds/${crudData._id}`, crudData)
      .then((res) => {
        // Dispatch an action to update the Redux store with the updated CRUD item
        dispatch({
          type: EDIT_CRUD,
          payload: res.data,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };
};