function filterLongWords() {
  const text = document.getElementById('long-words-text').value;
  const filtered = text
    .split(/\s+/)
    .filter(word => word.length <= 7)
    .join(' ');
  alert('Результат: ' + filtered);
}

function findMostFrequentLetter() {
  const text = document.getElementById('letter-text').value.toLowerCase();
  const counts = {};
  for (const char of text) {
    if (/[a-zа-яё]/.test(char)) {
      counts[char] = (counts[char] || 0) + 1;
    }
  }
  let winner = '';
  let max = 0;
  for (const [letter, count] of Object.entries(counts)) {
    if (count > max) {
      max = count;
      winner = letter;
    }
  }
  alert(winner ? `Чаще всего встречается: "${winner}" (${max} раз)` : 'Букв не найдено');
}

function removeDigits() {
  const text = document.getElementById('digits-text').value;
  const cleaned = text.replace(/\d+/g, '');
  const newWindow = window.open('', '_blank', 'width=400,height=300');
  newWindow.document.write(`<pre style="font-family:Arial;padding:20px;">${cleaned}</pre>`);
  newWindow.document.close();
}


function changeBackground(color) {
  document.body.style.backgroundColor = color;
}


function updateTitleClock() {
  const now = new Date().toLocaleTimeString();
  document.title = `Twitch Fan Hub | ${now}`;
}

setInterval(updateTitleClock, 1000);
updateTitleClock();