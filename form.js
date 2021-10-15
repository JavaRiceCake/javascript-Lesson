// * form validation
// With custom input error

const form = document.querySelector("#form");
const btnSubmit = document.querySelector("#btnsubmit");
const username = document.querySelector("#username");
const password = document.querySelector("#password");
const errorMsg = document.querySelector("#errorMSG");

btnSubmit.addEventListener("click", (e) => {
    e.preventDefault();

    if (username.value.length === 0 || password.value.length === 0) {
        errorMsg.innerHTML = "<h1 class='errorMsg'>Fill THE FORM</h1>";
        setTimeout(() => errorMsg.firstElementChild.remove(), 2000);
    } else {
        document.getElementById("formProduct").submit();
    }
})