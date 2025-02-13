function showSection(sectionId) {
    var sections = document.querySelectorAll('.section');
    sections.forEach(function(section) {
        section.classList.remove('active');
    });
    document.getElementById(sectionId).classList.add('active');
}

function switchLanguage(language) {
    var navJa = document.getElementById('nav-ja');
    var navEn = document.getElementById('nav-en');
    var sectionsJa = document.querySelectorAll('#home-ja, #profile-ja, #contact-ja');
    var sectionsEn = document.querySelectorAll('#home-en, #profile-en, #contact-en');

    if (language === 'ja') {
        navJa.style.display = 'block';
        navEn.style.display = 'none';
        sectionsJa.forEach(function(section) {
            section.style.display = 'block';
        });
        sectionsEn.forEach(function(section) {
            section.style.display = 'none';
        });
        showSection('home-ja'); // 初期表示のセクションを設定
    } else if (language === 'en') {
        navJa.style.display = 'none';
        navEn.style.display = 'block';
        sectionsJa.forEach(function(section) {
            section.style.display = 'none';
        });
        sectionsEn.forEach(function(section) {
            section.style.display = 'block';
        });
        showSection('home-en'); // 初期表示のセクションを設定
    }
}

