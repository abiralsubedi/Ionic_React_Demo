const validatePassword = (password) => {
  if (
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@?#$%^&*])(?=.{8,})/.test(
      password,
    )
  ) {
    return true
  }
  return false
}

export default validatePassword
