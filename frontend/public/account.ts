console.log(localStorage.loggedIn);
const logIn = async () => {
    const xhr2 = new XMLHttpRequest();
    const email = <HTMLInputElement>document.getElementById('email-login');
    const password = <HTMLInputElement>document.getElementById('password-login');
    const data = JSON.stringify(false);
    xhr2.addEventListener("readystatechange", function () {
        if (this.readyState === this.DONE) {
            //console.log(this.responseText);

            const out = JSON.parse(this.responseText);
            console.log(out);
            if (this.status == 200){
                localStorage.loggedIn = true;
                localStorage.uid = out[0]['UID']
                window.location.href = 'account.html';
            }

        }
    });
    xhr2.open("GET", ("http://localhost:6060/login?email=" + email.value + "&password=" + password.value));
    console.log("http://localhost:6060/login?email=" + email.value + "&password=" + password.value)
    xhr2.setRequestHeader("Content-Type", "application/json");
    xhr2.setRequestHeader('X-Requested-With', 'XMLHttpRequest');
    console.log(localStorage.test);
    xhr2.send(data);
}

const watchList = async () => {
    window.location.href = 'watchlist.html';
}

const logOut = async () => {
    localStorage.uid = 0;
    localStorage.loggedIn = false;
    window.location.href = 'account.html';
}

const createAccount = async () => {
    const xhr2 = new XMLHttpRequest();
    const fname = <HTMLInputElement>document.getElementById('fname');
    const lname = <HTMLInputElement>document.getElementById('lname');
    const email = <HTMLInputElement>document.getElementById('email');
    const password = <HTMLInputElement>document.getElementById('password');
    const data = JSON.stringify({
        "fname": fname.value,
        "lname": lname.value,
        "email": email.value,
        "password": password.value
    });

    xhr2.addEventListener("readystatechange", function () {
        if (this.readyState === this.DONE) {
            //console.log(this.responseText);

            const out = JSON.parse(this.responseText);
            localStorage.uid = out['insertId'];
            localStorage.loggedIn = true;
        }
    });
    xhr2.open("POST", ("http://localhost:6060/account/create"));
    xhr2.setRequestHeader("Content-Type", "application/json");
    xhr2.setRequestHeader('X-Requested-With', 'XMLHttpRequest');
    console.log(localStorage.test);
    xhr2.send(data);

}

const showLogin = async () => {
    document.getElementById('my-body').innerHTML = '<div class="default">\n' +
        '        <div class="container">\n' +
        '            <div class="square">\n' +
        '                <div class="content">\n' +
        '                    <br>\n' +
        '                    <div class="row">\n' +
        '                        <div class="column">\n' +
        '                            <label>Create An Account:</label><br>\n' +
        '                            <label for="email">Email</label>\n' +
        '                            <input type="text" id="email" name="email"><br>\n' +
        '                            <label for="fname">First Name</label>\n' +
        '                            <input type="text" id="fname" name="fname"><br>\n' +
        '                            <label for="lname">Last Name</label>\n' +
        '                            <input type="text" id="lname" name="lname"><br>\n' +
        '                            <label for="password">Password</label>\n' +
        '                            <input type="text" id="password" name="password"><br>\n' +
        '                            <br>\n' +
        '                            <button type="button" id="create">Create An Account</button>\n' +
        '                        </div>\n' +
        '                        <div class="column">\n' +
        '                            <label>Login:</label><br>\n' +
        '                            <label for="email-login">Email</label>\n' +
        '                            <input type="text" id="email-login" name="email-login"><br>\n' +
        '                            <label for="password-login">Password</label>\n' +
        '                            <input type="text" id="password-login" name="password-login"><br>\n' +
        '                            <br>\n' +
        '                            <button type="button" id="login">Login</button>\n' +
        '                        </div>\n' +
        '                    </div>\n' +
        '                </div>\n' +
        '            </div>\n' +
        '        </div>\n' +
        '    </div>\n' +
        '</div>'
    document.getElementById('create').addEventListener('click', ev => createAccount());
    document.getElementById('login').addEventListener('click', ev => logIn());
}

const showInfo = async () => {
    document.getElementById('my-body').innerHTML = '<div class="default">\n' +
        '        <div class="container">\n' +
        '            <div class="square-2">\n' +
        '                <div class="content">\n' +
        '                    <br>\n' +
        '                    <div class="row">\n' +
        '                        <div class="column">\n' +
        '                            <label>Account Information:</label><br>\n' +
        '                            <label for="email">Email:</label><br>\n' +
        '                            <a id="email">Email</a><br>\n' +
        '                            <label for="name">Name:</label><br>\n' +
        '                            <a id="name">Name</a><br>\n' +
        '<button type="button" id="logout">Logout</button>\n' +
        '                        </div>\n' +
        '                        <div class="column">\n' +
        '                            <label>Watchlist:</label><br>\n' +
        '                            <button type="button" id="watchlist">Watchlist</button>\n' +
        '                        </div>\n' +
        '                    </div>\n' +
        '                </div>\n' +
        '            </div>\n' +
        '        </div>\n' +
        '    </div>'

    document.getElementById('logout').addEventListener('click', logOut);
    document.getElementById('watchlist').addEventListener('click', watchList);
    const xhr2 = new XMLHttpRequest();
    const data = JSON.stringify(false);
    xhr2.addEventListener("readystatechange", function () {
        if (this.readyState === this.DONE) {
            //console.log(this.responseText);

            const out = JSON.parse(this.responseText);
            document.getElementById('email').textContent = out[0]['EMAIL'];
            document.getElementById('name').textContent = out[0]['FNAME'] + " " + out[0]['LNAME'];
            console.log(out);
        }
    });
    xhr2.open("GET", ("http://localhost:6060/user?uid=" + localStorage.uid));
    xhr2.setRequestHeader("Content-Type", "application/json");
    xhr2.setRequestHeader('X-Requested-With', 'XMLHttpRequest');
    console.log(localStorage.test);
    xhr2.send(data);


}

if (localStorage.loggedIn == 'true') {
    showInfo();
    console.log("Logged In")
} else {
    showLogin();
    console.log("Not Logged In")
}