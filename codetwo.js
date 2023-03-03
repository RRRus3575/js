"use strict";

const calendarEl = document.querySelector(".calendar");
let prevEl = null;

const handleCalendarClick = ({ target }) => {
  if (target.nodeName !== "TD" || target.textContent === "") {
    return;
  }
  if (prevEl) {
    prevEl.classList.remove("active");
  }
  target.classList.add("active");
  prevEl = target;
};

calendarEl.addEventListener("click", handleCalendarClick);
