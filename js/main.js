var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function () {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
}

const cards = Array.from(document.getElementsByClassName("card"))

for (i = 0; i < cards.length; i++) {
  cards[i].addEventListener('click', e => {
    window.location.href = "./templates/buy.html#info-scr"
  })
}