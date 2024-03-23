
// 회원가입 모달창 js

let body = document.querySelector("body");
let modal = document.getElementById("modal");
let modalLogin = document.getElementById("modal-body-login");
let modalJoin = document.getElementById("modal-body-join");
let closejoin = document.getElementById("btn-close-join");


// 회원가입 버튼에 클릭 이벤트리스너 추가
// : 첫화면이 아닌, 로그인 클릭하면 나오는 모달창에 있기 때문에 

document.addEventListener("DOMContentLoaded", function () {
    document.addEventListener("click", function (e) {
        if (e.target.id == "div-jointxt") {
            showJoinModal();
        }
    })


    function showJoinModal() {
        // 회원가입 모달창 띄우기
        modal.style.display = "block";
        modalJoin.style.overflow = "hidden";
        // 로그인 모달창 없애기
        modalLogin.style.display = "none";
        // 회원가입 폼 띄우기
        modalJoin.style.display = "block";

        closejoin.addEventListener("click", function () {
            removeModal();
        })
    }


    function removeModal() {
        modal.style.display = "none";
        body.style.overflow = "auto";
    }

    // 바깥 영역 클릭하면 닫히게
    document.addEventListener("mouseup", function (e) {
        if (!modalLogin.contains(e.target) && !modalJoin.contains(e.target)) {
            removeModal();
        }
    });

});