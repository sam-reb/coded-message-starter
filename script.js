const translateNumbers = (input) => {
    let output = "";
    for (i=0; i <= input.length + 1; i++) {
        if (input.charAt(i) === '3') {
            output += 'w';
        } else {
            output += input.charAt(i);
        }
        if (output.charAt(i) === '7') {
            output += 'l';
        } else {
            output += input.charAt(i);
        }
    }
    return output;
}

const decodeButton = document.getElementById("decodeButton");

decodeButton.addEventListener("click", () => {
    const encodedInput = document.getElementById("encodedInput").value;
    let decodedString = translateNumbers(encodedInput);
    document.getElementById("decodedOutput").innerText = decodedString;
});