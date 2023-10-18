
import { ADD_CRUD } from './crudtypes';
import {DELETE_CRUD} from './crudtypes';
import {EDIT_CRUD} from './crudtypes'

const initialState = {
  cruds: [], // Initial state for  CRUD data
};

const crudReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_CRUD:
      return {
        ...state,
        cruds: [...state.cruds, action.payload],
      };
    
    case DELETE_CRUD:
      return {
        ...state,
        cruds: state.cruds.filter((crud) => crud._id !== action.payload),
      };
      case EDIT_CRUD:
        // Find the CRUD item to update and replace it with the new data
        const updatedCruds = state.cruds.map((crud) =>
          crud._id === action.payload._id ? action.payload : crud
        );
        return {
          ...state,
          cruds: updatedCruds,
        };
    default:
      return state;
  }
};

export default crudReducer;
