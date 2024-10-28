import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import CharItem from './CharItem';
import { useGlobalContext } from './GlobalContext';
import OrderModal from './OrderModal';

export default function Wall({ oneElemBt, showNewButton }) {
    const { playerNames, numPlayers, setPoint } = useGlobalContext();
    const location = useLocation();
    const { cvlWord, ucWord, rNum } = location.state;
    const [modals, setModals] = useState([]);

    let navigate = useNavigate();
    const routeChange = () => {
        let path = `/Eliminate`;
        navigate(path, { state: { rNum: rNum } });
    }

    // Initialize state to count visible CharItems
    const [visibleCount, setVisibleCount] = useState(numPlayers);

    // Create an array to hold the words for each CharItem
    let civil = 'civilian';
    let uc = 'Under Cover';

    let roles = [];
    let words = [];

    for (let i = 1; i <= numPlayers; i++) {
        roles.push(civil);
        words.push(cvlWord);
    }
    words[rNum] = ucWord; // Assign ucWord to the randomly selected index
    roles[rNum] = uc;


    //points asgnmnt for UC
  const updateValueUC = (newValue) => {
    let x=roles.indexOf("Under Cover")
    let key=playerNames[x]
    //console.log(key,newValue)
    setPoint(prevB => ({
        ...prevB,
        [key]: prevB[key] + newValue // Update the value for the specific key
        
    }));
};

    // Function to handle elimination
    const handleElimination = () => {
        setVisibleCount(prevCount => prevCount - 1);
    };

    //to see expln ordr
  const seeOrdr = () => {
    setModals([...modals, {}]); // Add a new modal instance
  };



    return (
        <>
        {/* <h3>Visible CharItems: {visibleCount}</h3> */}
            <div className="container d-flex flex-column col col-lg-5 mx-auto gm_cont" style={{height: '90dvh'}}>
            {oneElemBt && ( 
                 <div className="my-2 mx-2 d-flex justify-content-between p-0"> 
                    <label className='fs-6 fw-bold'>Open Your Card and Explain the Word.</label> 
                    <i className="bi bi-info-circle" style={{color: 'rgb(66, 48, 66)'}} role="button" onClick={seeOrdr}></i>
                    {modals.map((_, index) => (
                        <OrderModal key={index} note='true'/>
                    ))}
                </div>
                 )}
                
                 {!oneElemBt  && ( 
                 <div className="my-2 mx-2 d-flex justify-content-between p-0"> 
                    <label className='fs-6 fw-bold'>Elimination Round</label> 
                    { numPlayers > 3 && ( 
                    <>
                    <i className="bi bi-info-circle" style={{color: 'rgb(66, 48, 66)'}} role="button" onClick={seeOrdr}></i>
                    {modals.map((_, index) => (
                        <OrderModal key={index} head="skip/ignore the Eliminated player." note='false' />
                    ))}
                    </>
                    )}
                </div>
                 )} 
                
                
                <div className="row ">
                    {playerNames.map((id, index) => (
                        id && (
                            <div className="col-6 col-md-4" key={index}>
                                <CharItem 
                                    id={id} 
                                    word={words[index]} 
                                    role={roles[index]} 
                                    showNewButton={showNewButton} 
                                    onEliminate={handleElimination} // Pass the elimination handler
                                    currPlayer={visibleCount}
                                    onupdt={updateValueUC}
                                />
                            </div>
                        )
                    ))}
                </div>
                <div className="mt-auto mb-4">
                    {oneElemBt && <button type="button" className="btn btn-outline-danger btn-block rounded-pill w-100" 
                        onClick={routeChange}>Start Elimination</button>}
                </div>
                
            </div>
            {/* {showModal && <OrderModal/>} */}
        </>
    );
}
