import React, { useState } from 'react'
import Square from './Square'



const Board = ({xIsNext,squares,onPlay}) => {

 const handleClick = (i)=> {

	 if(squares[i] || calculateWinner(squares)){
		 return;
		}
		const nextSquares = squares.slice();

	if(xIsNext){
		nextSquares[i]= 'X';
		
	}
	if(!xIsNext){
		nextSquares[i]='O';
	}
	onPlay(nextSquares);


// const {winner,winningSquares}=calculateWinner(nextSquares);
// if (winner){
// 	setWinningSquares(winningSquares);
// }

}
 
 //create an array for the winning squares
 const[winningSquares, setWinningSquares]=useState([]);

const winner = calculateWinner(squares);
let status;
if(winner){
	status = 'Winner is ' + winner + "!!!";
}
if(!winner && !squares.includes(null)){
	status = 'It is a draw 😀' ;
	
}
if(!winner && squares.includes(null)){
	status = 'Next Player is ' + (xIsNext? 'X' : 'O') 
}


	return (
		<div>
			<h3 className ="text-[red] text-5xl font-permanent-marker">{status}</h3>
		
			<div className="grid grid-cols-3 ">
				<Square value={squares[0]} onSquareClick={()=>handleClick(0)}/>
				<Square value={squares[1]} onSquareClick={()=>handleClick(1)}/>
				<Square value={squares[2]} onSquareClick={()=>handleClick(2)}/>
				<Square value={squares[3]} onSquareClick={()=>handleClick(3)}/>
				<Square value={squares[4]} onSquareClick={()=>handleClick(4)}/>
				<Square value={squares[5]} onSquareClick={()=>handleClick(5)}/>
				<Square value={squares[6]} onSquareClick={()=>handleClick(6)}/>
				<Square value={squares[7]} onSquareClick={()=>handleClick(7)}/>
				<Square value={squares[8]} onSquareClick={()=>handleClick(8)}/>
			</div>
		
		</div>
	)

	function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];
	let boxes=[];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
			let boxes = lines[i];
			console.log(squares[a])
      return  squares[a];
			
    }
  }
  return  null;
}
}


export default Board;