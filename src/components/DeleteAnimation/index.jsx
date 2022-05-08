import { useState, useContext, useEffect } from "react"
import { useLottie } from "lottie-react"

import deleteAnimation from "../../assets/animations/delete.json"

import { AuthContext } from "../../providers/AuthProvider"

export default function DeleteAnimation({ style, OnHover }) {
	const { isLoading } = useContext(AuthContext)
	const [options, setOptions] = useState({
		animationData: deleteAnimation,
		// autoplay: true,
		style: {
			width: "100px",
			height: "100px",
			background: "#fff",
			margin: "100px auto",
		},
		// initialSegment: [0, 25],
	})
	const lottieObj = useLottie(options)
	const { View, playSegments } = lottieObj
	if (OnHover) playSegments([25, 60])

	return View
}
