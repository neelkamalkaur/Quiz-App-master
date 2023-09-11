// src/Context1.js
import React, { createContext, useContext, useReducer } from 'react';

// Define your initial state and reducer function
const initialState = {
  data: {},
};


// api call for data persistence


const context6Reducer = (state, action) => {
  switch (action.type) {
    case 'ADD_USER_DIAGONOSED_INFO_DATA':
      return {
        ...state,
        data: {...state.data, ...action.payload},
      };
    default:
        
      return state;
  }

};

// Create the context
const Context6Context = createContext();

// Create a provider component for Context1
export const Context6Provider = ({ children }) => {
  const [state, dispatch] = useReducer(context6Reducer, initialState);
  

  return (
    <Context6Context.Provider value={{ state, dispatch }}>
      {children}
    </Context6Context.Provider>
  );
};

// Custom hook to access Context1
export const useDiagonosedInfoContext = () => {
  return useContext(Context6Context);
};
