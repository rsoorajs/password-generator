function generatePassword() {

    var passLength = document.getElementById("setLength").value;
    var upCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var lowCase = "abcdefghijklmnopqrstuvwxyz";
    var numbers = "1234567890";
    var specialChar = "~`!@#$%^&*()-_+={}[]|:;,<>.?";
    var password = "";

    //variables that control if the checkboxes are true or false
    var check_Upcase = document.getElementById("inpUppercase").checked;
    var check_Lowcase = document.getElementById("inpLowercase").checked;
    var check_Numbers = document.getElementById("inpNumbers").checked;
    var check_Symbols = document.getElementById("inpSymbols").checked;

    if (check_Upcase == true) {
        password = password + upCase;
    }
    if (check_Lowcase == true) {
        password = password + lowCase;
    }
    if (check_Numbers == true) {
        password = password + numbers;
    }
    if (check_Symbols == true) {
        password = password + specialChar;
    }

    //for loop that generates random values â€‹â€‹based on length and user-chosen checkboxes
    var finalString = ""; 
    for (let i = 0; i < passLength; i++) {
        finalString += password.charAt(Math.floor(Math.random() * password.length));
        document.getElementById("inpPassword").value = finalString;
    }
}
