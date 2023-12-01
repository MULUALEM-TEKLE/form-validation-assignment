const validateEmail = (email, setters) => {
	if (email == "") {
		setters("can not be empty")
		return false
	} else if (!email.endsWith("thing")) {
		setters("must end with thing")
		return false
	}
	setters("")
	return true
}

const validatePassword = (password, setters) => {
	// Check if password is required
	if (!password) {
		setters("Password cannot be blank.")
		return false
	}

	// Check if password is 10 characters or longer
	if (password.length < 10) {
		setters("Password must be 10 characters or longer.")
		return false
	}

	// Check if password includes a lowercase letter
	const hasLowercase = /[a-z]/.test(password)
	if (!hasLowercase) {
		setters("Password must include a lowercase letter.")
		return false
	}

	// Check if password includes an uppercase letter
	const hasUppercase = /[A-Z]/.test(password)
	if (!hasUppercase) {
		setters("Password must include an uppercase letter.")
		return false
	}

	// Check if password includes a number
	const hasNumber = /[0-9]/.test(password)
	if (!hasNumber) {
		setters("Password must include a number.")
		return false
	}

	// Password is valid
	setters("")
	return true
}

export { validateEmail, validatePassword }
