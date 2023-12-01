import { useState, useEffect } from "react"
import { validateEmail, validatePassword } from "./validators"
export function StateForm() {
	const [email, setEmail] = useState("")
	const [password, setPassword] = useState("")

	const [emailError, setEmailError] = useState("")
	const [passwordError, setPasswordError] = useState("")

	let [submitted, setSubmitted] = useState(false)

	const handleFormSubmit = (event) => {
		event.preventDefault()
		if (!submitted) setSubmitted(true)
		if (
			validateEmail(email, setEmailError) &&
			validatePassword(password, setPasswordError)
		) {
			alert("aight")
		}
	}

	useEffect(() => {
		console.log(submitted)
		if (submitted) {
			console.log("either name or password changed")
			validateEmail(email, setEmailError)
			validatePassword(password, setPasswordError)
		}
	}, [email, password])

	return (
		<>
			<form onSubmit={handleFormSubmit} className="form">
				<div className="form-group error">
					<label className="label" htmlFor="email">
						Email
					</label>
					<input
						value={email}
						className="input"
						type="email"
						id="email"
						onChange={(e) => {
							setEmail(e.target.value)
						}}
					/>
					<div className="msg">{emailError}</div>
				</div>
				<div className="form-group">
					<label className="label" htmlFor="password">
						Password
					</label>
					<input
						value={password}
						className="input"
						type="password"
						id="password"
						onChange={(e) => {
							setPassword(e.target.value)
						}}
					/>
				</div>
				<div className="msg">{passwordError}</div>
				<button className="btn" type="submit">
					Submit
				</button>
			</form>
		</>
	)
}
