function loadLanguage(lang) {
  fetch('lang/' + lang + '.json')
    .then(response => response.json())
    .then(data => {
      document.querySelectorAll('[data-key]').forEach(el => {
        const key = el.getAttribute('data-key');
        const keys = key.split('.');
        let value = data;
        keys.forEach(k => value = value[k]);
        if (value) el.innerText = value;
      });
    });
}