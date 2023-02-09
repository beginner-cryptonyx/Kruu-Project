const start = document.getElementById("start_btn")
const header = document.getElementById("title")
const _name = document.getElementById("name")

start.addEventListener('click',e=>{
    header.classList.add("hidden")
    _name.classList.remove("hidden")
    _name.style.display = 'flex'
    _name.style.flexDirection = "column"
    document.getElementById("__name").style.display = 'flex'
    document.getElementById("__name").style.flexDirection = 'row'
    document.getElementById("__name").style.justifyContent = 'center'



})