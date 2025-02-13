function showSection(sectionId) {
    var sections = document.querySelectorAll('.section');
    sections.forEach(function(section) {
        section.classList.remove('active');
    });
    document.getElementById(sectionId).classList.add('active');
}

function switchLanguage(language) {
    var sections = document.querySelectorAll('.section');
    sections.forEach(function(section) {
        section.classList.remove('active');
    });
    if (language === 'ja') {
        document.getElementById('home-ja').classList.add('active');
        document.getElementById('profile-ja').classList.add('active');
        document.getElementById('contact-ja').classList.add('active');
    } else if (language === 'en') {
        document.getElementById('home-en').classList.add('active');
        document.getElementById('profile-en').classList.add('active');
        document.getElementById('contact-en').classList.add('active');
    }
}

.container {
    width: 80%;
    margin: auto;
    overflow: hidden;
}

header {
    background: #333;
    color: #fff;
    padding-top: 30px;
    min-height: 70px;
    border-bottom: #77aaff 3px solid;
}

header a {
    color: #fff;
    text-decoration: none;
    text-transform: uppercase;
    font-size: 16px;
}

header ul {
    padding: 0;
    list-style: none;
}

header li {
    float: left;
    display: inline;
    padding: 0 20px 0 20px;
}

header #branding {
    float: left;
}

header #branding h1 {
    margin: 0;
}

header nav {
    float: right;
    margin-top: 10px;
}

#language-switcher {
    float: right;
    margin-top: 10px;
    margin-left: 20px;
}

#language-switcher button {
    background: #77aaff;
    color: #fff;
    border: none;
    padding: 5px 10px;
    cursor: pointer;
}

#language-switcher button:hover {
    background: #0056b3;
}

#showcase {
    min-height: 400px;
    background: #333;
    color: #fff;
    text-align: center;
    padding-top: 100px;
}

#showcase h1 {
    font-size: 55px;
    margin-top: 0;
}

#showcase p {
    font-size: 20px;
}

#main {
    padding: 20px;
}

footer {
    background: #333;
    color: #fff;
    text-align: center;
    padding: 10px;
    margin-top: 20px;
}

.section {
    display: none;
}

.section.active {
    display: block;
}