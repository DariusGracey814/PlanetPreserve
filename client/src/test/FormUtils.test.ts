import FormUtils from "../../utils/formUtils";

// Form utils validation class
const formUtils: FormUtils = new FormUtils();

describe("Form utils validation test", () => {
  // VALID INPUT TEST CASE

  // Test Username validation function
  test("returns true", () => {
    formUtils.setUsername("Darius");
    const result = formUtils.validateUsername();
    expect(result).toBeTruthy();
  });

  // Test Email validation function
  test("returns true", () => {
    formUtils.setEmail("MyEmail@gmail.com");
    const result = formUtils.validateEmail();
    expect(result).toBeTruthy();
  });

  // Test Password validation function
  test("returns true", () => {
    formUtils.setPassword("12345678");
    const result = formUtils.validatePassword();
    expect(result).toBeTruthy();
  });

  // INVALID INPUT TEST CASE

  // Test Username validation function
  test("returns false", () => {
    formUtils.setUsername("Da");
    const result = formUtils.validateUsername();
    expect(result).toBeFalsy();
  });

  // Test Email validation function
  test("returns false", () => {
    formUtils.setEmail("MyEmailgmailcom");
    const result = formUtils.validateEmail();
    expect(result).toBeFalsy();
  });

  // Test Password validation function
  test("returns false", () => {
    formUtils.setPassword("123456");
    const result = formUtils.validatePassword();
    expect(result).toBeFalsy();
  });
});
