import { useState, useEffect } from 'react'

import Board from './components/Board';




function Game() {
	const [history, setHistory] = useState([Array(9).fill(null)]);
	const [currentMove,setCurrentMove]= useState(0);
	const currentSquares= history[currentMove];
	const [xTurn, setXTurn] = useState(true);
	const [won, setWon]= useState(false);
	const [winningTiles,setWinningTiles]=useState([]);
	const [showMoves,setShowMoves]= useState(false);

		 
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
				<button className="w-[150px] border-[1px] py-1 border-[#130B1B] hover:bg-[#ffff00a5] text-[white] font-bold" onClick={()=>jumpTo(move)}>{description}</button>
			</li>
		)
	}
	)


	let status;
if(won ){
	status = `Winner is ${xTurn? 'O': 'X'} !!!`;
}
if(!won && !currentSquares.includes(null)){
	status = 'It is a draw 😀' ;
	
}
if(!won && currentSquares.includes(null)){
	status = 'Next Player is : ' + (xTurn? 'X' : 'O') 
}

//To restart game
const handleRestart = ()=> {
	setShowMoves(false)
	setHistory([Array(9).fill(null)])
	setXTurn(true)
	setWon(false)
	setCurrentMove(0)
	setWinningTiles([]);

}


  return (

      <div>
				<h1 className="text-6xl font-danfo text-[yellow] tracking-wider">TIC-TAC-TOE</h1>
				<h3 className ="text-[red] text-4xl font-permanent-marker my-4">{status}</h3>
				<div className="flex gap-[10rem]">
					<div>
						<Board xTurn={xTurn} currentMove={currentMove} squares={currentSquares}  onPlay={handlePlay} handleClick={handleClick} won ={won} winningTiles={winningTiles}/>
					</div>
					<div>
						<button className="w-[150px] text-center bg-[#7B47AE] border-[1px] py-1 border-[#130B1B] text-[white] font-bold" onClick={()=>{setShowMoves(!showMoves)}}>Show Moves List</button>
						
						<ol className={showMoves? "overflow-hidden transition-all duration-300 ease-in-out opacity-100 bg-[#7B47AE] text-center" : "opacity-0"}>
							{moves}</ol>
					</div>
				</div>
				<div>
					<button className="w-[200px] text-center bg-[#7B47AE] border-[1px] py-1 border-[#130B1B] my-6 text-[1.2rem] text-[white] font-bold" onClick={
					handleRestart}>Restart Game</button>
				</div>
      </div>
     
   
  )
}

export default Game
