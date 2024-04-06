import React from 'react'


const Square = ({value, onSquareClick}) => {


	return (
		<button className="w-[10rem] h-[10rem] bg-white border-[1px] text-[blue] text-lg" onClick={onSquareClick}>{value}</button>
	)
}

export default Square;