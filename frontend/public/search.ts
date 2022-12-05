const titleButton = document.getElementById('search-by-title');
const actorButton = document.getElementById('search-by-actor');

titleButton.addEventListener('click', ev => {
    const body = document.getElementById('body');
    const ul = document.getElementById('list')
    const searchBar = <HTMLInputElement>document.getElementById('title');
    const title = searchBar.value
    let newul = document.createElement('ul')
    newul.setAttribute('id', 'list');
    body.removeChild(ul);

    const data = JSON.stringify(false);

    const xhr = new XMLHttpRequest();

    xhr.addEventListener("readystatechange", function () {
        if (this.readyState === this.DONE) {
            const out = JSON.parse(this.responseText);
            for (const outKey in out) {
                let li = document.createElement('li');
                let a = document.createElement('a');
                a.textContent = out[outKey]['TITLE']
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

actorButton.addEventListener('click', ev => {
    const body = document.getElementById('body');
    const ul = document.getElementById('list')
    const searchBar = <HTMLInputElement>document.getElementById('actor');
    const actorName = searchBar.value
    let newul = document.createElement('ul')
    newul.setAttribute('id', 'list');
    body.removeChild(ul);

    const data = JSON.stringify(false);

    const xhr = new XMLHttpRequest();

    xhr.addEventListener("readystatechange", function () {
        if (this.readyState === this.DONE) {
            const out = JSON.parse(this.responseText);
            for (const outKey in out) {
                let li = document.createElement('li');
                let a = document.createElement('a');
                a.textContent = out[outKey]['NAME']
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

