var passHistory = []; // Array

// Function that generate a random password between 8 and 50 casual characters choosen by the user
function generatePassword() {

    var passLength = document.getElementById("setLength").value;
    var upCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var lowCase = "abcdefghijklmnopqrstuvwxyz";
    var numbers = "1234567890";
    var specialChar = "~`!@#$%^&*()-_+={}[]|:;,.?";
    var password = "";

    // Variables that control if the checkboxes are true or false
    var check_Upcase = document.getElementById("inpUppercase").checked;
    var check_Lowcase = document.getElementById("inpLowercase").checked;
    var check_Numbers = document.getElementById("inpNumbers").checked;
    var check_Symbols = document.getElementById("inpSymbols").checked;

    // Conditions 
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

    // For loop that generates random values based on length and user-chosen checkboxes
    var finalString = ""; 
    for (let i = 0; i < passLength; i++) {
        finalString += password.charAt(Math.floor(Math.random() * password.length));
    }

    // Printing the complete string inside the input
    document.getElementById("inpPassword").value = finalString;  
    
    // Pushing passwords inside the array
    passHistory.push(finalString);
}

// Function that copy the generated password to the clipboard
function copyToClipboard() {

    var inpPass = document.getElementById("inpPassword").value;

    // Condition: if the input is empty, then return error, else execute the code
    if (inpPass == "") {
        alert("ERROR: \n\nText not found.");
    }
    else {
        // Getting the text
        var copyText = document.getElementById("inpPassword");
   
        // Selecting the text
        copyText.select();
        copyText.setSelectionRange(0, 99999); // For mobile devices

        // Copying the text inside the input
        document.execCommand("copy");
        
        // Alerting the copied text
        alert("Copied!");
    }
}

function showHistory() {

    if (passHistory == "") {
        alert("ERROR: \n\nGenerate at least one password.")
    }
    else {
        var strCron = "";

        for (let i = 0; i < passHistory.length; i++) {
            strCron = strCron + "<br>" + (i + 1)  + ") " + passHistory[i];    
        }  
        document.write("History: <br>" + strCron);
    }
}
