import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"

import SingIn from "../pages/SingIn"
import SingUp from "../pages/SingUp"
import Flows from "../pages/Flows"
import NewFlow from "../pages/NewFlow"

export default function Router() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Navigate replace to="/singin" />} />
				<Route path="/singin" element={<SingIn />} />
				<Route path="/singup" element={<SingUp />} />
				<Route path="/flows" element={<Flows />} />
				<Route path="/newflow" element={<NewFlow />} />
			</Routes>
		</BrowserRouter>
	)
}
