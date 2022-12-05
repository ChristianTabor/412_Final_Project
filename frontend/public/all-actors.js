var myList = document.getElementById('list-class');
window.addEventListener('load', function () {
    var data = JSON.stringify(false);
    var xhr = new XMLHttpRequest();
    //xhr.withCredentials = true;
    xhr.addEventListener("readystatechange", function () {
        if (this.readyState === this.DONE) {
            //console.log(this.responseText);
            var out = JSON.parse(this.responseText);
            for (var outKey in out) {
                var li = document.createElement('li');
                var a = document.createElement('a');
                a.textContent = out[outKey]['NAME'];
                a.setAttribute('href', 'actor-info.html?aid=' + out[outKey]['AID']);
                li.appendChild(a);
                li.setAttribute('id', out[outKey]['AID']);
                myList.appendChild(li);
                console.log(li.getAttribute('id'));
                //console.log(out[outKey]['NAME']);
            }
        }
    });
    xhr.open("GET", "http://localhost:6060/actors");
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.setRequestHeader('X-Requested-With', 'XMLHttpRequest');
    xhr.send(data);
    localStorage.test = 'hi yall';
}, false);
