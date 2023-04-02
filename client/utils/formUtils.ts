class FormUtils {
  private username: string = "";
  private email: string = "";
  private password: string = "";
  private rePassword: string = "";

  setUsername(username: string): void {
    this.username = username;
  }

  setEmail(email: string): void {
    this.email = email;
  }

  setPassword(password: string): void {
    this.password = password;
  }

  setRePassword(password: string): void {
    this.rePassword = password;
  }

  // Get Form inputs\
  getFormFields(): void {
    console.log(this.username);
    console.log(this.password);
  }

  // Input Validation
  validateUsername(): boolean {
    const usernameIsValid = this.username !== "" && this.username.length >= 6;
    return usernameIsValid;
  }

  validateEmail(): boolean {
    const emailIsValid: boolean =
      this.email.includes("@") && this.email.includes(".") && this.email !== "";
    return emailIsValid;
  }

  validatePassword(): boolean {
    const passwordIsValid: boolean = this.password.trim().length >= 8;
    return passwordIsValid;
  }

  validateRePassword(): boolean {
    return this.rePassword === this.password;
  }
}

export default FormUtils;
