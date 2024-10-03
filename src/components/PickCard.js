import React from 'react';
import Wall from './Wall';
import OrderModal from './OrderModal';



export default function PickCard() {
    
    return (
        <div>            
            <Wall oneElemBt= {true} showNewButton={false} /> {/* No new button on this page */}
            <OrderModal/>
        </div>
    );
}
