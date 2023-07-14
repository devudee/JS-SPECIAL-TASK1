const body = document.querySelector("body");
const main = document.getElementById("formContainer");
const div = document.createElement("div");
const h3 = document.createElement("h3");
const p = document.createElement("p");
const form = document.createElement("form");
const email = document.createElement("input");
const password = document.createElement("input");
const button = document.createElement("button");
const footer = document.createElement("footer");
const a = document.createElement("a");
// text content
h3.textContent = "Welcome Back";
p.textContent = "Sign in to your account";

// form attribute
form.setAttribute("method", "post");
form.setAttribute("action", "/submit");

form.appendChild(h3);
form.appendChild(p);
// inputs attributes
// email
email.setAttribute("type", "email");
email.setAttribute("placeholder", "Email");
form.appendChild(email);

// password
password.setAttribute("type", "password");
password.setAttribute("placeholder", "Password");
form.appendChild(password);

// button
button.setAttribute("type", "submit");
button.setAttribute("value", "Submit");
form.appendChild(button);
button.textContent = "Login";

// footer part
footer.textContent = " Don't have an account? ";
footer.classList.add("foot");
a.textContent = "Sign Up";
a.setAttribute("href", "/task 4/signup.html");
a.classList.add("a");

body.appendChild(main);
main.appendChild(form);
form.appendChild(footer);
footer.appendChild(a);

// styles
form.setAttribute(
  "style",
  "background-color: white;  padding: 10px; display:flex; flex-direction: column; gap: 14px; width:100%; "
);
main.setAttribute(
  "style",
  "background-color: silver;padding: 30px; padding:30px; max-width: 100%; height: 60%; display: flex; flex-direction:column; justify-content: center;; align-items: center"
);

p.setAttribute("style", "text-align:center");
h3.classList.add("headn");
email.classList.add("inp");
password.classList.add("inp");
button.classList.add("buttn");
