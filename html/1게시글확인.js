// 메인화면에서 게시글 클릭하면 게시글 상세확인 페이지로
let cards = document.getElementsByClassName("card");

for (let i = 0; i < cards.length; i++)
    cards[i].addEventListener("click", function () {
        window.location.href = "1게시글확인.html"
    })