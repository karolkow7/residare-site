
function setLanguage(lang) {
  localStorage.setItem('language', lang);
  const flag = document.getElementById('selected-flag');
  if (flag) flag.src = 'flags/flag_' + lang + '.png';
  loadLanguage(lang);
}

function loadLanguage(lang) {
  fetch('lang/' + lang + '.json')
    .then(res => res.json())
    .then(data => {
      document.querySelectorAll('[data-key]').forEach(el => {
        const key = el.getAttribute('data-key');
        const keys = key.split('.');
        let value = data;
        keys.forEach(k => value = value?.[k]);
        if (value) {
          if (el.placeholder !== undefined) el.placeholder = value;
          if (el.title !== undefined) el.title = value;
          if (el.alt !== undefined) el.alt = value;
          if (el.innerText !== undefined) el.innerText = value;
        }
      });
    });
}

document.addEventListener('DOMContentLoaded', () => {
  const lang = localStorage.getItem('language') || 'de';
  const flag = document.getElementById('selected-flag');
  if (flag) flag.src = 'flags/flag_' + lang + '.png';
  loadLanguage(lang);
});
