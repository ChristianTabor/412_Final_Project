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
var mpid = new URLSearchParams(window.location.search).get('mpid');
var data = JSON.stringify(false);
var xhr1 = new XMLHttpRequest();
//xhr.withCredentials = true;
xhr1.addEventListener("readystatechange", function () {
    if (this.readyState === this.DONE) {
        //console.log(this.responseText);
        var out = JSON.parse(this.responseText);
        var ul = document.createElement('ul');
        ul.setAttribute('id', 'movie-info');
        for (var outKey in out) {
            var liMPID = document.createElement('li');
            var aMPID = document.createElement('a');
            aMPID.textContent = "MPID: " + out[outKey]['MPID'];
            liMPID.appendChild(aMPID);
            var liTitle = document.createElement('li');
            var aTitle = document.createElement('a');
            aTitle.textContent = "Title: " + out[outKey]['TITLE'];
            liTitle.appendChild(aTitle);
            var liRating = document.createElement('li');
            var aRating = document.createElement('a');
            aRating.textContent = "Rating: " + out[outKey]['RATING'];
            liRating.appendChild(aRating);
            var liCreated = document.createElement('li');
            var aCreated = document.createElement('a');
            aCreated.textContent = "Created: " + out[outKey]['CREATED'];
            liCreated.appendChild(aCreated);
            var liUpdated = document.createElement('li');
            var aUpdated = document.createElement('a');
            aUpdated.textContent = "Updated: " + out[outKey]['UPDATED'];
            liUpdated.appendChild(aUpdated);
            ul.appendChild(liMPID);
            ul.appendChild(liTitle);
            ul.appendChild(liRating);
            ul.appendChild(liCreated);
            ul.appendChild(liUpdated);
        }
        document.getElementById('my-body').appendChild(ul);
        var a = document.createElement('a');
        a.textContent = "Actors:";
        document.getElementById('my-body').appendChild(a);
        console.log(this.responseText);
    }
});
xhr1.open("GET", ("http://localhost:6060/movies/id?mpid=" + mpid));
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
        ul.setAttribute('id', 'actors-list');
        for (var outKey in out) {
            var li = document.createElement('li');
            var a = document.createElement('a');
            a.textContent = out[outKey]['NAME'];
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
var temp = function () { return __awaiter(_this, void 0, void 0, function () {
    var rating;
    return __generator(this, function (_a) {
        rating = document.createElement('button');
        rating.type = 'button';
        rating.textContent = "Add A Rating";
        rating.setAttribute('id', 'rating-button');
        rating.addEventListener('click', function (ev) {
            if (localStorage.loggedIn == true) {
                var xhr2_1 = new XMLHttpRequest();
                var data_1 = JSON.stringify({
                    "mpid": mpid,
                    "rating": 10 //update later
                });
                xhr2_1.addEventListener("readystatechange", function () {
                    if (this.readyState === this.DONE) {
                        //console.log(this.responseText);
                        var out = JSON.parse(this.responseText);
                        if (this.status != 200) {
                            var a = document.createElement('a');
                            a.textContent = "You must log in to add a rating";
                            document.getElementById('my-body').appendChild(a);
                        }
                    }
                });
                xhr2_1.open("POST", ("http://localhost:6060/rating"));
                xhr2_1.setRequestHeader("Content-Type", "application/json");
                xhr2_1.setRequestHeader('X-Requested-With', 'XMLHttpRequest');
                console.log(localStorage.test);
                xhr2_1.send(data_1);
            }
        });
        return [2 /*return*/];
    });
}); };
