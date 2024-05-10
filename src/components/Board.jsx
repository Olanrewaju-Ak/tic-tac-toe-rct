import React, { useState } from 'react'
import Square from './Square'



const Board = ({xTurn,squares,handleClick, won,winningTiles}) => {

	

 
 //create an array for the winning squares
 //const[winningSquares, setWinningSquares]=useState([]);

 //  const calculateWinner=(squares)=> {
	 
	 //   for (let i = 0; i < lines.length; i++) {
		 //     const [a, b, c] = lines[i];
		 //     if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
			 
			 // 			//setWinningSquares([a,b,c]);
			 // 			//console.log('winning Square:', winningSquares);
			 //       return  squares[a];
			 
			 //     }
			 //   }
			 //   return  null;
			 // }
		



console.log('squares:', squares);
let status;
if(won && squares.includes(null)){
	status = `Winner is ${xTurn? 'O': 'X'} !!!`;
}
if(!won && !squares.includes(null)){
	status = 'It is a draw 😀' ;
	
}
if(!won && squares.includes(null)){
	status = 'Next Player is ' + (xTurn? 'X' : 'O') 
}


	return (
		<div>
			<h3 className ="text-[red] text-5xl font-permanent-marker">{status}</h3>
		
			<div className="grid grid-cols-3 ">
				<Square value={squares[0]} onSquareClick={()=>handleClick(0)} isWinner ={winningTiles.includes(0)}/>
				<Square value={squares[1]} onSquareClick={()=>handleClick(1)} isWinner ={winningTiles.includes(1)}/>
				<Square value={squares[2]} onSquareClick={()=>handleClick(2)} isWinner ={winningTiles.includes(2)}/>
				<Square value={squares[3]} onSquareClick={()=>handleClick(3)} isWinner ={winningTiles.includes(3)}/>
				<Square value={squares[4]} onSquareClick={()=>handleClick(4)} isWinner ={winningTiles.includes(4)}/>
				<Square value={squares[5]} onSquareClick={()=>handleClick(5)} isWinner ={winningTiles.includes(5)}/>
				<Square value={squares[6]} onSquareClick={()=>handleClick(6)} isWinner ={winningTiles.includes(6)}/>
				<Square value={squares[7]} onSquareClick={()=>handleClick(7)} isWinner ={winningTiles.includes(7)}/>
				<Square value={squares[8]} onSquareClick={()=>handleClick(8)} isWinner ={winningTiles.includes(8)}/>
			</div>
		
		</div>
	)

	
}


export default Board;