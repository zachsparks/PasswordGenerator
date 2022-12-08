// Generate a random password that is 8 characters long
function generatePassword() {
  // Set up the possible characters that can be used in the password
  var chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890!@#$%^&*()_+-=[]{};':\"|,.<>/?`~";

  // Start with an empty password
  var password = "";

  // Loop through the password and add a random character from the possible characters at each step
  for (var i = 0; i < 8; i++) {
    password += chars.charAt(Math.floor(Math.random() * chars.length));
  }

  // Return the generated password
  return password;
}


