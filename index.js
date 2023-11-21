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
const password1 = document.getElementById("pswd1")
const password2 = document.getElementById("pswd2")
const slider = document.getElementById("pswd-range")

let useSymbols = true
let useNumbers = true
let passwordLength = slider.value
// generateBtn.addEventListener("click", showPasswords())

slider.addEventListener("input", (event) => {
    
})
// password1.innerText = generatePassword()
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
    password1.innerText = passwords[0]
    password2.innerText = passwords[1]
}
