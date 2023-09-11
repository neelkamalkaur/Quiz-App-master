// src/Context1.js
import React, { createContext, useContext, useReducer } from 'react';

// Define your initial state and reducer function
const initialState = {
  data: {},
  
};


// api call for data persistence



const context5Reducer = (state, action) => {
  switch (action.type) {
    case 'ADD_USER_ALLERGIC_INFO_DATA':
      return {
        ...state,
        data: {...state.data, ...action.payload},
      };
    default:
        
      return state;
  }

};

// Create the context
const Context5Context = createContext();

// Create a provider component for Context1
export const Context5Provider = ({ children }) => {
  const [state, dispatch] = useReducer(context5Reducer, initialState);
  

  return (
    <Context5Context.Provider value={{ state, dispatch }}>
      {children}
    </Context5Context.Provider>
  );
};

// Custom hook to access Context1
export const useAllergicInfoContext = () => {
  return useContext(Context5Context);
};
