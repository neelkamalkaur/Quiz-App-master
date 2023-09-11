// src/Context1.js
import React, { createContext, useContext, useReducer } from 'react';

// Define your initial state and reducer function
const initialState = {
  data: {},
};




// api call for data persistence




const context3Reducer = (state, action) => {
  switch (action.type) {
    case 'ADD_USER_DERMATOLOGY_DATA':
      return {
        ...state,
        data: {...state.data, ...action.payload},
      };
    default:
        
      return state;
  }

};

// Create the context
const Context3Context = createContext();

// Create a provider component for Context1
export const Context3Provider = ({ children }) => {
  const [state, dispatch] = useReducer(context3Reducer, initialState);
  

  return (
    <Context3Context.Provider value={{ state, dispatch }}>
      {children}
    </Context3Context.Provider>
  );
};

// Custom hook to access Context1
export const useDermatologyContext = () => {
  return useContext(Context3Context);
};
