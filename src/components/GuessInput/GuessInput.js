import React from "react";

function GuessInput({ guesses, setGuesses, guess, setGuess, setSubmitted, disabled }) {
	const allowed = 'a-zA-ZæøåÆØÅ'
	const allowPattern = `[${allowed}]{5}`
	const disallowPattern = `[^${allowed}]`

	return (
		<form className="guess-input-wrapper" onSubmit={handleSubmit}>
			<label htmlFor="guess-input">Indtast gæt:</label>
			<input disabled={disabled} autoFocus id="guess-input" type="text" pattern={allowPattern} value={guess} onChange={handleInput} />
		</form>
	)

	function handleInput(event) {
		const newGuess = validateGuess(event.target.value)

		setSubmitted(false)
		setGuess(newGuess)
	}

	function handleSubmit(event) {
		event.preventDefault()
		if (disabled) { return }

		const currentGuess = guess
		const newGuesses = [...guesses, guess]

		setGuess('')
		setGuesses(newGuesses)
		setSubmitted(true)
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
