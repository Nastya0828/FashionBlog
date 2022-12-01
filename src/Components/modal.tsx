import React from 'react';
import './modal.css';
import '../App.css';



const Modal: React.FC <{closeModal: ()=> void, title: string, body: string}> = ({closeModal, title, body}) => {
    return(
        <div className='container'>
            <div className='modal'> 
                <div className='buton-x'>
                    <button className='xButton' onClick={closeModal}>
                        x
                    </button> 
                </div>
                   

                <div className='title-modal'>Это модальное окно</div>  
                <div className='title-content'>{title}</div>                
                <div className='title-content'>{body}</div>
                <div className='cancel-button'>
                    <button className='closeButton' onClick={closeModal}>
                        Cancel
                    </button>
                </div>
                </div>
           
        </div>
            
    )
}

export default Modal