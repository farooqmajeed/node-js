var input = document.getElementById("password");
input.addEventListener("keypress", (event) => {
  if (event.key === "Enter") {
    console.log("Enter pressed  ");
    event.preventDefault();
    document.getElementById("button").click();
    document.getElementById("logout").click();
  }
});

function display(form) {
  if (form.username.value == "admin@admin.com") {
    if (form.password.value == "admin") {
      location = "welcome.html";
      console.log("form: " + form.username);
    } else {
      alert("Please enter correct password");
    }
  } else {
    alert("Invalid Username");
  }
}

function logout(){
    location = "index.html";
}
