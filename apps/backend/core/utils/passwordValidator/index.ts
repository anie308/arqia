export const checkPassword = (password: string, confirmation: string) => {
    if (password && password != confirmation) {
        return {
            success: false,
            message: "Password and Confirmation do not Match",
            data:[]
        }
    }

 // Define regular expressions for uppercase letter, digit, and special character
 const uppercaseRegex = /[A-Z]/;
 const digitRegex = /\d/;
 const specialCharRegex = /[^a-zA-Z0-9]/;

 // Check if the password meets the criteria
 const hasUppercase = uppercaseRegex.test(password);
 const hasDigit = digitRegex.test(password);
 const hasSpecialChar = specialCharRegex.test(password);

 if (!hasUppercase || !hasDigit || !hasSpecialChar) {
     return { success: false, message: "Password Must Include At Least a Capital Letter, a Number, and a Special Character." , data:[]};
 }
 return { success: true, message: "All checks passed." , data:[]};
}