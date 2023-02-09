function isMobile() {
    return window.innerWidth <= 700;
}



const start = document.getElementById("start_btn")
const header = document.getElementById("title")
const _name = document.getElementById("name")
const _name_btn = document.getElementById("name_btn")
const travel = document.getElementById("travel")
const travel_btn = document.getElementById("travel_btn")
const allergydiv = document.getElementById("allergy")
const allergy_btn = document.getElementById("allergy_btn")
const med = document.getElementById("med-history")
const active_aligns = Array.from(document.getElementsByClassName("radio-align"))
const med_continue = document.getElementById("med-continue")
const vacc = document.getElementById('vaccineQ')
const sideeffbtn = document.getElementById("sideeff_btn")
const addiction_types = document.getElementById("addictions")
const addict_btn = document.getElementById('addict_btn')

var i

for (i = 0; i < active_aligns.length; i++) {
    active_aligns[i].style.maxWidth = 'fit-content'
    active_aligns[i].style.marginLeft = 'auto'
    active_aligns[i].style.marginRight = 'auto'

}



start.addEventListener('click', e => {
    header.classList.add("hidden")
    _name.classList.remove("hidden")
    _name.style.display = 'flex'
    _name.style.flexDirection = "column"
    document.getElementById("__name").style.display = 'flex';
    document.getElementById('__name').style.alignItems = 'center';
    document.getElementById("__name").style.justifyContent = 'center';


    document.getElementById("___name").style.display = 'flex';
    document.getElementById('___name').style.alignItems = 'center';
    document.getElementById("___name").style.justifyContent = 'center';

    document.getElementById("___name").style.marginLeft = 'auto';
    document.getElementById("___name").style.marginRight = 'auto';

});


_name_btn.addEventListener('click', e => {
    _name.classList.add("hidden")
    _name.style.display = 'none'

    travel.classList.remove("hidden")
    travel.style.display = 'flex'
    travel.style.flexDirection = 'column'

})


travel_btn.addEventListener('click', e => {
    travel.classList.add("hidden")
    travel.style.display = 'none'
    allergydiv.classList.remove("hidden")
    allergydiv.style.display = 'flex'
    allergydiv.style.flexDirection = 'column'


})

allergy_btn.addEventListener("click", e => {
    allergydiv.style.display = "none"
    med.classList.remove('hidden')
    med.style.display = 'flex'

})


document.getElementById("chronicyes").addEventListener("change", function () {
    if (document.getElementById("chronicyes").checked) {
        document.getElementById('chronic_container').classList.remove('hidden')
    }
});

document.getElementById("chronicno").addEventListener("change", function () {
    if (document.getElementById("chronicno").checked) {
        document.getElementById('chronic_container').classList.add('hidden')
    }
});

med_continue.addEventListener('click', e => {
    med.style.display = 'none'
    vacc.classList.remove("hidden")
})


document.getElementById("sideeffyes").addEventListener("change", function () {
    if (document.getElementById("sideeffyes").checked) {
        document.getElementById('sideeffans').style.display = "flex"
    }
});

document.getElementById("sideeffno").addEventListener("change", function () {
    if (document.getElementById("sideeffno").checked) {
        document.getElementById('sideeffans').style.display = "none"
    }
});

sideeffbtn.addEventListener('click', e => {
    vacc.classList.add("hidden")
    addiction_types.classList.remove('hidden')
    addiction_types.style.display = 'flex'
    document.getElementById('addiction-container').style.display = 'flex'

})

document.getElementById("alcoholyes").addEventListener("change", function () {
    if (document.getElementById("alcoholyes").checked) {
        document.getElementById('ifyes').classList.remove("hidden")
    }
});

document.getElementById("alcoholno").addEventListener("change", function () {
    if (document.getElementById("alcoholno").checked) {
        document.getElementById('ifyes').classList.add("hidden")


    }
});

document.getElementById("smokingyes").addEventListener("change", function () {
    if (document.getElementById("smokingyes").checked) {
        document.getElementById('ifyessmoking').classList.remove("hidden")
    }
});

document.getElementById("smokingno").addEventListener("change", function () {
    if (document.getElementById("smokingno").checked) {
        document.getElementById('ifyessmoking').classList.add("hidden")


    }
});


addict_btn.addEventListener("click", e => {
    addiction_types.style.display = 'none'
    document.getElementById("concent").classList.remove("hidden")
})