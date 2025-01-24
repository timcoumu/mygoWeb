var text = document.querySelector(".middle-text");
text.onclick = function(){
    var flag = false;
    while(!flag){
        flag = confirm("一生 バンドしてくれる？\n能陪我组一辈子的乐队吗？");
    }
}