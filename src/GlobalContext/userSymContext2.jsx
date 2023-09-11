// src/Context1.js
import React, { createContext, useContext, useReducer } from 'react';

// Define your initial state and reducer function
const initialState = {
  data: {},
};




// api call for data persistence


const context2Reducer = (state, action) => {
  switch (action.type) {
    case 'ADD_USERSYM_DATA':
      return {
        ...state,
        data: {...state.data, ...action.payload},
      };
    default:
        
      return state;
  }

};

// Create the context
const Context2Context = createContext();

// Create a provider component for Context1
export const Context2Provider = ({ children }) => {
  const [state, dispatch] = useReducer(context2Reducer, initialState);
  

  return (
    <Context2Context.Provider value={{ state, dispatch }}>
      {children}
    </Context2Context.Provider>
  );
};

// Custom hook to access Context1
export const useUserSymContext = () => {
  return useContext(Context2Context);
};
