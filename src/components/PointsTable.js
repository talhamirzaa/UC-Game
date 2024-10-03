// CardsComponent.js
import React from 'react';
import { useNavigate } from "react-router-dom";
import { useGlobalContext } from './GlobalContext';

export default function PointsTable () {
    const { point , setPoint} = useGlobalContext();

    let navigate = useNavigate();

    const reset = () => {
      //console.log(key, newValue);
      setPoint(prevB => {
          // Create a new object to hold the updated values
          const updatedValues = { ...prevB };
    
          // Iterate over the keys in the previous state
          for (const k in updatedValues) {
              // Update the value for all keys except the one passed as a parameter
              
                  updatedValues[k] = 0; // Update the value for the specific key
              
          }
    
          return updatedValues; // Return the updated object
      });
    };

    const newPlay= () =>{
      let path = `/NewGame`;
      navigate(path);
  }
    
    
    return (
      <div className="container d-flex flex-column" style={{height: '90dvh'}}>

            <h3 className="text-center my-3 text-decoration-underline">Points Table</h3>
                <table className="table table-borderless mx-auto w-75">
                <thead >
                  <tr className="fs-5">
                    <th scope="col">Players</th>
                    <th scope="col" className="text-center">Points</th>
                  </tr>
                </thead>
                <tbody className="text-uppercase">
                {Object.entries(point).map(([key, value]) => (
                        <tr key={key}>
                            <td>{key}</td>
                            <td className="text-center">{value}</td>
                        </tr>
                    ))}
                </tbody>
              </table>
              <button className="btn btn-danger btn-block border rounded-pill w-100" onClick={reset}>Reset Points</button>
              
              <div className="mt-auto mb-4 d-flex flex-column">
                <button type="button" className="btn btn-outline-dark btn-block rounded-pill w-100"
                onClick={newPlay}><i className="bi bi-box-arrow-left"></i> Back to Play
                </button>
                
                </div>
              
          
        </div>
    );
};

