import React, { useEffect } from 'react';
import { useGlobalContext } from './GlobalContext';
import { useNavigate, Link } from "react-router-dom";
import Alert from './Alert';


const GameSetup = () => {
    const { numPlayers, setNumPlayers, playerNames, setPlayerNames, setPoint } = useGlobalContext();

    
    const handlePlayerCountChange = (e) => {
        const count = parseInt(e.target.value);
        //console.log(count);
        setNumPlayers(count);
        setPlayerNames(Array(count).fill('')); // Initialize player names array

    };
    

    const handleNameChange = (index, value) => {
        const updatedNames = [...playerNames];
        updatedNames[index] = value;
        setPlayerNames(updatedNames);
    };

    // Step 2: Create the key-value pair object for b based on a
    useEffect(() => {
        const initialB = playerNames.reduce((acc, key) => {
            acc[key] = 0; // Set initial value to 0
            return acc;
        }, {});
        setPoint(initialB);
    }, [playerNames]); // Run this effect when array plrnm arr changes
    //console.log("arr b:",point)

    let navigate = useNavigate(); 
    const handleSubmit = () => {
        let result = playerNames.filter(item => item === "").length === 0
        //console.log(playerNames,result)
        if(result===true && playerNames.length>0)
        {
            let path = `/NewGame`; 
            navigate(path);
        }
        else if(playerNames.length<=0)
        {
            alert("Please Select Number of players")
        }
        else
        {
            alert("Please Enter all Players Name")
            // let path = `/`; 
            // navigate(path);
        }
       
    };

    let mystyle={
        marginTop : '20%',
    }

    let btnclr={
        backgroundColor:'rgb(66, 48, 66)',
        color:'white'
    }


    return (
        <div className="container d-flex flex-column" style={{height: '90dvh'}}>
            <Alert/>

            <div className="" style={mystyle}>
            
            <h4 className='text-center text-uppercase '>Welcome to the game of</h4>
            <div className="d-flex flex-row justify-content-center">
            <h3 className='text-uppercase fw-bold mx-1'>Undercover!</h3>
            <Link to="/AboutGm" className="fst-italic text-lowercase fw-normal text-secondary mt-0 align-self-end" style={{fontSize:'10px'}} >know more</Link>
            </div>
            
           

            <h5 className="mx-2 mt-5">Choose Number of Players:</h5>
            <div className="d-flex mb-3 mt-3">
                <div className="flex-fill mx-1">
                <button type="button" className="btn btn-block rounded-pill w-100" style={btnclr} value={3}
                    onClick={handlePlayerCountChange}>3 Players</button>
                </div>
                <div className="flex-fill mx-1">
                <button type="button" className="btn btn-block rounded-pill w-100" style={btnclr} value={4}
                    onClick={handlePlayerCountChange}>4 Players</button>
               </div>
               <div className="flex-fill mx-1">
               <button type="button" className="btn btn-block rounded-pill w-100" style={btnclr} value={5}
                    onClick={handlePlayerCountChange}>5 Players</button>
                </div>
            </div>
            {Array.from({ length: numPlayers }).map((_, index) => (
                <div className="mb-2" key={index}>
                    <input
                        type="text"
                        className="form-control rounded-pill" 
                        placeholder={`Player ${index + 1} Name`}
                        value={playerNames[index]}
                       
                        onChange={(e) => handleNameChange(index, e.target.value)}
                    />
                </div>
            ))}
            
        </div>
        <button type="button" className="btn btn-dark btn-block rounded-pill w-100 mt-auto mb-4" 
            onClick={handleSubmit}>Get Ready</button>
        </div>
        
    );
};

export default GameSetup;
