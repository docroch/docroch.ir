// Site theme Color mode
if (localStorage.theme === 'light' ) {
    document.documentElement.classList.add('light')
} else {
    document.documentElement.classList.remove('light');
}
var getUrlParameter = function getUrlParameter(sParam) {
    var sPageURL = window.location.search.substring(1),
        sURLVariables = sPageURL.split('&'),
        sParameterName,
        i;

    for (i = 0; i < sURLVariables.length; i++) {
        sParameterName = sURLVariables[i].split('=');

        if (sParameterName[0] === sParam) {
            return sParameterName[1] === undefined ? true : decodeURIComponent(sParameterName[1]);
        }
    }
    return false;
};
var version = getUrlParameter('version');

function setlightTheme() {
    document.documentElement.classList.add("light");
    localStorage.theme = 'light'
    $('#dark_theme').removeClass('active');
    $('#light_theme').addClass('active');
};
function setdarkTheme() {
    document.documentElement.classList.remove("light");
    localStorage.theme = 'dark'
    $('#light_theme').removeClass('active');
    $('#dark_theme').addClass('active');
};
function onThemeSwitcherItemClick(e) {
    var theme = this.dataset.theme;
    if (theme == "light") {
        setlightTheme();        
    } else {
        setdarkTheme();
    }
};

const themeSwitcherItems = document.querySelectorAll(".switcher-input");
themeSwitcherItems.forEach((item) => {
    item.addEventListener("click", onThemeSwitcherItemClick);
});

if ( localStorage.theme === 'light' ) {
    $('#light_theme').addClass('active');
} else  {
    $('#dark_theme').addClass('active');
}
if(version) {
    if (version == 'light') {
        setlightTheme();
    } else if (version == 'dark') {
        setdarkTheme(); 
    }
}