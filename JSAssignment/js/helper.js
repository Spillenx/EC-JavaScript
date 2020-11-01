var Helper = {};

Helper.show = function (tag) {
    document.getElementById(tag).style.display="block";
}

Helper.setHtml = function (tag, html) {
    document.getElementById(tag).innerHTML = html;
}

Helper.onClick = function (tag, action) {
    document.getElementById(tag).addEventListener("click", action);
}