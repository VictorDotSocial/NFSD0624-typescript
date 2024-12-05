/*

nombreDeLaCosaATipar : tipoDeDato
Ej:
const myName:string = 'Pepe'

*/

// Number
let phone: number;
phone = 612612612;

let phone2 = 612612612.3423;

let hexadecimal: number = 0xf00d;

// Boolean
let hasPool: boolean;
hasPool = true;

let hasGym = false;

// String
let myName: string = "Pepito";

let myName2 = "Juanito";

let salutation: string = `Hola ${myName} qué tal`;

// Any
let userInfo: any;
userInfo = "Pepito";
userInfo = 935282784;

let userData;
userData = 2121;
userData = "Prueba";

let introText = "Hola Mengano";
const theName = introText.substring(5);
console.log("El nombre al que has saludado es ", theName);

// Void
function showInfo(user: any): void {
  console.log("UserInfo", user);
  myName2 = "ewoifnewinds";
}

function showInfo2(user: any) {
  console.log("UserInfo", user);
}

// Never
function handleError(code: number, message: string): never {
  throw new Error(`Error message: ${message} with code ${code}`);
}

// Null
let nullVar: null;
nullVar = null;

let otherNullVar = null;

// Undefined
let undefinedVar: undefined = undefined;

let otherUndefinedVar = undefined;

// Objetos
let user = {
  id: 1,
  userName: "pepe",
  isAdmin: true,
};

// Arrays
let users: string[];
users = ["User1", "User2"];

// Tuple
let users2: [string, number];
users2 = ["User1", 23];

// Array de tuplas
let myList: [string, number][];
myList = [
  ["User1", 23],
  ["User1", 23],
];

// Enum
enum Country {
  Espana = "es",
  Alemania = "ale",
  Francia = "fra",
  Italia = "ita",
}

const userCountry: Country = Country.Espana;
console.log(userCountry);

// Unión de tipos
let userId: string | number;
userId = "283482";
userId = 283482;

// Alias de tipos
type UserId = number | string;
let userId2: UserId = "283482";

// Tipos literales
type SquareSize = "100x100" | "500x500" | "1000x1000";
let smallImage: SquareSize = "100x100";

// FUNCIONES

function createPicture(title: string, date: string, size: SquareSize): void {
  console.log("Creando imagen con ", title, date, size);
}

createPicture("Vacaciones", "2024-12-04", "500x500");

// Interfaces
interface Picture {
  title: string;
  date?: string;
  size: SquareSize;
}

function showPicture(picture: Picture): void {
  console.log("Datos del picture", picture.title);
}

const myPicture: Picture = {
  title: "El Grito",
  size: "1000x1000",
};

showPicture(myPicture);

interface Media {
  id: number;
  title: string;
}

interface Image extends Media {
  size: SquareSize;
}

interface Music extends Media {
  lenght: number;
}

const mySong: Music = {
  id: 848392389,
  title: "Yellow Submarine",
  lenght: 372,
};

// Clases
class Picture3 {
  // Propiedades
  private _id: number;
  protected _title: string;
  private _size: SquareSize;

  // Constructor
  constructor(id: number, title: string, size: SquareSize) {
    this._id = id;
    this._title = title;
    this._size = size;
  }

  // Getters y Setters
  get title() {
    return this._title.toUpperCase();
  }

  set title(newTitle: string) {
    this._title = newTitle.toUpperCase();
  }
}

const myImage = new Picture3(21, "Imagen1", "100x100");
console.log(myImage.title);

myImage.title = "nuevo valor";

// myImage._title = "nuevo valor";

class SuperPicture extends Picture3 {
  private _length: number;

  // Constructor
  constructor(id: number, title: string, size: SquareSize, length: number) {
    super(id, title, size);

    this._length = length;
  }

  changeTitle() {
    this._title = "Nuevo título modificado";
  }
}

// Decoradores

function log(target: any, key: any) {
  console.log(key + " se ha llamado y forma parte de ", target);
}

class Persona {
  private name: string;

  constructor(name: string) {
    this.name = name;
  }

  @log
  sayMyName(text: string) {
    console.log(this.name, text);
  }
}

const person: Persona = new Persona("Pepito");
person.sayMyName("i3quheruieq3euirwfn");
