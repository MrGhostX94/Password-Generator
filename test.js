function generatePassword(length) {
    const lowercase = 'abcdefghijklmnopqrstuvwxyz';
    const uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const numbers = '0123456789';
    const symbols = '!@#$%^&*()_+-=[]{}|;:,.<>?';

    const allCharacters = lowercase + uppercase + numbers + symbols;
    let password = ''; 

    
    for (let i = 0; i < length; i++) {
        if (length >= 4) {
            if (i === 0) {
                password += lowercase[Math.floor(Math.random() * lowercase.length)];
            } else if (i === 1) {
                password += uppercase[Math.floor(Math.random() * uppercase.length)];
            } else if (i === 2) {
                password += numbers[Math.floor(Math.random() * numbers.length)];
            } else if (i === 3) {
                password += symbols[Math.floor(Math.random() * symbols.length)];
            } else {
                const randomIndex = Math.floor(Math.random() * allCharacters.length);
                password += allCharacters[randomIndex];
            }
        } else {
            const randomIndex = Math.floor(Math.random() * allCharacters.length);
            password += allCharacters[randomIndex];
        }
    }

    return password.split('').sort(() => Math.random() - 0.5).join('');
}

document.getElementById("myPassBtn").onclick = () => {
    const requestedLength = parseInt(document.getElementById("Pass-len").value);
    
    if (!requestedLength) {
        alert("Please enter a valid number for password length");
        return;
    }

    var displayPass = document.getElementById("myResult");
    
    if (requestedLength >= 5 && requestedLength <= 20) {
        displayPass.innerHTML = "Your Password is: <span style='color: white'>" + generatePassword(requestedLength) + "</span>";

    } else {
        displayPass.innerHTML = '';
        alert(`Password length must be between 1 and 20 characters. You requested: ${requestedLength}`);
    }
};
