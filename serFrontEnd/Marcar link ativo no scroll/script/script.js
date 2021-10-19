(function(){
    let [s1, s2, s3] = ["s1","s2","s3"].map((e) => (document.getElementById(e)));
    let [a1, a2, a3] = ["#s1", "#s2", "#s3"].map( e => (document.querySelector(`a[href='${e}']`)))

    document.addEventListener("scroll", function() {
        let halfViewPort = window.pageYOffset + (window.innerHeight/2);

        function setActive(element) {
            [a1, a2, a3].map(e => {
                if (e !== element){
                    e.classList.remove("actived");
                } else {
                    e.classList.add("actived");
                }
            })
        }

        if (halfViewPort < s2.offsetTop){
            setActive(a1);
            
        } else if (halfViewPort >= s2.offsetTop && halfViewPort < s3.offsetTop) {
            setActive(a2);

        } else if (halfViewPort >= s3.offsetTop) {
            setActive(a3);

        }


    })
})();