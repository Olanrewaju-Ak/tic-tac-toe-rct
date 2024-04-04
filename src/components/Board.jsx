import React from 'react'
import Square from './Square'

const Board = () => {
	return (
		<div>
			<h2>Board</h2>
		<div className="grid">
			<div>
				<Square/>
				<Square/>
				<Square/>
			</div>
			<div>
				<Square/>
				<Square/>
				<Square/>
			</div>
			<div>
				<Square/>
				<Square/>
				<Square/>
			</div>
		</div>
		</div>
	)
}

export default Board