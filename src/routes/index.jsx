import { BrowserRouter, Routes, Route } from "react-router-dom"
import SingIn from "../pages/SingIn"
import SingUp from "../pages/SingUp"
import Flows from "../pages/Flows"
export default function Router() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<SingIn />} />
				<Route path="/singup" element={<SingUp />} />
				<Route path="/flows" element={<Flows />} />
			</Routes>
		</BrowserRouter>
	)
}
