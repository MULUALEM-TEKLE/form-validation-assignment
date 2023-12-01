import { useRef, useState } from "react"
import { validateEmail, validatePassword } from "./validators"
export function RefForm() {
	const emailRef = useRef()
	const passwordRef = useRef()

	const [emailError, setEmailError] = useState("")
	const [passwordError, setPasswordError] = useState("")

	let [submitted, setSubmitted] = useState(false)

	const handleFormSubmit = (event) => {
		event.preventDefault()
		setSubmitted(true)
		if (
			validateEmail(emailRef.current.value, setEmailError) &&
			validatePassword(passwordRef.current.value, setPasswordError)
		) {
			alert("aight")
		}
	}

	return (
		<>
			<form onSubmit={handleFormSubmit} className="form">
				<div className={`form-group ${passwordError ? "error" : ""}`}>
					<label className="label" htmlFor="email">
						Email
					</label>
					<input
						ref={emailRef}
						className="input"
						type="email"
						id="email"
						onChange={(e) => {
							if (submitted) validateEmail(e.target.value, setEmailError)
						}}
					/>
					<div className="msg">{emailError}</div>
				</div>
				<div className={`form-group ${passwordError ? "error" : ""}`}>
					<label className="label" htmlFor="password">
						Password
					</label>
					<input
						ref={passwordRef}
						className="input"
						defaultValue="Password123!"
						type="password"
						id="password"
						onChange={(e) => {
							if (submitted) validatePassword(e.target.value, setPasswordError)
						}}
					/>
					<div className="msg">{passwordError}</div>
				</div>
				<button className="btn" type="submit">
					Submit
				</button>
			</form>
		</>
	)
}
