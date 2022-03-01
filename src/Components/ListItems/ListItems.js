import React from "react";
import { localization } from "../../Modules/localization/Localization.js";
import { ListItemWrapper, ListItemTextArea, Wrapper, ListItemSpan } from "./ListItemsStyle.js";

const ListItems = ({item, deleteItem, setUpdate}) => {

    return(
        <ListItemWrapper key={item.key}>
            <Wrapper>
                <ListItemTextArea value={item.text} id={item.text} type='text' onChange={(e) => {setUpdate(e.target.value, item.id)}}/>
                <ListItemSpan onClick={() => {deleteItem(item.id)}}>
                    {localization.DELETE}
                </ListItemSpan>
            </Wrapper>  
        </ListItemWrapper>
    );
};

export default ListItems;