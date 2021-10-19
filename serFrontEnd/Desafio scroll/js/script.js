(function(){
    let bodyFx = document.getElementsByClassName("fx");
    window.addEventListener("scroll", () => {
        if (window.pageYOffset >= 300 && !bodyFx[0]){
            document.body.classList.add("fx")
        } else if (window.pageYOffset < 300 && bodyFx[0]){
            document.body.classList.remove("fx")
        }
        
    })
})();