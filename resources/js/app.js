if (window.location.href.split('/')[3] == "") {
    document.getElementById('home').classList.add("selected");
}
document.getElementById(window.location.href.split('/')[3]).classList.add("selected");