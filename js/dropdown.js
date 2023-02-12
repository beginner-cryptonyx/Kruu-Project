var dropdowns = Array.from(document.getElementsByClassName("content"))
console.log('dropdown js loaded')

function _toggle(id) {

    if (document.getElementById(id).style.display != 'flex') {
        document.getElementById(id).style.display = 'flex'
        document.getElementById(id).style.flexDirection = 'column'
    } else {
        document.getElementById(id).style.display = 'none'
    }
}
function exit(id) {
    document.getElementById(id).style.display = 'none'
}

function dropdown_react(id, text) {
    document.getElementById(id).textContent = text
}

window.onclick = function (event) {
    if (!event.target.matches('.dropdown')) {
        var i;
        for (i = 0; i < dropdowns.length; i++) {
            if (dropdowns[i].classList.contains('show')) {
                dropdowns[i].classList.remove('show')
            }
        }
    }
}

