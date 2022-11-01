var popupOpen = 0
var on

function mailButton() {
    popupOpen = 1
    var x = document.getElementById("mailWarning");
    x.style.display = "table";
    var y = document.getElementById("main")
    y.setAttribute('style', 'filter: brightness(50%)); -webkit-filter:brightness(50%); -moz-filter:brightness(50%)');
}

function closeMailWarning() {
    popupOpen = 0
    var x = document.getElementById("mailWarning");
    var y = document.getElementById("main");
    x.style.display = "none";
    y.setAttribute('style', 'filter: brightness(100%)); -webkit-filter:brightness(100%); -moz-filter:brightness(100%)');
}

document.addEventListener('keydown', logKey);
function logKey(e) {
    if (`${e.code}` == "Escape") {
        if (popupOpen = 1) {
            closeMailWarning()
        }
    }
}
