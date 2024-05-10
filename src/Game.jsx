import { useState, useEffect } from 'react'

import Board from './components/Board';




function Game() {
	const [history, setHistory] = useState([Array(9).fill(null)]);
	const [currentMove,setCurrentMove]= useState(0);
	const currentSquares= history[currentMove];
	const [xTurn, setXTurn] = useState(true);
	const [won, setWon]= useState(false);
	const [winningTiles,setWinningTiles]=useState([]);

		 
const WINNING_COMBO = [
				 [0, 1, 2],
				 [3, 4, 5],
				 [6, 7, 8],
				 [0, 3, 6],
				 [1, 4, 7],
				 [2, 5, 8],
				 [0, 4, 8],
				 [2, 4, 6]
			 ];

			 
const calculateWinner=()=> {

  for (let i = 0; i < WINNING_COMBO.length; i++) {
    const [a, b, c] = WINNING_COMBO[i];
    if (currentSquares[a] && currentSquares[a] === currentSquares[b] && currentSquares[a] === currentSquares[c]) {
			setWon(!won);
			setWinningTiles([a,b,c]);
    }
  }
}

useEffect(()=>{
	calculateWinner();
},[history])




const handleClick = (i) => {

	const nextSquares = currentSquares.slice();
	if(!currentSquares[i] && !won){
		 nextSquares[i] = xTurn===true ? 'X' : 'O';
		handlePlay(nextSquares)
		setXTurn(!xTurn)

	}

}

	function handlePlay(nextSquares){
		const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
  	setHistory(nextHistory);
		setCurrentMove(nextHistory.length-1);
	}

	function jumpTo(nextMove){
		setCurrentMove(nextMove);
   
	}





	//Setting Moves History
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
					<Board xTurn={xTurn} currentMove={currentMove} squares={currentSquares}  onPlay={handlePlay} handleClick={handleClick} won ={won} winningTiles={winningTiles}/>
				</div>
				<div>
					<h3>moves</h3>
					<ol>{moves}</ol>
				</div>
      </div>
     
   
  )
}

export default Game
