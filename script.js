function addData() {
  const email = document.getElementById('email').value;
  const name = document.getElementById('name').value;
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;

  // Save user data to local storage
  const userData = {
    email,
    name,
    username,
    password
  };
  localStorage.setItem('userData', JSON.stringify(userData));

  alert("Successfully signed up!");
  window.location.href = "./index.html";
}

function loginUser() {
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;

  // Retrieve user data from local storage
  const storedUserData = localStorage.getItem('userData');
  if (storedUserData) {
    const userData = JSON.parse(storedUserData);

    // Check if the provided email and password match
    if (userData.username === username && userData.password === password) {
      window.location.href = "HomePage/home.html";
      alert('Login successful!');
    } else {
      alert('Login failed: Invalid username or password');
    }
  } else {
    alert('User not found. Please sign up.');
  }
}