import React, { useState } from 'react';
import './CharItem.css';
import { useNavigate } from "react-router-dom";
import { useGlobalContext } from './GlobalContext';

export default function CharItem({ id, word, role, showNewButton, onEliminate, currPlayer, onupdt }) {
  const [flipped, setFlipped] = useState(false);
  const [finalFlipped, setFinalFlipped] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [eliminatedRole, setEliminatedRole] = useState('');
  const [isVisible, setIsVisible] = useState(true); // State to control visibility
  
  const { setPoint } = useGlobalContext();

  let navigate = useNavigate();


  const handleCardClick = () => {
    if (!showNewButton) {
      if (!flipped && !finalFlipped) {
        setFlipped(true);
      }
    }
  };

  const handleButtonClick = () => {
    if (flipped) {
      setFlipped(false); // Flip back to front
      setFinalFlipped(true); // Disable further flips
    }
  };

  const dltCard = () => {
    //console.log('new:');
    setShowModal(true);
    setEliminatedRole(role);
    //console.log(id, word, role);
  };

  const closeModal = () => {
   
    setShowModal(false);
    //console.log(id, "chkn:", eliminatedRole);
    if (eliminatedRole === "Under Cover") {
      updateValue(id,2)
      let path = `/NewGame`;
      navigate(path);
    } 
    else if(currPlayer===3)
    {
      onEliminate();
      onupdt(5)
      let path = `/NewGame`;
      navigate(path);
    }
    else 
    {
      onEliminate();
    }

    setIsVisible(false);

  };
  
// to asgn points to rest all
const updateValue = (key, newValue) => {
  //console.log(key, newValue);
  setPoint(prevB => {
      // Create a new object to hold the updated values
      const updatedValues = { ...prevB };

      // Iterate over the keys in the previous state
      for (const k in updatedValues) {
          // Update the value for all keys except the one passed as a parameter
          if (k !== key) {
              updatedValues[k] += newValue; // Update the value for the specific key
          }
      }

      return updatedValues; // Return the updated object
  });
};

  const seePoints= () =>{
    closeModal()
    let path = `/Points`;
    navigate(path);

  }
  
  
  return (
    <>
      {/* <h4>{currPlayer}</h4> */}
      {isVisible && ( // Render the div only if isVisible is true
        <div className="my-2">
          <div className={`shadow card ${flipped ? 'flipped' : ''}`} id={id}>
            <div className="card-front" onClick={handleCardClick}>
              <div className="h-100 d-flex flex-column">
                <div className="align-item-center mt-1">
                  <h5 className="text-center text-uppercase" >{id || `Player`}</h5>
                  <img className="plr-icon mt-0" alt="" srcSet="/icon.png" />
                </div>
                {/* <div className="mt-auto mx-2 mb-1">
                  {finalFlipped && <button className="btn btn-danger btn-block border rounded-pill w-100" onClick={dltCard}>Eliminate</button>}
                </div> */}
                <div className="mt-auto mx-3 mb-3 rounded-pill bg-light">
                  {showNewButton && <button className="btn btn-outline-danger btn-block border rounded-pill w-100 fw-bold" onClick={dltCard}>Eliminate</button>}
                </div>
              </div>
            </div>
            <div className="card-back">
              <div className="h-100 d-flex flex-column">
                <div className="p-0 mx-3 mt-2">
                  <label>You are: </label>
                  <br />
                  <label htmlFor="rl" className="text-capitalize"><b>{role}</b></label>
                </div>
                <div className="p-0 mx-3">
                  <label>Secret Word: </label>
                  <br />
                  <label id="wrd"><b>{word}</b></label>
                </div>
                <div className="mt-auto mx-3" style={{marginBottom:'2dvh'}}>
                  <button className="btn btn-dark btn-block border rounded-pill w-100" onClick={handleButtonClick}>
                    Done
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* modal popup */}
      {showModal && (
        <div className="modal fade show" style={{ display: 'block' }} aria-labelledby="staticBackdropLabel" aria-hidden="true">
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-header">
                <button type="button" className="btn-close" onClick={closeModal} aria-label="Close"></button>
              </div>
              {(eliminatedRole === "Under Cover" && currPlayer !== 3 )  && (
                <div className="modal-body fw-bold">
                  An {eliminatedRole} has been Eliminated. All Civilians Won.

                </div>
              )}
               {(eliminatedRole === "civilian" && currPlayer !== 3 ) && (
                <div className="modal-body fw-bold">
                  A {eliminatedRole} has been Eliminated. <br />Explain your words again before eliminating the next player.... 


                </div>
              )}
              {(eliminatedRole === "Under Cover" && currPlayer === 3 ) && (
                <div className="modal-body fw-bold">
                  An {eliminatedRole} has been Eliminated. All Civilians Won.
                </div>
              )}
               {(eliminatedRole === "civilian" && currPlayer === 3 ) && (
                <div className="modal-body fw-bold">
                  A {eliminatedRole} has been Eliminated. Undercover Won!
                </div>
              )}
              
              <div className="modal-footer">
              {(eliminatedRole === "Under Cover" || currPlayer === 3 ) && (
               <button type="button" className="btn btn-dark rounded-pill px-4" onClick={seePoints}>Points Table</button>
              )}
                <button type="button" className="btn btn-dark rounded-pill w-25" onClick={closeModal}>OK</button>
                
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
