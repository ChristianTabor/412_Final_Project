var aid = new URLSearchParams(window.location.search).get('aid');
var data = JSON.stringify(false);
var xhr1 = new XMLHttpRequest();
//xhr.withCredentials = true;
xhr1.addEventListener("readystatechange", function () {
    if (this.readyState === this.DONE) {
        //console.log(this.responseText);
        var out = JSON.parse(this.responseText);
        var ul = document.createElement('ul');
        for (var outKey in out) {
            var liAID = document.createElement('li');
            var aAID = document.createElement('a');
            aAID.textContent = "AID: " + out[outKey]['AID'];
            liAID.appendChild(aAID);
            var liName = document.createElement('li');
            var aName = document.createElement('a');
            aName.textContent = "Name: " + out[outKey]['NAME'];
            liName.appendChild(aName);
            var liCreated = document.createElement('li');
            var aCreated = document.createElement('a');
            aCreated.textContent = "Created: " + out[outKey]['CREATED'];
            liCreated.appendChild(aCreated);
            var liUpdated = document.createElement('li');
            var aUpdated = document.createElement('a');
            aUpdated.textContent = "Updated: " + out[outKey]['UPDATED'];
            liUpdated.appendChild(aUpdated);
            ul.appendChild(liAID);
            ul.appendChild(liName);
            ul.appendChild(liCreated);
            ul.appendChild(liUpdated);
        }
        document.getElementById('my-body').appendChild(ul);
        var a = document.createElement('a');
        a.textContent = "Movies:";
        document.getElementById('my-body').appendChild(a);
        console.log(this.responseText);
    }
});
xhr1.open("GET", ("http://localhost:6060/actor?aid=" + aid));
xhr1.setRequestHeader("Content-Type", "application/json");
xhr1.setRequestHeader('X-Requested-With', 'XMLHttpRequest');
console.log(localStorage.test);
xhr1.send(data);
var xhr2 = new XMLHttpRequest();
//xhr.withCredentials = true;
xhr2.addEventListener("readystatechange", function () {
    if (this.readyState === this.DONE) {
        //console.log(this.responseText);
        var out = JSON.parse(this.responseText);
        var ul = document.createElement('ul');
        for (var outKey in out) {
            var li = document.createElement('li');
            var a = document.createElement('a');
            a.textContent = out[outKey]['TITLE'];
            a.setAttribute('href', 'movie-info.html?mpid=' + out[outKey]['MPID']);
            li.appendChild(a);
            li.setAttribute('id', out[outKey]['MPID']);
            ul.appendChild(li);
            console.log(li.getAttribute('id'));
            //console.log(out[outKey]['NAME']);
        }
        document.getElementById('my-body').appendChild(ul);
        console.log(this.responseText);
    }
});
xhr2.open("GET", ("http://localhost:6060/movies/actor?aid=" + aid));
xhr2.setRequestHeader("Content-Type", "application/json");
xhr2.setRequestHeader('X-Requested-With', 'XMLHttpRequest');
console.log(localStorage.test);
xhr2.send(data);
