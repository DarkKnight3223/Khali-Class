const DAYS = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

const dayEl = document.getElementById("day");
const timeEl = document.getElementById("time");
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

const MIN_FREE = 15; // gaps shorter than this (in minutes) between classes count as busy

// Returns { free, until } for a room at a given day/time (minutes)
function roomStatus(room, day, minutes) {
  const slots = (room.schedule[day] || [])
    .map(([s, e]) => [toMinutes(s), toMinutes(e)])
    .sort((a, b) => a[0] - b[0]);

  // Merge classes separated by less than MIN_FREE minutes into one busy block
  const blocks = [];
  for (const [s, e] of slots) {
    const last = blocks[blocks.length - 1];
    if (last && s - last[1] < MIN_FREE) {
      last[1] = Math.max(last[1], e);
    } else {
      blocks.push([s, e]);
    }
  }

  const busy = blocks.some(([s, e]) => minutes >= s && minutes < e);
  if (busy) return { free: false, until: null };

  const next = blocks.find(([s]) => s > minutes);

  // Not usable if a class starts in less than MIN_FREE minutes
  if (next && next[0] - minutes < MIN_FREE) {
    return { free: false, until: null };
  }

  return { free: true, until: next ? next[0] : null };
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

  const free = ROOMS
    .map(room => ({ room, status: roomStatus(room, day, minutes) }))
    .filter(x => x.status.free);

  summaryEl.textContent
