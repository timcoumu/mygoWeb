var span = document.querySelector("span");
var sound = document.querySelector("audio");
var img = document.querySelector("img");
document.onclick = function(){
    sound.play();
}
span.onclick = function(){
    if(!sound.paused){
        setTimeout(function(){
            window.location.href = "https://www.bilibili.com/bangumi/play/ss73081";
        },500);
        img.src = "./img/ave-knock22.png";
    }
}
