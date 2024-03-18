const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let password1text = document.getElementById("password1")
let password2text = document.getElementById("password2")
let numbersAndSymbols = document.getElementById("checkbox")


function generatePassword(){
    let password1 = []
    let password2 = []
    let passwordValue = document.getElementById("passwordLength").value
    if (numbersAndSymbols.checked === false ){
        for (let i = 0; i < passwordValue; i++){
            let randomIndex = Math.floor(Math.random()*80)
            password1.push(characters[randomIndex])
        }
        for (let i = 0; i < passwordValue; i++){
         let randomIndex = Math.floor(Math.random()*80)
         password2.push(characters[randomIndex])
        }
            password1text.textContent = password1.join("")
            password2text.textContent = password2.join("")
        }
    else if(numbersAndSymbols.checked === true ){
            for (let i = 0; i < passwordValue; i++){
            let randomIndex = Math.floor(Math.random()*48)
            password1.push(characters[randomIndex])
        }
        for (let i = 0; i < passwordValue; i++){
         let randomIndex = Math.floor(Math.random()*48)
         password2.push(characters[randomIndex])
        }
            
            password1text.textContent = password1.join("")
            password2text.textContent = password2.join("")
            
        }
        password1text = password1.join("")
        password2text = password2.join("")

    }

function copyPW1ToClipboard(){
    let copyText = password1text
    navigator.clipboard.writeText(password1text);
    alert("Copied the text: " + password1text);
}



function copyPW2ToClipboard(){
    navigator.clipboard.writeText(password1text);
    alert("Copied the text: " + password1text);
}


