const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting")

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username"

// 대문자 : 스트링으로 쓰기 암묵적인 룰.

// function onLoginBtnClick() {
// const HIDDEN_CLASSNAME = "hidden";

function onLoginSubmit(event) {
    event.preventDefault();
    loginForm.classList.add(HIDDEN_CLASSNAME);
    const username = loginInput.value;
    localStorage.setItem(USERNAME_KEY, username);

   
    paintGreetings(username);


    // console.log(greeting.innerText);


}

function paintGreetings(username) {

    greeting.innerText = `Hello ${username}`;
     // ${변수명}
    // greeting.innerText ="Hello " + username;
    //string의 합 동일
    greeting.classList.remove(HIDDEN_CLASSNAME);


}
const savedUsername = localStorage.getItem(USERNAME_KEY)
if (savedUsername === null) {
    //show the form

    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", onLoginSubmit);
}
else {
    //
    paintGreetings(savedUsername);


}