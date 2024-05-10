import React from 'react'


const Square = ({value, onSquareClick,isWinner}) => {

	return (
		<button className={`w-[10rem] h-[10rem] border-[1px] border-[#1E3A2B] text-[black] text-7xl font-permanent-marker ${isWinner? 'bg-[#FFC0CB]' : 'bg-[#EFE6DC]' }`} onClick={onSquareClick}>{value}</button>
	)
}

export default Square;