import React from "react"
import Routes from "./routes"
import AppProvider from "./providers"

import "reset-css"
import GlobalStyles from "./globalStyles"

export default function App() {
	return (
		<AppProvider>
			<GlobalStyles />
			<Routes />
		</AppProvider>
	)
}
