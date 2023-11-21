const characters = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "~",
  "`",
  "!",
  "@",
  "#",
  "$",
  "%",
  "^",
  "&",
  "*",
  "(",
  ")",
  "_",
  "-",
  "+",
  "=",
  "{",
  "[",
  "}",
  "]",
  ",",
  "|",
  ":",
  ";",
  "<",
  ">",
  ".",
  "?",
  "/",
]

const generateBtn = document.getElementById("button-el")
const passwordField1 = document.getElementById("pwd-field1")
const passwordField2 = document.getElementById("pwd-field2")
let useSymbols = true
let useNumbers = true
let passwordLength = 15
// generateBtn.addEventListener("click", showPasswords())

// passwordField1.innerText = generatePassword()
function generatePasswords() {
    let passwords = []
    let password = ""
    let characterTotal = characters.length
    for(x = 1; x < 3; x++){
        for (i = 1; i <= passwordLength; i++){
            index = Math.floor(Math.random()*characterTotal)
            password += characters[index]
        }
        passwords.push(password)
        password = ""
    }
    return passwords
}

function showPasswords(){
    let passwords = generatePasswords()
    passwordField1.innerText = passwords[0]
    passwordField2.innerText = passwords[1]
}
