var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var _this = this;
console.log(localStorage.loggedIn);
var logIn = function () { return __awaiter(_this, void 0, void 0, function () {
    var xhr2, email, password, data;
    return __generator(this, function (_a) {
        xhr2 = new XMLHttpRequest();
        email = document.getElementById('email-login');
        password = document.getElementById('password-login');
        data = JSON.stringify(false);
        xhr2.addEventListener("readystatechange", function () {
            if (this.readyState === this.DONE) {
                //console.log(this.responseText);
                var out = JSON.parse(this.responseText);
                console.log(out);
                if (this.status == 200) {
                    localStorage.loggedIn = true;
                    localStorage.uid = out[0]['UID'];
                    window.location.href = 'account.html';
                }
            }
        });
        xhr2.open("GET", ("http://localhost:6060/login?email=" + email.value + "&password=" + password.value));
        console.log("http://localhost:6060/login?email=" + email.value + "&password=" + password.value);
        xhr2.setRequestHeader("Content-Type", "application/json");
        xhr2.setRequestHeader('X-Requested-With', 'XMLHttpRequest');
        console.log(localStorage.test);
        xhr2.send(data);
        return [2 /*return*/];
    });
}); };
var watchList = function () { return __awaiter(_this, void 0, void 0, function () {
    return __generator(this, function (_a) {
        window.location.href = 'watchlist.html';
        return [2 /*return*/];
    });
}); };
var logOut = function () { return __awaiter(_this, void 0, void 0, function () {
    return __generator(this, function (_a) {
        localStorage.uid = 0;
        localStorage.loggedIn = false;
        window.location.href = 'account.html';
        return [2 /*return*/];
    });
}); };
var createAccount = function () { return __awaiter(_this, void 0, void 0, function () {
    var xhr2, fname, lname, email, password, data;
    return __generator(this, function (_a) {
        xhr2 = new XMLHttpRequest();
        fname = document.getElementById('fname');
        lname = document.getElementById('lname');
        email = document.getElementById('email');
        password = document.getElementById('password');
        data = JSON.stringify({
            "fname": fname.value,
            "lname": lname.value,
            "email": email.value,
            "password": password.value
        });
        xhr2.addEventListener("readystatechange", function () {
            if (this.readyState === this.DONE) {
                //console.log(this.responseText);
                var out = JSON.parse(this.responseText);
                localStorage.uid = out['insertId'];
                localStorage.loggedIn = true;
            }
        });
        xhr2.open("POST", ("http://localhost:6060/account/create"));
        xhr2.setRequestHeader("Content-Type", "application/json");
        xhr2.setRequestHeader('X-Requested-With', 'XMLHttpRequest');
        console.log(localStorage.test);
        xhr2.send(data);
        return [2 /*return*/];
    });
}); };
var showLogin = function () { return __awaiter(_this, void 0, void 0, function () {
    return __generator(this, function (_a) {
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
            '</div>';
        document.getElementById('create').addEventListener('click', function (ev) { return createAccount(); });
        document.getElementById('login').addEventListener('click', function (ev) { return logIn(); });
        return [2 /*return*/];
    });
}); };
var showInfo = function () { return __awaiter(_this, void 0, void 0, function () {
    var xhr2, data;
    return __generator(this, function (_a) {
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
            '    </div>';
        document.getElementById('logout').addEventListener('click', logOut);
        document.getElementById('watchlist').addEventListener('click', watchList);
        xhr2 = new XMLHttpRequest();
        data = JSON.stringify(false);
        xhr2.addEventListener("readystatechange", function () {
            if (this.readyState === this.DONE) {
                //console.log(this.responseText);
                var out = JSON.parse(this.responseText);
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
        return [2 /*return*/];
    });
}); };
if (localStorage.loggedIn == 'true') {
    showInfo();
    console.log("Logged In");
}
else {
    showLogin();
    console.log("Not Logged In");
}
