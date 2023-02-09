const canvas = document.getElementById("info-scr")
const collapsibles = Array.from(document.getElementsByClassName("collapsable"))

function switch_content(id) {
    var content = document.getElementById(id).innerHTML
    canvas.innerHTML = content
}


let i
for (i = 0; i < collapsibles.length; i++) {
    collapsibles[i].addEventListener("click", function () {
        const cont = this.nextElementSibling
        if (cont.style.maxHeight) {
            cont.style.maxHeight = null;
        } else {
            cont.style.maxHeight = cont.scrollHeight + "px";
        }
    })
}
