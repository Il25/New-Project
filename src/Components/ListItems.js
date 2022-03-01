import React from "react";
// import "./Listitems.css";
import "./ListItems.css";

const ListItems = ({item, deleteItem, setUpdate}) => {
    return(
        <div className="list" key={item.key}>
            <p>
                <input className='input' value={item.text} id={item.text} type="text" onChange={(e) => {setUpdate(e.target.value, item.id)}}/>
                <span onClick={() => {deleteItem(item.id)}}>
                    Delete
                </span>
                <span onClick={() => {setUpdate(item.id)}}>
                    Edit
                </span>
            </p>  
        </div>
    );
};

export default ListItems;