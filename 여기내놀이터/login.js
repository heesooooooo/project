
// 로그인 모달창 js
let body = document.querySelector("body");
let modal = document.getElementById("modal");
let modalLogin = document.getElementById("modal-body-login");
let modalJoin = document.getElementById("modal-body-join");
let close = document.getElementsByClassName("btn-close")[0];

// document.addEventListener("DOMContentLoaded", function () {
let login = document.getElementById("btn-login");
login.addEventListener("click", function () {
    showLoginModal();
});

function showLoginModal() {
    modal.style.display = "block";
    body.style.overflow = "hidden";
    modalLogin.style.display = "block";
    modalJoin.style.display = "none";

    close.addEventListener("click", function () {
        removeModal();
    })
}

function removeModal() {
    modal.style.display = "none";
    body.style.overflow = "auto";
}
// 여기까지 로그인 모달창 js

