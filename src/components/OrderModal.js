import React, { useState } from 'react';
import { useGlobalContext } from './GlobalContext';

export default function OrderModal(props) {

    const {shuffled } = useGlobalContext();

    const [showModal, setShowModal] = useState(true);

    const closeModal = () =>
    {
        setShowModal(false);
    }

    //console.log(shuffled)
  return (
    <>
        {showModal && (
        <div className="modal fade show" style={{ display: 'block' }} aria-labelledby="staticBackdropLabel" aria-hidden="true">
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
             
                <div className="modal-body fw-bold">
                  {props.head}
                  <br />Order of Explaination:<br />
                  <ol className="text-uppercase fw-normal">
                  {shuffled.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                  </ol>
                </div>
              
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
