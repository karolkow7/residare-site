
document.addEventListener('DOMContentLoaded', function () {
    const languageSwitcher = document.getElementById('languageSwitcher');
    languageSwitcher.addEventListener('change', function () {
        const selectedLang = this.value;
        localStorage.setItem('selectedLanguage', selectedLang);
        location.reload();
    });

    const userLang = localStorage.getItem('selectedLanguage') || 'de';
    languageSwitcher.value = userLang;

    fetch(`translations/${userLang}.json`)
        .then(response => response.json())
        .then(translations => {
            document.querySelectorAll('[data-translate]').forEach(el => {
                const key = el.getAttribute('data-translate');
                if (translations[key]) {
                    el.innerHTML = translations[key];
                }
            });
        });
});
