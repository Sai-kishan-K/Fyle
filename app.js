function click1(){
    document.getElementById("imge1").src="image@2x.png"
    document.getElementById("overlay2").setAttribute("style","margin-top:635px; visibility:visible")
    document.getElementById("box1").setAttribute("style","visibility:hidden")
    document.getElementById("box2").setAttribute("style","visibility:visible")
    document.getElementById("box3").setAttribute("style","visibility:visible")
}
function click2(){
    document.getElementById("imge1").src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg"
    document.getElementById("overlay2").setAttribute("style","margin-top:825px; visibility:visible")
    document.getElementById("box2").setAttribute("style","visibility:hidden")
    document.getElementById("box1").setAttribute("style","visibility:visible")
    document.getElementById("box3").setAttribute("style","visibility:visible")
}
function click3(){
    document.getElementById("imge1").src="https://wallpaperaccess.com/full/51364.jpg"
    document.getElementById("overlay2").setAttribute("style","margin-top:1015px; visibility:visible")
    document.getElementById("box3").setAttribute("style","visibility:hidden")
    document.getElementById("box1").setAttribute("style","visibility:visible")
    document.getElementById("box2").setAttribute("style","visibility:visible")
}
function overlay(){
    document.getElementById("overlay").setAttribute("style","display:inline-block; margin-left: 375px")
}
function leave(){
    document.getElementById("overlay").setAttribute("style","display:none")
}
function overlay1(){
    document.getElementById("overlay").setAttribute("style","display:inline-block; margin-left:775px")
}
function leave1(){
    document.getElementById("overlay").setAttribute("style","display:none")
}
function overlay2(){
    document.getElementById("overlay").setAttribute("style","display:inline-block; margin-left:1175px")
}
function leave2(){
    document.getElementById("overlay").setAttribute("style","display:none")
}
function overlay3(){
    document.getElementById("overlay").setAttribute("style","display:inline-block; margin-left:1575px")
}
function leave3(){
    document.getElementById("overlay").setAttribute("style","display:none")
}