import { useObserver } from "mobx-react";
import React from "react";
import { useToDoStore } from "../../Context/ToDoContext.js";
import { localization } from "../../Modules/localization/Localization.js";
import { ListItemWrapper, ListItemTextArea, Wrapper, ListItemSpan } from "./ToDoItemsStyle.js";

const ListItems = () => {
    const toDoStore = useToDoStore();

    return useObserver(() => (
        <>
            {toDoStore.todo.map(item => 
                <ListItemWrapper key={item.id}>  
                    <Wrapper>
                        <ListItemTextArea title={localization.E} type="text">
                            {item.text}
                        </ListItemTextArea>
                        <ListItemSpan 
                            onClick={() => toDoStore.deleteToDo(item.id)}
                            >
                            {localization.DELETE}
                        </ListItemSpan>
                    </Wrapper> 
                </ListItemWrapper>            
            )}
        </>
    ));
};

export default ListItems;