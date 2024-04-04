import { useState } from 'react'

import Board from './components/Board';



function Game() {
  const [count, setCount] = useState(0)

  return (

      <div>
      <h1 className="text-3xl font-bold underline ">TIC-TAC-TOE</h1>
			<Board/>
      
      </div>
     
   
  )
}

export default Game
