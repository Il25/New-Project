import React, { createContext, useContext } from "react";
import { createToDoStore } from "../Store/ToDoStore";
import {  useLocalStore } from "mobx-react";

const ToDoContext = createContext(null);

export const ToDoProvider = ({children}) => {
    const ToDoStore = useLocalStore(createToDoStore);
    return <ToDoContext.Provider value={ToDoStore}>
        {children}
    </ToDoContext.Provider>
};

export const useToDoStore = () => useContext(ToDoContext)