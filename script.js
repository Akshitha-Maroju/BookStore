function login() {
  const username = document.getElementById("username").value.trim();
  const password = document.getElementById("password").value.trim();
  const error = document.getElementById("error");

  if (username === "admin" && password === "1234") {
    window.location.href = "bookstore.html";
  } else {
    error.textContent = "Invalid username or password.";
  }
}

