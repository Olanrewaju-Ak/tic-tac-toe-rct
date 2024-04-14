import React from 'react'


const Square = ({value, onSquareClick}) => {


	return (
		<button className="w-[10rem] h-[10rem] bg-[#EFE6DC] border-[1px] border-[#1E3A2B] text-[black] text-5xl" onClick={onSquareClick}>{value}</button>
	)
}

export default Square;