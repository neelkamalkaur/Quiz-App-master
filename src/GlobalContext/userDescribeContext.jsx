// src/Context1.js
import React, { createContext, useContext, useReducer } from 'react';

// Define your initial state and reducer function
const initialState = {
  data: {},
};


// api call for data persistence


const context7Reducer = (state, action) => {
  switch (action.type) {
    case 'ADD_USER_DESCRIBE_DATA':
      return {
        ...state,
        data: {...state.data, ...action.payload},
      };
    default:
        
      return state;
  }

};

// Create the context
const Context7Context = createContext();

// Create a provider component for Context1
export const Context7Provider = ({ children }) => {
  const [state, dispatch] = useReducer(context7Reducer, initialState);
  

  return (
    <Context7Context.Provider value={{ state, dispatch }}>
      {children}
    </Context7Context.Provider>
  );
};

// Custom hook to access Context1
export const useDescribeInfoContext = () => {
  return useContext(Context7Context);
};
