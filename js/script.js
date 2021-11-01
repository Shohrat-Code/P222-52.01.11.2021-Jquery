window.onscroll = function() { myFunction() };
let offsetTop = document.getElementsByClassName("container")[0].offsetTop


function myFunction() {
    // console.log(offsetTop)
    // console.log(document.documentElement.scrollTop)

    if (document.documentElement.scrollTop > offsetTop - 500) {
        document.getElementById("p1").style.transform = "translateX(0px)"
        document.getElementById("p2").style.transform = "translateX(0px)"
    } else {
        document.getElementById("p1").style.transform = "translateX(-800px)"
        document.getElementById("p2").style.transform = "translateX(800px)"
    }
    if (document.body.scrollTop > offsetTop || document.documentElement.scrollTop > offsetTop) {
        document.getElementById("p1").style.transform = "translateX(-800px)"
        document.getElementById("p2").style.transform = "translateX(800px)"
    }
}