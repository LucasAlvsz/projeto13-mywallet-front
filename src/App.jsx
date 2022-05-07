import Router from "./routes"
import "reset-css"
import GlobalStyles from "./globalStyles"

export default function App() {
	return (
		<>
			<GlobalStyles />
			<Router />
		</>
	)
}
