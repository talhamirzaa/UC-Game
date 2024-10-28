import React, { useState } from 'react';
import Wall from './Wall';
import OrderModal from './OrderModal';


export default function Eliminate() {

    const [modals, setModals] = useState([]);

     //to see expln ordr
  const seeOrdr = () => {
    setModals([...modals, {}]); // Add a new modal instance
  };


    return (
        <div>
            {/* <div className="my-2 mx-3 d-flex justify-content-between p-0 col col-lg-5 mx-auto"> 
                    <label className="fs-5">Elimination Round</label> 
                    <i className="bi bi-info-circle text-secondary" onClick={seeOrdr}></i>
                    {modals.map((_, index) => (
                        <OrderModal key={index} head="skip/ignore the Eliminated player." note='false' />
                    ))}
                </div> */}
            <Wall oneElemBt={false} showNewButton={true} /> {/* New button displayed on this page */}
            
        </div>
    );
}


