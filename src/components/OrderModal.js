import React, { useState } from 'react';
import { useGlobalContext } from './GlobalContext';

export default function OrderModal(props) {  

    const {shuffled } = useGlobalContext();

    const [showModal, setShowModal] = useState(true);

    const closeModal = () =>
    {
        setShowModal(false);
    }

    let x=props.note;

    //console.log(shuffled)
  return (
    <>
        {showModal && (
        <div className="modal fade show" style={{ display: 'block' }} aria-labelledby="staticBackdropLabel" aria-hidden="true">
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content mx-2 rounded-4">
             
                <div className="modal-body fw-bold mb-0">
                  {props.head}
                  <br />Order of Explaination:<br />
                  <ol className="text-uppercase fw-normal">
                  {shuffled.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                  </ol>
                </div>
                 {x==='true' && <div className='mx-2 mb-2 lh-1'>
                 <b>Note:</b>
                 <label className='fst-italic' style={{fontSize:'15px'}}>This symbol<i className="bi bi-check-circle-fill mx-1 text-success"></i>on the card means it has been opened & cannot be opened again.</label>
                  </div> }
              <div className="modal-footer py-1">
                <button type="button" className="btn btn-block btn-dark rounded-pill w-25 " style={{letterSpacing:'1px'}} onClick={closeModal}>OK</button>
               
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
