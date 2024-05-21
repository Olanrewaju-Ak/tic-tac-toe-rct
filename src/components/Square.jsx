import React from 'react'


const Square = ({value, onSquareClick,isWinner}) => {

	return (
		<button className={`w-[8rem] h-[8rem] border-[1px] border-[#130B1B] text-[black] text-7xl font-permanent-marker hover:bg-[#CCA1F0] ${isWinner? 'bg-[yellow]' : 'bg-[#EFE6DC]' }`} onClick={onSquareClick}>{value}</button>
	)
}

export default Square;