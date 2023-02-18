import React from "react";
import { checkGuess } from '../../game-helpers'

function Guess({ guess, id, answer }) {
	const letters = guess != '' ? guess.split('') : ['', '', '', '', '']
	const status = checkGuess(guess, answer)
	let classes

	return (
		<p className="guess" key={id}>
		{
			letters.map((char, index) => {
				classes = `cell`
				if (status != null) {
					classes += ` ${status[index].status}`
				}
				return <span key={Math.random()} className={classes}>{ char }</span>
			})
		}
		</p>
	)
}

export default Guess;
