const spans = document.querySelectorAll("span");
const cards = document.querySelectorAll(".card");
const booking_indicators = document.querySelectorAll(".booking_indicator");
function isMobile() {
  return window.innerWidth <= 480;
}


spans.forEach(span => {
  const text = span.textContent.toLowerCase();

  if (text === "booked") {
    span.classList.add("booked");
  } else if (text === "book now") {
    span.classList.add("BookNow");

  }
});


for (let i = 0; i < cards.length; i++) {
  cards[i].style.gridColumn = `${(i % 3) + 1}/${(i % 3) + 1}`;
};



const elements = document.querySelectorAll(".booked");


elements.forEach(element => {
  if (isMobile()) {
    span.textContent = "x";
  }
});