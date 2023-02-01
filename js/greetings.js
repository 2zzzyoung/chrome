const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");
const todoForm1 = document.querySelector("#todo-form");
const todoList1 = document.querySelector("#todo-list");
const quote1 = document.querySelector("#quote");
const clock1 = document.querySelector("#clock");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function onLoginSubmit(event) {
  event.preventDefault();
  loginForm.classList.add(HIDDEN_CLASSNAME);
  const username = loginInput.value;
  localStorage.setItem(USERNAME_KEY, username);
  paintGreetings(username);
}

function paintGreetings(username) {
  greeting.classList.remove(HIDDEN_CLASSNAME);
  todoForm1.classList.remove(HIDDEN_CLASSNAME);
  todoList1.classList.remove(HIDDEN_CLASSNAME);
  quote1.classList.remove(HIDDEN_CLASSNAME);
  clock1.classList.remove(HIDDEN_CLASSNAME);
  const date = new Date();
  const hours = date.getHours();

  if (hours < 12 && hours > 0) {
    greeting.innerText = `Good Morning, ${username}`;
  } else if (hours > 12 && hours < 18) {
    greeting.innerText = `Good Afternoon, ${username}`;
  } else {
    greeting.innerText = `Good Night, ${username}`;
  }
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

if (savedUsername === null) {
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  loginForm.addEventListener("submit", onLoginSubmit);
} else {
  paintGreetings(savedUsername);
}
