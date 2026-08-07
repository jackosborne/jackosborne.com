const cards = Array.from(document.querySelectorAll("[data-record-card]"));
const grid = document.querySelector(".records-grid");
const pickButton = document.querySelector("[data-random-record]");
const label = document.querySelector(".records-picker__label");
const resultWrap = document.querySelector("[data-random-result]");
const resultText = document.querySelector("[data-random-output]");
const countOutput = document.querySelector("[data-record-count]");
const clearButton = document.querySelector("[data-clear-record]");

let lastPickedIndex = -1;

if (countOutput) {
  countOutput.textContent = cards.length;
}

function pickRandomRecord() {
  if (!cards.length || !pickButton || !resultText) return;

  cards.forEach(card => card.classList.remove("is-picked"));

  let randomIndex = Math.floor(Math.random() * cards.length);

  if (cards.length > 1) {
    while (randomIndex === lastPickedIndex) {
      randomIndex = Math.floor(Math.random() * cards.length);
    }
  }

  lastPickedIndex = randomIndex;

  const selectedCard = cards[randomIndex];
  selectedCard.classList.add("is-picked");

  const artist = selectedCard.dataset.artist || "";
  const title = selectedCard.dataset.title || "";
  const year = selectedCard.dataset.year || "";

  resultText.textContent = year
    ? `${artist} — ${title} (${year})`
    : `${artist} — ${title}`;

  resultText.classList.remove("records-picker__placeholder");

  if (resultWrap) {
    resultWrap.hidden = false;
  }

  if (label) {
    label.textContent = "Pick another record";
  }

  if (grid) {
    grid.classList.add("has-picked");
  }

  if (clearButton) {
    clearButton.hidden = false;
  }

  selectedCard.scrollIntoView({
    behavior: "smooth",
    block: "center",
    inline: "nearest",
  });
}

function clearSelection() {
  cards.forEach(card => card.classList.remove("is-picked"));

  if (grid) {
    grid.classList.remove("has-picked");
  }

  if (resultText) {
    resultText.innerHTML = `<span data-record-count>${cards.length}</span> chances to pick something good`;
    resultText.classList.add("records-picker__placeholder");
  }

  if (label) {
    label.textContent = "Pick a record";
  }

  if (clearButton) {
    clearButton.hidden = true;
  }

  lastPickedIndex = -1;
}

if (pickButton) {
  pickButton.addEventListener("click", pickRandomRecord);
}

if (clearButton) {
  clearButton.addEventListener("click", clearSelection);
}