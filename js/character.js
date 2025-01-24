
var li = document.querySelector(".character-box ul");
li.addEventListener("click", function (e) {
    console.log(e.target);
    console.dir(e.target);
    console.log(e.target.dataset.class);
    if (e.target.className == "c-img") {
        console.log("正到反");
        var frontNode = e.target.parentNode;
        var backNode = e.target.parentNode.parentNode.lastElementChild;
        frontNode.style.transform = "rotateY(180deg)";
        backNode.style.transform = "rotateY(0)";
    } else if (e.target.dataset.class == "back") {
        console.log("反到正");
        var frontNode = e.target.parentNode.firstElementChild;
        var backNode = e.target;
        frontNode.style.transform = "rotateY(0)";
        backNode.style.transform = "rotateY(180deg)";
    }
});