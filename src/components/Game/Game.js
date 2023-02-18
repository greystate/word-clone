import React from 'react';

import { sample } from '../../utils'
import { WORDS } from '../../data'
import GuessInput from '../GuessInput'
import GuessHistory from '../GuessHistory'
import Banner from '../Banner'


// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
	const [guesses, setGuesses] = React.useState([])
	const [guess, setGuess] = React.useState('')
	const [submitted, setSubmitted] = React.useState(false)

	let state = ''
	let info = ''
	const lastGuess = guesses.at(-1)
	let disabled = false

	if (submitted) {
		if (lastGuess === answer) {
			state = 'happy'
			info = guesses.length
			disabled = true
		} else if (guesses.length >= 6) {
			state = 'sad'
			info = answer
			disabled = true
		}
	}

	return <>
		<GuessHistory guesses={guesses} answer={answer} />
		<GuessInput disabled={disabled} setSubmitted={setSubmitted} guess={guess} setGuess={setGuess} guesses={guesses} setGuesses={setGuesses} />
		<Banner state={state} info={info} />
	</>
}

export default Game;
