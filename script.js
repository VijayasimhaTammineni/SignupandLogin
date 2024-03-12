// Login form validation
document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var loginError = document.getElementById("loginError");
  
    // Simple validation, you may need more advanced validation
    if (!email || !password) {
      loginError.textContent = "Please fill in all fields.";
      return;
    }
  
    // Perform login authentication here (e.g., sending data to a server)
    // This is a basic example, you should implement a secure authentication mechanism
    if (email === "example@example.com" && password === "password") {
      loginError.textContent = ""; // Clear any previous error messages
      alert("Login successful!");
    } else {
      loginError.textContent = "Invalid email or password.";
    }
  });
  
  // Signup form validation
  document.getElementById("signupForm").addEventListener("submit", function(event) {
    event.preventDefault();
    var username = document.getElementById("username").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var signupError = document.getElementById("signupError");
  
    // Simple validation, you may need more advanced validation
    if (!username || !email || !password) {
      signupError.textContent = "Please fill in all fields.";
      return;
    }
  
    // Perform signup process here (e.g., sending data to a server)
    // This is a basic example, you should implement proper server-side validation and user creation
    signupError.textContent = ""; // Clear any previous error messages
    alert("Signup successful!");
  });
  