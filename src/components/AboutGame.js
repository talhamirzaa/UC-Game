import React from 'react';

export default function AboutGame() {

    const d = new Date();
    let a=d.getFullYear()

    let myst={
        fontSize:'15px',
        textAlign: 'justify',
        
    }

  return (
    <div className="container d-flex flex-column" style={{height: '90dvh'}}>
      <div className='my-3 mx-1 lh-1' style={myst}>
        The <i className="fw-bold">Undercover</i> Game is a social deduction party game where players take on the roles of either civilians or an undercover agent (UC). Each player receives a word or phrase, but the UC's word is different from the civilians. The objective for the civilians is to identify the UC by explaining their word to the group one by one, while the UC attempts to blend in and avoid detection.
      </div>
      <div className="lh-1 mx-1" style={myst}>
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
        {/* <label>
        The game relies on communication, bluffing, and deduction, making it <i>fun</i> and <i>engaging</i> for groups.
            </label> */}
        <i className="mt-2 text-warning">Disclaimer:- </i>
        <label className="mt-1 ">
            This Game is for Entertainment purpose only.
        </label>
        <label className="mt-2 fw-bold font-monospace" style={{color:'purple'}}>The Game Works Best on Mobile.</label>
      </div>

        <div className="align-self-center mt-auto fs-6">
          <div>Developed by @ <a href="https://github.com/talhamirzaa" className="text-decoration-none1 fw-bold text-dark fst-italic">TM</a></div>
        Copyright<i className="bi bi-c-circle mx-2"></i>{a}
        </div>
      
    </div>
  )
}
