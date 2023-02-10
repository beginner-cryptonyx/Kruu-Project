const canvas = document.getElementById("info-scr")
const collapsibles = Array.from(document.getElementsByClassName("collapsable"))
const infocanvas = document.getElementById("info-content")

function switch_content(id, _screen = canvas, _event) {
    var content = document.getElementById(id).innerHTML
    var canv
    if (_screen == '') {
        _screen = canvas
        canv = true
    }

    if (_screen != canvas) {
        _screen = infocanvas
        canv = false
    }

    _screen.innerHTML = content
    if (canv == false) {

        var iter
        for (iter = 0; iter < Array.from(document.getElementsByClassName("hori-item")).length; iter++) {
            Array.from(document.getElementsByClassName("hori-item"))[iter].classList.remove('hori-active')
            console.log(Array.from(document.getElementsByClassName("hori-item"))[iter])
        }

        _event.currentTarget.className += ' hori-active'
    }



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

