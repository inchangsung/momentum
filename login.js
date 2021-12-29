const loginForm = document.querySelector("#login-form")
console.log(loginForm)
const loginInput = loginForm.querySelector("input")
console.log(loginInput)

function onLoginSubmit(event){
    event.preventDefault()
    const username = loginInput.value
    localStorage.setItem("username", username)
    //sayHello(username)
    hello.innerText = `hello, ${username}`
    loginForm.classList.add("hidden")
}
loginForm.addEventListener("submit", onLoginSubmit)

const hello = document.querySelector("#hello")
/*
function sayHello(username){
    hello.innerText = `hello, ${username}`
}
*/
const username = localStorage.getItem("username")


if(username === null){

}else{
    hello.innerText = `hello, ${username}`
    loginForm.classList.add("hidden")

}