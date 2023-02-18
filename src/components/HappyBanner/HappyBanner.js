import React from "react";

function HappyBanner({ info }) {
	return (
		<div class="happy banner">
			<p>
				<strong>Congratulations!</strong>
				{' Got it in '}
				<strong>{info} guesses</strong>.
			</p>
		</div>
	)
}

export default HappyBanner;
