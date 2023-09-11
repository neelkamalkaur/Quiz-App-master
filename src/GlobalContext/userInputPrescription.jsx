// src/Context1.js
import React, { createContext, useContext, useReducer } from 'react';

// Define your initial state and reducer function
const initialState = {
  data: [],
};




// api call for data persistence


const context4Reducer = (state, action) => {
  switch (action.type) {
    case 'ADD_USER_INPUT_PRESCRIPTION_DATA':
      return {
        ...state,
        data: [...state.data, ...action.payload],
      };
    default:
        
      return state;
  }

};

// Create the context
const Context4Context = createContext();

// Create a provider component for Context1
export const Context4Provider = ({ children }) => {
  const [state, dispatch] = useReducer(context4Reducer, initialState);
  

  return (
    <Context4Context.Provider value={{ state, dispatch }}>
      {children}
    </Context4Context.Provider>
  );
};

// Custom hook to access Context1
export const useUserPrescriptionContext = () => {
  return useContext(Context4Context);
};
