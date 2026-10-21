/* Small helpers shared by every page. */

/* Weekly OPD timings. Edit here if the schedule changes.
   0 = Sunday, 1 = Monday ... 6 = Saturday. null = no OPD. */
var OPD = {
  0: null,
  1: "9 am – 5 pm",
  2: "9 am – 2 pm",
  3: "9 am – 5 pm",
  4: "9 am – 5 pm",
  5: "9 am – 5 pm",
  6: "9 am – 5 pm"
};
var DAY_NAMES = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

/* Uses Indian time, so the "today" display is right wherever the visitor is. */
function nowInIndia() {
  var parts = new Intl.DateTimeFormat("en-GB", {
    timeZone: "Asia/Kolkata", year: "numeric", month: "numeric", day: "numeric"
  }).formatToParts(new Date());
  var get = function (t) { return +parts.find(function (p) { return p.type === t; }).value; };
  return new Date(get("year"), get("month") - 1, get("day"));
}

function hoursFor(date) {
  var day = date.getDay();
  var hours = OPD[day];
  // Third Friday of the month: OPD 9 am – 2 pm
  if (day === 5 && date.getDate() >= 15 && date.getDate() <= 21) {
    return { hours: "9 am – 2 pm", note: "Third Friday of the month: shorter hours" };
  }
  return { hours: hours, note: "" };
}

document.addEventListener("DOMContentLoaded", function () {
  // Mobile menu
  var toggle = document.querySelector(".menu-toggle");
  var nav = document.querySelector(".nav");
  if (toggle && nav) {
    toggle.addEventListener("click", function () {
      var open = nav.classList.toggle("open");
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
      toggle.textContent = open ? "Close" : "Menu";
    });
  }

  var today = nowInIndia();
  var info = hoursFor(today);

  // "OPD today" card on the home page
  var card = document.querySelector("[data-today]");
  if (card) {
    var label = card.querySelector(".today-label");
    var hrs = card.querySelector(".today-hours");
    var note = card.querySelector(".today-note");
    label.innerHTML = '<span class="dot" aria-hidden="true"></span>OPD today, ' + DAY_NAMES[today.getDay()];
    if (info.hours) {
      hrs.textContent = info.hours;
      note.textContent = info.note || "Hitech Medicare Hospital, Udupi";
    } else {
      card.classList.add("closed");
      hrs.textContent = "No OPD today";
      note.textContent = "Next OPD: Monday, 9 am – 5 pm";
    }
  }

  // Highlight today's row in any schedule table
  var row = document.querySelector('.schedule tr[data-day="' + today.getDay() + '"]');
  if (row) row.classList.add("is-today");

  // Footer year
  var y = document.querySelector("[data-year]");
  if (y) y.textContent = today.getFullYear();
});
