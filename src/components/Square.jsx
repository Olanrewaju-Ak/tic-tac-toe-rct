import React from 'react'


const Square = ({value, onSquareClick}) => {
const handleClick =()=>{
	setValue('X');
}

	return (
		<button className="w-[5rem] h-[5rem] bg-white border-2 text-[blue] text-lg" onClick={onSquareClick}>{value}</button>
	)
}

export default Square;