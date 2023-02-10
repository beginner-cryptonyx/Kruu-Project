var dropdowns = Array.from(document.getElementsByClassName("content"))
console.log('dropdown js loaded')

function _toggle(id) {
    console.log('t')
    // document.getElementById(id).classList.toggle("show")
    if (document.getElementById(id).style.display != 'flex') {
        document.getElementById(id).style.display = 'flex'
        document.getElementById(id).style.flexDirection = 'column'
    } else {
        document.getElementById(id).style.display = 'none'
    }


}

function dropdown_react(id, text) {
    document.getElementById(id).textContent = text
}

window.onclick = function (event) {
    if (!event.target.matches('.dropdownbtn')) {
        var i;
        for (i = 0; i < dropdowns.length; i++) {
            if (dropdowns[i].classList.contains('show')) {
                dropdowns[i].classList.remove('show')
            }
        }
    }
}