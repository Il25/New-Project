import './App.css';
import React from 'react';
import ListItems from './Components/ListItems';
class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      items: [],
      currentItem: {
        text: "",
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
    this.state.input.current.value = "" 
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
    return ( 
      <div className="App">
        <header>
          <h1>Notes list:</h1>
          <form id="notes-form" onSubmit={this.addItem}>
            <input ref={this.state.input} name="note" type="text" placeholder="Add a note"/>
            <button>Add</button>
          </form>
        </header>
         {this.state.items.map((item) => {
          return <ListItems item={item} deleteItem={this.deleteItem} setUpdate={this.setUpdate} />
         })}
      </div>
    )
  };
};

export default App;