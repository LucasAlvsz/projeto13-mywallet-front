import { BrowserRouter, Routes, Route } from "react-router-dom"

import SingIn from "../pages/SingIn"
import SingUp from "../pages/SingUp"
import Flows from "../pages/Flows"
import NewFlow from "../pages/NewFlow"

export default function Router() {
	return (
		<BrowserRouter>
			<Routes>
				{/* <Redirect exact from="/" to="/singin" /> */}
				<Route path="/" element={<SingIn />} />
				<Route path="/singup" element={<SingUp />} />
				<Route path="/flows" element={<Flows />} />
				<Route path="/newflow" element={<NewFlow />} />
			</Routes>
		</BrowserRouter>
	)
}
