const soyo = document.querySelector(".soyo");
var times = 0;
soyo.onclick = function(){
    times++;
    if(times == 3){
        window.location = "./cry.html";
        times = 0;
    }
}