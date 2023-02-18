import React from "react";
import HappyBanner from '../HappyBanner'
import SadBanner from '../SadBanner'

function Banner({ state, info }) {
	if (state == 'happy') {
		return <HappyBanner info={info} />
	} else if (state == 'sad') {
		return <SadBanner info={info} />
	} else {
		return
	}
}

export default Banner;
