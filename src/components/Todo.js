import { useState } from "react";
import Backdrop from "./Backdrop";
import Modal from "./Modal";
const Todo = (props) => {
    const [ modalIsOpen,setModalIsOpen ] = useState(false);
    const deleteHandler = () => {
        setModalIsOpen(true);
    }
    const closeModelHandler = () => {
        setModalIsOpen(false);
    }
    return ( 
        <div className="card">
            <h2 className="text-2xl font-bold mb-8 text-left">{ props.text }</h2>
            <div className="text-right">
             <button className="btn" onClick={ deleteHandler }>Delete</button>
            </div>
            { modalIsOpen && <Modal onCalcel={ closeModelHandler } onConfirm={ closeModelHandler }/> }
            { modalIsOpen && <Backdrop onCancel={ closeModelHandler }/> }
        </div>
     );
}
 
export default Todo;