import { useState } from 'react'

import Board from './components/Board';




function Game() {
	const [history, setHistory] = useState([Array(9).fill(null)]);
	const [currentMove,setCurrentMove]= useState(0);
	const xIsNext = currentMove % 2 === 0;
	const currentSquares= history[currentMove];

	function handlePlay(nextSquares){
		const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
  	setHistory(nextHistory);
		setCurrentMove(nextHistory.length-1);
	}

	function jumpTo(nextMove){
		setCurrentMove(nextMove);
   
	}


	const moves = history.map((squares,move)=>{
		let description;
		if(move > 0){
			description = 'Go to move #' + move;
		}
		if(move <=0){
			description = 'Go to game start';
		}
		return(
			<li key={move} >
				<button onClick={()=>jumpTo(move)}>{description}</button>
			</li>
		)
	}
	)

  return (

      <div>
				<h1 className="text-7xl font-tac text-[yellow] tracking-[1rem]">TIC-TAC-TOE</h1>
				<div>
					<Board xIsNext={xIsNext} currentMove={currentMove} squares={currentSquares}  onPlay={handlePlay}/>
				</div>
				<div>
					<ol>{moves}</ol>
				</div>
      </div>
     
   
  )
}

export default Game
