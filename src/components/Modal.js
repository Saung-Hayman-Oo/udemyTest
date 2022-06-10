const Modal = ({onCalcel,onConfirm}) => {
    return ( 
        <div className="modal"> 
            <p className="text-2xl"> Are you sure to delete?</p>
            <button className="btn--alt" onClick={onCalcel}>Cancel</button>
            <button className="btn ml-16 mt-8" onClick={onConfirm}>Confirm</button>
        </div>
     );
}
 
export default Modal;