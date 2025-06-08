
function loadLanguage(lang) {
  fetch('lang/' + lang + '.json')
    .then(response => {
      if (!response.ok) throw new Error('Sprache nicht gefunden');
      return response.json();
    })
    .then(data => {
      document.querySelectorAll('[data-key]').forEach(el => {
        const key = el.getAttribute('data-key');
        const keys = key.split('.');
        let value = data;
        keys.forEach(k => {
          if (value && typeof value === 'object') value = value[k];
        });
        if (!value) return;

        if (el.placeholder !== undefined) el.placeholder = value;
        if (el.title !== undefined) el.title = value;
        if (el.alt !== undefined && el.tagName === "IMG") el.alt = value;

        if (el.childNodes.length === 1 && el.childNodes[0].nodeType === 3) {
          el.innerText = value;
        }
      });
    })
    .catch(error => {
      console.error('Fehler beim Laden der Sprache:', error);
    });
}
