// src/Context1.js
import React, { createContext, useContext, useReducer } from 'react';

// Define your initial state and reducer function
const initialState = {
  data: {},
};




// api call for data persistence


const context1Reducer = (state, action) => {
  switch (action.type) {
    case 'ADD_USERINFO_DATA':
      return {
        ...state,
        data: {...state.data, ...action.payload},
      };
    default:
        
      return state;
  }

};

// Create the context
const Context1Context = createContext();

// Create a provider component for Context1
export const Context1Provider = ({ children }) => {
  const [state, dispatch] = useReducer(context1Reducer, initialState);
  

  return (
    <Context1Context.Provider value={{ state, dispatch }}>
      {children}
    </Context1Context.Provider>
  );
};

// Custom hook to access Context1
export const useInfoContext = () => {
  return useContext(Context1Context);
};
