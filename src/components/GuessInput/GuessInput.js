import React from "react";

function GuessInput({ guesses, setGuesses }) {
	const allowed = 'a-zA-ZæøåÆØÅ'
	const allowPattern = `[${allowed}]{5}`
	const disallowPattern = `[^${allowed}]`
	const [guess, setGuess] = React.useState('')

	return (
		<form className="guess-input-wrapper" onSubmit={handleSubmit}>
			<label htmlFor="guess-input">Indtast gæt:</label>
			<input autoFocus id="guess-input" type="text" pattern={allowPattern} value={guess} onChange={handleInput} />
		</form>
	)

	function handleInput(event) {
		const newGuess = validateGuess(event.target.value)

		setGuess(newGuess)
	}

	function handleSubmit(event) {
		event.preventDefault()
		const currentGuess = guess
		const newGuesses = [...guesses, guess]

		// Do stuff ...
		console.log({ guess: currentGuess })

		setGuess('')
		setGuesses(newGuesses)
	}

	function validateGuess(value) {
		// Make uppercase
		let validated = value.toUpperCase()

		// Remove illegal characters
		let invalidRE = new RegExp(disallowPattern)
		validated = validated.replace(invalidRE, '')

		// Take first five letters only
		validated = validated.substring(0, 5)

		return validated
	}
}

export default GuessInput;
