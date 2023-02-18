import React from "react";

function SadBanner({ info }) {
	return (
		<div className="sad banner">
			<p>Sorry, the correct answer is <strong>{ info }</strong>.</p>
		</div>
	)
}

export default SadBanner;
