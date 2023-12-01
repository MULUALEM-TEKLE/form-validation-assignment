import { useRef } from "react"
import "./styles.css"
import { useState } from "react"
import { useEffect } from "react"
import { StateForm } from "./StateForm"
import { RefForm } from "./RefForm"
function App() {
	return (
		<>
			<h1>form based on states</h1>
			<StateForm />

			<h1>form based on refs</h1>
			<RefForm />
		</>
	)
}

export default App
