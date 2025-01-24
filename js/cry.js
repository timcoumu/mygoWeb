var photos = document.querySelector(".photo");
var flag = true;
photos.addEventListener("click",function(e){
    console.log(e.target);
    if(e.target.localName == "img"){
        if(flag){
            e.target.style.width = "100vw";
            flag = false;
        }else{
            e.target.style.width = "100%";
            flag = true;
        }
        
    }
})