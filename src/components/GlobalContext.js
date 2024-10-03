import React, { createContext, useContext, useState } from 'react';

const GlobalContext = createContext();

export const GlobalProvider = ({ children }) => {
    const [numPlayers, setNumPlayers] = useState(0);
    const [playerNames, setPlayerNames] = useState([]);
    const[point, setPoint] = useState({})

    let shuffled = playerNames.map(value => ({ value, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ value }) => value)

    return (
        <GlobalContext.Provider value={{ numPlayers, setNumPlayers, playerNames, setPlayerNames, point, setPoint, shuffled }}>
            {children}
        </GlobalContext.Provider>
    );
};

export const useGlobalContext = () => {
    return useContext(GlobalContext);
};
