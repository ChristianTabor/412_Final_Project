var titleButton = document.getElementById('search-by-title');
var actorButton = document.getElementById('search-by-actor');
titleButton.addEventListener('click', function (ev) {
    var body = document.getElementById('body');
    var ul = document.getElementById('list');
    var searchBar = document.getElementById('title');
    var title = searchBar.value;
    var newul = document.createElement('ul');
    newul.setAttribute('id', 'list');
    body.removeChild(ul);
    var data = JSON.stringify(false);
    var xhr = new XMLHttpRequest();
    xhr.addEventListener("readystatechange", function () {
        if (this.readyState === this.DONE) {
            var out = JSON.parse(this.responseText);
            for (var outKey in out) {
                var li = document.createElement('li');
                var a = document.createElement('a');
                a.textContent = out[outKey]['TITLE'];
                a.setAttribute('href', 'movie-info.html?mpid=' + out[outKey]['MPID']);
                li.appendChild(a);
                li.setAttribute('id', out[outKey]['MPID']);
                newul.appendChild(li);
                console.log(li.getAttribute('id'));
            }
            body.appendChild(newul);
        }
    });
    xhr.open("GET", "http://localhost:6060/search/title?title=" + title);
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.setRequestHeader('X-Requested-With', 'XMLHttpRequest');
    xhr.send(data);
    localStorage.test = 'hi yall';
});
actorButton.addEventListener('click', function (ev) {
    var body = document.getElementById('body');
    var ul = document.getElementById('list');
    var searchBar = document.getElementById('actor');
    var actorName = searchBar.value;
    var newul = document.createElement('ul');
    newul.setAttribute('id', 'list');
    body.removeChild(ul);
    var data = JSON.stringify(false);
    var xhr = new XMLHttpRequest();
    xhr.addEventListener("readystatechange", function () {
        if (this.readyState === this.DONE) {
            var out = JSON.parse(this.responseText);
            for (var outKey in out) {
                var li = document.createElement('li');
                var a = document.createElement('a');
                a.textContent = out[outKey]['NAME'];
                a.setAttribute('href', 'actor-info.html?aid=' + out[outKey]['AID']);
                li.appendChild(a);
                li.setAttribute('id', out[outKey]['AID']);
                newul.appendChild(li);
                console.log(li.getAttribute('id'));
            }
            body.appendChild(newul);
        }
    });
    xhr.open("GET", "http://localhost:6060/search/actor?actor=" + actorName);
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.setRequestHeader('X-Requested-With', 'XMLHttpRequest');
    xhr.send(data);
    localStorage.test = 'hi yall';
});
