import { BrowserRouter, Routes, Route } from "react-router-dom"
import SingIn from "../pages/SingIn"
import SingUp from "../pages/SingUp"
export default function Router() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<SingIn />} />
				<Route path="/singup" element={<SingUp />} />
			</Routes>
		</BrowserRouter>
	)
}
