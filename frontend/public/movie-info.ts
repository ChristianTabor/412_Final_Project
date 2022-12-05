const mpid = new URLSearchParams(window.location.search).get('mpid')
const data = JSON.stringify(false);

const xhr1 = new XMLHttpRequest();
//xhr.withCredentials = true;

xhr1.addEventListener("readystatechange", function () {
    if (this.readyState === this.DONE) {
        //console.log(this.responseText);

        const out = JSON.parse(this.responseText);
        let ul = document.createElement('ul');
        ul.setAttribute('id', 'movie-info')
        for (const outKey in out) {
            let liMPID = document.createElement('li');
            let aMPID = document.createElement('a');
            aMPID.textContent = "MPID: " + out[outKey]['MPID'];
            liMPID.appendChild(aMPID);

            let liTitle = document.createElement('li');
            let aTitle = document.createElement('a');
            aTitle.textContent = "Title: " + out[outKey]['TITLE'];
            liTitle.appendChild(aTitle);

            let liRating = document.createElement('li');
            let aRating = document.createElement('a');
            aRating.textContent = "Rating: " + out[outKey]['RATING'];
            liRating.appendChild(aRating);

            let liCreated = document.createElement('li');
            let aCreated = document.createElement('a');
            aCreated.textContent = "Created: " + out[outKey]['CREATED'];
            liCreated.appendChild(aCreated)

            let liUpdated = document.createElement('li');
            let aUpdated = document.createElement('a');
            aUpdated.textContent = "Updated: " + out[outKey]['UPDATED'];
            liUpdated.appendChild(aUpdated);

            ul.appendChild(liMPID);
            ul.appendChild(liTitle);
            ul.appendChild(liRating);
            ul.appendChild(liCreated);
            ul.appendChild(liUpdated);
        }

        document.getElementById('my-body').appendChild(ul);
        const a = document.createElement('a');
        a.textContent = "Actors:"
        document.getElementById('my-body').appendChild(a);
        console.log(this.responseText);
    }
});
xhr1.open("GET", ("http://localhost:6060/movies/id?mpid=" + mpid));
xhr1.setRequestHeader("Content-Type", "application/json");
xhr1.setRequestHeader('X-Requested-With', 'XMLHttpRequest');
console.log(localStorage.test);
xhr1.send(data);

const xhr2 = new XMLHttpRequest();
//xhr.withCredentials = true;

xhr2.addEventListener("readystatechange", function () {
    if (this.readyState === this.DONE) {
        //console.log(this.responseText);

        const out = JSON.parse(this.responseText);
        let ul = document.createElement('ul');
        ul.setAttribute('id', 'actors-list')
        for (const outKey in out) {
            let li = document.createElement('li');
            let a = document.createElement('a');
            a.textContent = out[outKey]['NAME']
            a.setAttribute('href', 'actor-info.html?aid=' + out[outKey]['AID']);
            li.appendChild(a);
            li.setAttribute('id', out[outKey]['AID']);
            ul.appendChild(li);
            console.log(li.getAttribute('id'));
            //console.log(out[outKey]['NAME']);
        }
        temp();
        document.getElementById('my-body').appendChild(ul);
        console.log(this.responseText);
    }
});
xhr2.open("GET", ("http://localhost:6060/actors/movie?mpid=" + mpid));
xhr2.setRequestHeader("Content-Type", "application/json");
xhr2.setRequestHeader('X-Requested-With', 'XMLHttpRequest');
console.log(localStorage.test);
xhr2.send(data);

if (1) {

}

const temp = async() =>{
    let rating = <HTMLButtonElement>document.createElement('button')
    rating.type = 'button';
    rating.textContent = "Add A Rating"
    rating.setAttribute('id', 'rating-button')
    rating.addEventListener('click', ev => {
        if (localStorage.loggedIn == true) {
            const xhr2 = new XMLHttpRequest();
            const data = JSON.stringify({
                "mpid": mpid,
                "rating": 10 //update later
            });

            xhr2.addEventListener("readystatechange", function () {
                if (this.readyState === this.DONE) {
                    //console.log(this.responseText);

                    const out = JSON.parse(this.responseText);
                    if (this.status != 200){
                        const a = document.createElement('a');
                        a.textContent = "You must log in to add a rating"
                        document.getElementById('my-body').appendChild(a);
                    }
                }
            });
            xhr2.open("POST", ("http://localhost:6060/rating"));
            xhr2.setRequestHeader("Content-Type", "application/json");
            xhr2.setRequestHeader('X-Requested-With', 'XMLHttpRequest');
            console.log(localStorage.test);
            xhr2.send(data);

        }
    });

    //document.getElementById('my-body').prepend(rating);
    //document.getElementById('rating-button').after(document.getElementById('nav-bar-global'));

}