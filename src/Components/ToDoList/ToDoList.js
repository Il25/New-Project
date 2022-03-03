import React, { useState } from "react";
import { localization } from "../../Modules/localization/Localization";
import { ToDoFormButton, ToDoFormInput, ToDoTitleHeader } from "./ToDoListStyle";
import ListItems from "../ListItems/ToDoItems"
import { useToDoStore } from "../../Context/ToDoContext";

const ToDoList = () => {
    const [todoText, setTodoText] = useState("");
    const toDoStore = useToDoStore();

    const addItem = () => {
        toDoStore.addToDo(todoText)
        setTodoText("");
    }
   
    return (
        <>
            <ToDoTitleHeader>{localization.TODO_LIST}</ToDoTitleHeader>
            <div>
                <ToDoFormInput 
                    value={todoText}
                    type="text"
                    key={toDoStore.id} 
                    placeholder={localization.ADD_A_NEW_TODO}
                    onChange={(e) => setTodoText(e.target.value)}
                />
                <ToDoFormButton onClick={addItem}>
                    {localization.ADD}
                </ToDoFormButton>
            </div>
            <ListItems/>
        </>
    );
   
};

export default ToDoList;