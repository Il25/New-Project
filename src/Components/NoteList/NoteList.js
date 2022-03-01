import React from "react";
import { localization } from "../../Modules/localization/Localization";
import { NotesFormButton, NotesFormInput, NotesTitleHeader } from "./NoteListStyle";
import ListItems from "../ListItems/ListItems"

class NoteList extends React.Component {

    constructor(props){
        super(props);
        this.state = {
          items: [],
          currentItem: {
            text: '',
            id: 0,
          },
          id: 0,
          input: React.createRef(),
        }; 
    };
    
    addItem = (e) => {
        const noteObj = {
            id: this.state.id,
            text: e.target["note"].value,
        };
        e.preventDefault();
        this.setState((prevState) => {
            return (
            {
                items: [...this.state.items, noteObj],
                id: prevState.id + 1,     
            }
            )
        }); 
        this.state.input.current.value = ''; 
    };

    deleteItem = (itemDelete) => {
        const filteredItems = this.state.items.filter(key => key.id !== itemDelete );
        this.setState((prevState) => ({
            ...prevState,
            items: filteredItems,
        }));
    };

    setUpdate = (text, key) => {
        const items = this.state.items.map(item => {      
            if(item.id === key) {
            return {
                ...item,
                text: text,
            }
            } else {
            return item
            }
        })
        this.setState((prevState) => ({
            ...prevState,
            items: items,
        }));
    };

    render() {
        return(
            <div>
                <NotesTitleHeader>{localization.NOTE_LIST}</NotesTitleHeader>
                <form id='notes-form' onSubmit={this.addItem}>
                    <NotesFormInput ref={this.state.input} name='note' type='text' placeholder={localization.ADD_A_NOTE}/>
                    <NotesFormButton>{localization.ADD}</NotesFormButton>
                </form>
                {this.state.items.map((item) => {
                return <ListItems item={item} deleteItem={this.deleteItem} setUpdate={this.setUpdate} />
                })}
            </div>
        );
    }  
   
};

export default NoteList;