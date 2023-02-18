import React from "react";

function Guess({ guess, id }) {
	const letters = guess != '' ? guess.split('') : ['', '', '', '', '']

	return (
		<p className="guess" key={id}>
		{
			letters.map(char => {
				return <span key={Math.random()} className="cell">{ char }</span>
			})
		}
		</p>
	)
}

export default Guess;
