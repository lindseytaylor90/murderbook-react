import React, { createContext, useContext, useReducer } from 'react';

export const StateContext = createContext();

// higher order component 
export const Provider = ({ reducer, initialState, children }) => {
    return (
      <StateContext.Provider value={useReducer(reducer, initialState )}>
          {children}
      </StateContext.Provider>  
    );
}

export const useStateValue = () => useContext(StateContext);