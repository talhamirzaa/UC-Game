import React, { useEffect, useState } from 'react'

export default function Alert() {

    const [show, setShow] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShow(false);
    }, 4000); // auto dismiss alert after 5 seconds

    return () => clearTimeout(timer); 
  }, []);

  return (
    <>
    <div style={{height:'50px'}}>
    {show && (
    
    <div className="alert alert-success alert-dismissible fade show mtk-1 py-1" role="alert">
    <label style={{fontSize:'15px'}}>This Game Works Best on Mobile.</label>
    <button type="button" className="btn-close mt-1 py-1" onClick={() => setShow(false)} data-bs-dismiss="alert" aria-label="Close"></button>
    </div>
  
    )}
    </div>
</>
  )
}
