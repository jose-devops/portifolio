var btn = document.querySelector("#show-or-hide");
var conteudo2 = document.querySelector(".conteudo2");

btn.addEventListener("click", function(){
    if(conteudo2.style.display ==="block"){
        conteudo2.style.display = "none";


    }else {
        conteudo2.style.display = "block;"
    }
});