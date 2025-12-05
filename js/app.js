

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




function changeBackground(color) {
  document.body.style.backgroundColor = color;
}


function updateTitleClock() {
  const now = new Date().toLocaleTimeString();
  document.title = `Twitch Fan Hub | ${now}`;
}

setInterval(updateTitleClock, 1000);
updateTitleClock();

