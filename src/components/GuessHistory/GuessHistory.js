import React from "react";
import Guess from '../Guess'
import { NUM_OF_GUESSES_ALLOWED } from '../../constants'

function GuessHistory({ guesses, answer }) {
	const words = ([...guesses])

	for (let w = words.length; w < NUM_OF_GUESSES_ALLOWED; w++) {
		words.push('')
	}

	return (
		<div className="guess-results">
			{
				words.map(item => {
					return <Guess guess={item} key={Math.random()} answer={answer} />
				})
			}
		</div>
	)
}

export default GuessHistory;
