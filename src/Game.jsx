import { useState } from 'react'

import Board from './components/Board';



function Game() {
  const [history, setHistory] = useState(Array(9).fill(null));

  return (

      <div>
      <h1 className="text-3xl font-bold underline ">TIC-TAC-TOE</h1>
			<button>Moves History</button>
			<Board/>
      
      </div>
     
   
  )
}

export default Game
