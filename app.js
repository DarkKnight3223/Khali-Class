const DAYS = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

const dayEl = document.getElementById("day");
const timeEl = document.getElementById("time");
const acEl = document.getElementById("acOnly");
const nowBtn = document.getElementById("nowBtn");
const resultsEl = document.getElementById("results");
const summaryEl = document.getElementById("summary");

function toMinutes(t) {
  const [h, m] = t.split(":").map(Number);
  return h * 60 + m;
}

function toLabel(mins) {
  const h = Math.floor(mins / 60);
  const m = String(mins % 60).padStart(2, "0");
  const suffix = h >= 12 ? "PM" : "AM";
  const h12 = h % 12 === 0 ? 12 : h % 12;
  return `${h12}:${m} ${suffix}`;
}

// Returns { free, until, current } for a room at a given day/time (minutes)
function roomStatus(room, day, minutes) {
  const slots = (room.schedule[day] || [])
    .map(([s, e, label]) => ({ start: toMinutes(s), end: toMinutes(e), label }))
    .sort((a, b) => a.start - b.start);

  const current = slots.find(s => minutes >= s.start && minutes < s.end);
  if (current) return { free: false, current, until: null };

  const next = slots.find(s => s.start > minutes);
  return { free: true, current: null, until: next ? next.start : null };
}

function setNow() {
  const now = new Date();
  dayEl.value = DAYS[now.getDay()];
  timeEl.value = now.toTimeString().slice(0, 5);
  render();
}

function render() {
  const day = dayEl.value;
  const minutes = toMinutes(timeEl.value || "00:00");
  const acOnly = acEl.checked;

  const free = ROOMS
    .map(room => ({ room, status: roomStatus(room, day, minutes) }))
    .filter(x => x.status.free && (!acOnly || x.room.ac));

  summaryEl.textContent =
    `${free.length} of ${ROOMS.length} classrooms free on ${day} at ${toLabel(minutes)}` +
    (acOnly ? " (AC working only)" : "");

  resultsEl.innerHTML = "";
  if (free.length === 0) {
    resultsEl.innerHTML = '<p class="empty">No free classrooms match. Try another time.</p>';
    return;
  }

  free.forEach(({ room, status }) => {
    const card = document.createElement("article");
    card.className = "card";
    const until = status.until
      ? `Free until ${toLabel(status.until)}`
      : "Free for the rest of the day";
    card.innerHTML = `
      <h3>${room.name}</h3>
      <p class="meta">${until}</p>
      <span class="badge ${room.ac ? "ac-ok" : "ac-bad"}">
        AC ${room.ac ? "working" : "not working"}
      </span>`;
    resultsEl.appendChild(card);
  });
}

[dayEl, timeEl, acEl].forEach(el => el.addEventListener("input", render));
nowBtn.addEventListener("click", setNow);
setNow();
