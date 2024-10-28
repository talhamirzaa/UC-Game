import React from 'react';
import { Link } from "react-router-dom";
import { MdArrowBackIos } from "react-icons/md";

export default function AboutGame() {

    const d = new Date();
    let a=d.getFullYear()

    let tst = {
      position: 'fixed',
      top:'0',
      width:'100%',
      color:'#F5F5DC',
      backgroundImage:`url(./abt_gm.png)`,
      backgroundRepeat:'no-repeat',
      backgroundSize: 'cover',
      backgroundPosition:'center'
    }

    let myst={
        fontSize:'1.1rem',
        textAlign: 'justify',
    }

  return (
    <>
    <div className="d-flex flex-column min-vh-100" style={tst}>
    <div className="container d-flex flex-column col col-lg-8 mx-auto mt-5" style={{fontFamily:'cursive'}}>
      
      
      <Link to="/" className="mt-3 text-light" style={{fontSize:'20px'}} ><MdArrowBackIos /></Link>
      <div className='my-2 mx-1 lh-1 mt-md-3' style={myst}>
        The <i className="fw-bold">Undercover</i> Game is a social deduction party game where players take on the roles of either civilians or an undercover agent (UC). Each player receives a word or phrase, but the UC's word is different from the civilians. The objective for the civilians is to identify the UC by explaining their word to the group one by one, while the UC attempts to blend in and avoid detection.
      </div>
      <div className="lh-1 mx-1 mt-md-3" style={myst}>
      <h6 className='fw-bold'>Gameplay Mechanics:</h6>
      <ol>
        <li>
            <b>Setup:</b> Players are randomly assigned roles— most are civilians with the same word, while one is the UC with a different word.
        </li>
        <li className="mt-2">
            <b>Explaining Words:</b> Players take turns explaining their word without directly using it, while trying to provide clues that help others guess their identity.
        </li>
        <li className="mt-2">
            <b>Discussion:</b> Players can discuss and analyze each other's explanations to determine who they believe is the UC.
        </li>
        <li className="mt-2">
            <b>Voting: </b> After all players have explained their words, a vote is held to identify the UC. If the UC is correctly identified, civilians win; if not, the UC wins.
        </li>
      </ol>
        <i className="mt-2 text-warning">Disclaimer:- </i>
        <label className="mt-1 ">
            This Game is for Entertainment purpose only.
        </label>
      </div>      
    </div>

     <footer className='bg-secondary text-light text-center py-3 mt-auto fs-6 rounded-1 '>
     <div>Developed by @ <a href="https://github.com/talhamirzaa" target='_blank' className="fw-bold text-dark fst-italic fs-5">TM</a></div>
        Copyright<i className="bi bi-c-circle mx-1"></i>{a}
   </footer>
   </div>
   </>
  )
}
