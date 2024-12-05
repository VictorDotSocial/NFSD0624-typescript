"use strict";
var __runInitializers = (this && this.__runInitializers) || function (thisArg, initializers, value) {
    var useValue = arguments.length > 2;
    for (var i = 0; i < initializers.length; i++) {
        value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
    }
    return useValue ? value : void 0;
};
var __esDecorate = (this && this.__esDecorate) || function (ctor, descriptorIn, decorators, contextIn, initializers, extraInitializers) {
    function accept(f) { if (f !== void 0 && typeof f !== "function") throw new TypeError("Function expected"); return f; }
    var kind = contextIn.kind, key = kind === "getter" ? "get" : kind === "setter" ? "set" : "value";
    var target = !descriptorIn && ctor ? contextIn["static"] ? ctor : ctor.prototype : null;
    var descriptor = descriptorIn || (target ? Object.getOwnPropertyDescriptor(target, contextIn.name) : {});
    var _, done = false;
    for (var i = decorators.length - 1; i >= 0; i--) {
        var context = {};
        for (var p in contextIn) context[p] = p === "access" ? {} : contextIn[p];
        for (var p in contextIn.access) context.access[p] = contextIn.access[p];
        context.addInitializer = function (f) { if (done) throw new TypeError("Cannot add initializers after decoration has completed"); extraInitializers.push(accept(f || null)); };
        var result = (0, decorators[i])(kind === "accessor" ? { get: descriptor.get, set: descriptor.set } : descriptor[key], context);
        if (kind === "accessor") {
            if (result === void 0) continue;
            if (result === null || typeof result !== "object") throw new TypeError("Object expected");
            if (_ = accept(result.get)) descriptor.get = _;
            if (_ = accept(result.set)) descriptor.set = _;
            if (_ = accept(result.init)) initializers.unshift(_);
        }
        else if (_ = accept(result)) {
            if (kind === "field") initializers.unshift(_);
            else descriptor[key] = _;
        }
    }
    if (target) Object.defineProperty(target, contextIn.name, descriptor);
    done = true;
};
let phone;
phone = 612612612;
let phone2 = 612612612.3423;
let hexadecimal = 0xf00d;
let hasPool;
hasPool = true;
let hasGym = false;
let myName = "Pepito";
let myName2 = "Juanito";
let salutation = `Hola ${myName} qué tal`;
let userInfo;
userInfo = "Pepito";
userInfo = 935282784;
let userData;
userData = 2121;
userData = "Prueba";
let introText = "Hola Mengano";
const theName = introText.substring(5);
console.log("El nombre al que has saludado es ", theName);
function showInfo(user) {
    console.log("UserInfo", user);
    myName2 = "ewoifnewinds";
}
function showInfo2(user) {
    console.log("UserInfo", user);
}
function handleError(code, message) {
    throw new Error(`Error message: ${message} with code ${code}`);
}
let nullVar;
nullVar = null;
let otherNullVar = null;
let undefinedVar = undefined;
let otherUndefinedVar = undefined;
let user = {
    id: 1,
    userName: "pepe",
    isAdmin: true,
};
let users;
users = ["User1", "User2"];
let users2;
users2 = ["User1", 23];
let myList;
myList = [
    ["User1", 23],
    ["User1", 23],
];
var Country;
(function (Country) {
    Country["Espana"] = "es";
    Country["Alemania"] = "ale";
    Country["Francia"] = "fra";
    Country["Italia"] = "ita";
})(Country || (Country = {}));
const userCountry = Country.Espana;
console.log(userCountry);
let userId;
userId = "283482";
userId = 283482;
let userId2 = "283482";
let smallImage = "100x100";
function createPicture(title, date, size) {
    console.log("Creando imagen con ", title, date, size);
}
createPicture("Vacaciones", "2024-12-04", "500x500");
function showPicture(picture) {
    console.log("Datos del picture", picture.title);
}
const myPicture = {
    title: "El Grito",
    size: "1000x1000",
};
showPicture(myPicture);
const mySong = {
    id: 848392389,
    title: "Yellow Submarine",
    lenght: 372,
};
class Picture3 {
    constructor(id, title, size) {
        this._id = id;
        this._title = title;
        this._size = size;
    }
    get title() {
        return this._title.toUpperCase();
    }
    set title(newTitle) {
        this._title = newTitle.toUpperCase();
    }
}
const myImage = new Picture3(21, "Imagen1", "100x100");
console.log(myImage.title);
myImage.title = "nuevo valor";
class SuperPicture extends Picture3 {
    constructor(id, title, size, length) {
        super(id, title, size);
        this._length = length;
    }
    changeTitle() {
        this._title = "Nuevo título modificado";
    }
}
function log(target, key) {
    console.log(key + " se ha llamado y forma parte de ", target);
}
let Persona = (() => {
    var _a;
    let _instanceExtraInitializers = [];
    let _sayMyName_decorators;
    return _a = class Persona {
            constructor(name) {
                this.name = __runInitializers(this, _instanceExtraInitializers);
                this.name = name;
            }
            sayMyName(text) {
                console.log(this.name, text);
            }
        },
        (() => {
            const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
            _sayMyName_decorators = [log];
            __esDecorate(_a, null, _sayMyName_decorators, { kind: "method", name: "sayMyName", static: false, private: false, access: { has: obj => "sayMyName" in obj, get: obj => obj.sayMyName }, metadata: _metadata }, null, _instanceExtraInitializers);
            if (_metadata) Object.defineProperty(_a, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        })(),
        _a;
})();
const person = new Persona("Pepito");
person.sayMyName("i3quheruieq3euirwfn");
