const myList = document.getElementById('list-class');

window.addEventListener('load' ,function () {

    const data = JSON.stringify(false);

    const xhr = new XMLHttpRequest();
    //xhr.withCredentials = true;

    xhr.addEventListener("readystatechange", function () {
        if (this.readyState === this.DONE) {
            //console.log(this.responseText);
            const out = JSON.parse(this.responseText);
            for (const outKey in out) {
                let li = document.createElement('li');
                let a = document.createElement('a');
                a.textContent = out[outKey]['NAME']
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