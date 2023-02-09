var dropdowns = Array.from(document.getElementsByClassName("content"))

function toggle(id){
    document.getElementById(id).classList.toggle("show")
}

function dropdown_react(id, text){
    document.getElementById(id).textContent = text
}

window.onclick = function(event){
    if (!event.target.matches('.dropdownbtn')){
        var i;
        for (i = 0; i < dropdowns.length; i++){
            if (dropdowns[i].classList.contains('show')){
                dropdowns[i].classList.remove('show')
            }
        }
    }
}