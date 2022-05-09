import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"

import SignIn from "../pages/SignIn"
import SignUp from "../pages/SignUp"
import Flows from "../pages/Flows"
import NewFlow from "../pages/NewFlow"

export default function Router() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Navigate replace to="/signIn" />} />
				<Route path="/signIn" element={<SignIn />} />
				<Route path="/signUp" element={<SignUp />} />
				<Route path="/flows" element={<Flows />} />
				<Route path="/newflow" element={<NewFlow />} />
			</Routes>
		</BrowserRouter>
	)
}
