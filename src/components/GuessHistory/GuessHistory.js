import React from "react";

function GuessHistory({ guesses }) {

	return (
		<div className="guess-results">
			{
				guesses.map(item => {
					return <p key={`guess-${item}`} className="guess">{ item }</p>
				})
			}
		</div>
	)
}

export default GuessHistory;
