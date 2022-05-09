import { useState, useContext, useEffect } from "react"
import { useLottie } from "lottie-react"

import walletAnimation from "../../assets/animations/wallet-icon.json"

import { AuthContext } from "../../providers/AuthProvider"

export default function LogoAnimation({ style }) {
	const { isLoading } = useContext(AuthContext)
	const [options, setOptions] = useState({
		animationData: walletAnimation,
		loop: false,
		autoplay: false,
		style,
		initialSegment: [50, 101],
	})
	const { View, playSegments } = useLottie(options)
	const controller = () => {
		if (isLoading)
			setOptions({
				...options,
				loop: true,
				initialSegment: [0, 101],
			})
		else {
			setOptions({
				...options,
				loop: false,
			})
			playSegments([0, 50])
		}
	}
	useEffect(() => {
		controller()
	}, [isLoading])
	return View
}
