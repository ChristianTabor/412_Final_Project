window.addEventListener('load', function () {
    fetch('nav.html') // the page we want to use for our sidebar
        .then(function (data) {
        return data.text();
    })
        .then(function (data) {
        document.getElementById("nav-bar-global").innerHTML = data; // inserts to element id="navbar"
    });
}, false);
