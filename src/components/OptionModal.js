import React from 'react';
import Modal from 'react-modal';

const OptionModal = (props) => (
   <Modal
   isOpen={!!props.selectedOptionprop}
   onRequestClose={props.delete}
   contentLabel="selected option"
   closeTimeoutMS={200}
   className="modal"
   >
    <h3 className="modal__title">Select Option</h3>
    {props.selectedOptionprop && <p className="modal__body">{props.selectedOptionprop}</p>}
    <button className="button" onClick={props.delete}>Okay</button>
   </Modal>
)
export default OptionModal