import React, { useState , useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import { useGlobalContext } from './GlobalContext';

export default function WelcomePg () {

    //importing global var
    const { numPlayers } = useGlobalContext();
    const [showModal, setShowModal] = useState(false);

    let navigate = useNavigate(); 
    const routeChange = () =>{ 
    // Generate a random index (0 to numPlayer(number of players in game))
    let min=0
    let max=numPlayers-1;
    min = Math.ceil(min);
    max = Math.floor(max);
    const randomNum = Math.floor(Math.random() * (max - min + 1)) + min;
    let path = `/PickCard`; 
    
    //navigate(path)
    navigate(path,{state:{rNum:randomNum,cvlWord:randomName,ucWord:synonym}});
  }

//** */ this chunk to naviagte to new page with button click*/

/* import { useNavigate } from "react-router-dom";

    let navigate = useNavigate(); 
    // function name for on click
    let path = `/PickCard`; 
    //navigate(path)
    navigate(path,{state:{rNum:randomNum,cvlWord:randomName,ucWord:synonym}});*/


// ends here

    const Items = [
        { word: "ice cream", synonym: "yogurt" },
        { word: "cake", synonym: "pastry" },
        { word: "pizza", synonym: "calzone" },
        { word: "bread", synonym: "roll" },
        { word: "burger", synonym: "sandwich" },
        { word: "pasta", synonym: "noodles" },
        { word: "sushi", synonym: "sashimi" },
        { word: "salad", synonym: "coleslaw" },
        { word: "cat", synonym: "kitten" },
        { word: "dog", synonym: "puppy" },
        { word: "car", synonym: "auto" },
        { word: "house", synonym: "home" },
        { word: "tree", synonym: "plant" },
        { word: "flower", synonym: "blossom" },
        { word: "book", synonym: "novel" },
        { word: "table", synonym: "desk" },
        { word: "chair", synonym: "seat" },
        { word: "apple", synonym: "fruit" },
        { word: "orange", synonym: "citrus" },
        { word: "carrot", synonym: "veg" },
        { word: "bread", synonym: "loaf" },
        { word: "milk", synonym: "dairy" },
        { word: "water", synonym: "liquid" },
        { word: "coffee", synonym: "brew" },
        { word: "tea", synonym: "coffee" },
        { word: "cake", synonym: "pastry" },
        { word: "egg", synonym: "ovum" },
        { word: "fish", synonym: "seafood" },
        { word: "chicken", synonym: "poultry" },
        { word: "shirt", synonym: "top" },
        { word: "pants", synonym: "trousers" },
        { word: "hat", synonym: "cap" },
        { word: "shoe", synonym: "footwear" },
        { word: "sock", synonym: "hosiery" },
        { word: "jacket", synonym: "coat" },
        { word: "necklace", synonym: "jewelry" },
        { word: "watch", synonym: "timepiece" },
        { word: "phone", synonym: "cell" },
        { word: "computer", synonym: "PC" },
        { word: "tablet", synonym: "device" },
        { word: "camera", synonym: "photograph" },
        { word: "television", synonym: "TV" },
        { word: "radio", synonym: "broadcast" },
        { word: "music", synonym: "tune" },
        { word: "dance", synonym: "movement" },
        { word: "game", synonym: "play" },
        { word: "sport", synonym: "activity" },
        { word: "movie", synonym: "film" },
        { word: "book", synonym: "read" },
        { word: "story", synonym: "tale" },
        { word: "school", synonym: "academy" },
        { word: "teacher", synonym: "instructor" },
        { word: "student", synonym: "learner" },
        { word: "friend", synonym: "buddy" },
        { word: "enemy", synonym: "foe" },
        { word: "family", synonym: "relatives" },
        { word: "child", synonym: "kid" },
        { word: "adult", synonym: "grown-up" },
        { word: "baby", synonym: "infant" },
        { word: "man", synonym: "male" },
        { word: "woman", synonym: "female" },
        { word: "brother", synonym: "sibling" },
        { word: "sister", synonym: "sibling" },
        { word: "uncle", synonym: "aunt" },
        { word: "cousin", synonym: "relative" },
        { word: "home", synonym: "place" },
        { word: "city", synonym: "town" },
        { word: "country", synonym: "nation" },
        { word: "planet", synonym: "world" },
        { word: "ocean", synonym: "sea" },
        { word: "river", synonym: "stream" },
        { word: "lake", synonym: "pond" },
        { word: "mountain", synonym: "hill" },
        { word: "valley", synonym: "dale" },
        { word: "desert", synonym: "wasteland" },
        { word: "forest", synonym: "woods" },
        { word: "beach", synonym: "shore" },
        { word: "road", synonym: "street" },
        { word: "path", synonym: "trail" },
        { word: "bridge", synonym: "crossing" },
        { word: "building", synonym: "structure" },
        { word: "shop", synonym: "store" },
        { word: "market", synonym: "bazaar" },
        { word: "hospital", synonym: "clinic" },
        { word: "restaurant", synonym: "diner" },
        { word: "garden", synonym: "yard" },
        { word: "furniture", synonym: "fixtures" },
        { word: "bathroom", synonym: "restroom" },
        { word: "garage", synonym: "carport" },
        { word: "yard", synonym: "lawn" },
        { word: "machine", synonym: "device" },
        { word: "computer", synonym: "laptop" },
        { word: "internet", synonym: "web" },
        { word: "software", synonym: "program" },
        { word: "hardware", synonym: "equipment" },
        { word: "network", synonym: "system" },
        { word: "science", synonym: "study" },
        { word: "art", synonym: "craft" },
        { word: "history", synonym: "past" }
    ];

    const l=Items.length;
    const min =1;
    //console.log(l);
    const [randomName, setrandomName] = useState();
    const [synonym, setSynonym] = useState('');

    const fetchrandomName = () => {
        const randomIndex = Math.floor(Math.random() * (l - min)+ min) ;
        //console.log(randomIndex)
        setrandomName(Items[randomIndex].word);
        setSynonym(Items[randomIndex].synonym);
        
        
    };

    useEffect(() => {
        fetchrandomName();
      },[])

    const seePoints= () =>{
        let path = `/Points`;
        navigate(path);
    }

    const reset= () =>{
        setShowModal(true);
    }

    const closeModal = (e) => {
   
        setShowModal(false);
        let check = parseInt(e.target.value);
        if (check===1)
        {
            let path = `/`;
            navigate(path);
        }
        
      };

    let mystyle={
        marginTop : '70%',
        width:'95%',
        textAlign: 'justify'
    }

    return (
        <>
        <div className="container d-flex flex-column" style={{height: '90dvh'}}>
            
            <div className="d-flex flex-row-reverse mt-4">
                <button type="button" className="btn btn-outline-dark border-0 rounded-pill px-2 py-0 fs-5"
                    onClick={reset}><i className="bi bi-house-door-fill"></i>
                </button>
                <button type="button" className="btn btn-outline-dark btn-block border-0 rounded-pill px-2 py-0 fs-5 mx-1"
                    onClick={seePoints}><i className="bi bi-list-ul"></i>
                </button>
                
            </div>
                

            <div className="container mx-auto" style={mystyle}>
                <label htmlFor="" className="text-secondary">Tip:-</label>
                <h6 className='mt-2'>All <label htmlFor="" className="text-success">Civilians</label> will get the same Word.</h6>
                <h6 className='fs-6'>The <label htmlFor="" style={{color:'purple'}}>Undercover</label> Will get a Slightly Different Word than Civilians.</h6>
            </div>

            <button type="button" className="btn btn-dark btn-block rounded-pill w-100 mt-auto mb-4"
                    onClick={routeChange}>Start New Game</button>

        </div>
        {/* modal popup */}
      {showModal && (
        <div className="modal fade show" style={{ display: 'block' }} aria-labelledby="staticBackdropLabel" aria-hidden="true">
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-header">
                <button type="button" className="btn-close" value={0} onClick={closeModal} aria-label="Close"></button>
              </div>
            
                <div className="modal-body fw-bold">
                    Return to home? All current game progress will be lost. <br />
                    Are you sure you?
                </div>
                      
              <div className="modal-footer py-1">
              
               <button type="button" className="btn btn-secondary rounded-pill w-25" value={0} onClick={closeModal}>No</button>
               <button type="button" className="btn btn-dark rounded-pill w-25" value={1} onClick={closeModal}>Yes</button>
                
              </div>
            </div>
          </div>
        </div>
      )}

{/* <div className='text-center border border-danger'>
  <i className="bi bi-c-circle"></i>
  </div> */}
        {/* <p><strong>Generated Food Item:</strong> {randomName}</p>
            <p><strong>Synonym (Same Category):</strong> {synonym}</p>
            <div>{playerNames}</div>
            <p>{numPlayers}</p> */}
        </>
    );
};


