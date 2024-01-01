function reverseWords() {
    let input = document.getElementById("inputText").value;

    // Remove leading spaces
    let start = input.search(/\S/);
    if (start === -1) {
        document.getElementById("outputText").innerText = "";
        return;
    }
    input = input.slice(start);

    // Remove trailing spaces
    while (input.endsWith(' ')) {
        input = input.slice(0, -1);
    }

    let wordsStack = [];
    let word = "";
    for (let i = 0; i < input.length; ++i) {
        if (input[i] !== ' ') {
            word += input[i];
        } else if (word.length > 0) {
            // Push the word to stack
            wordsStack.push(word);
            word = "";
        }
    }
    // Push the last word if exists
    if (word) {
        wordsStack.push(word);
    }

    // Now pop words from the stack to form the reversed string
    let reversed = "";
    while (wordsStack.length > 0) {
        reversed += reversed.length > 0 ? " " + wordsStack.pop() : wordsStack.pop();
    }

    // Update only the text in the dedicated span
    let outputText = document.getElementById("outputText");
    outputText.innerText = reversed;
}

function reverseLetters() {
    let input = document.getElementById("inputText").value;

    // Remove leading and trailing spaces and reduce multiple spaces to a single space
    input = input.trim().replace(/\s+/g, ' ');

    // Split the input into words
    let words = input.split(' ');

    // Reverse each word and join them back into a string
    let reversed = words.map(word => word.split('').reverse().join('')).join(' ');

    // Update only the text in the dedicated span
    let outputText = document.getElementById("outputText");
    outputText.innerText = reversed;
}

///////////////////////////
// Utility Functions
/////////////////

function copyText() {
    // Get the text from the span within the output box
    let text = document.getElementById("outputText").innerText;
    // Use the navigator clipboard API to copy text
    navigator.clipboard.writeText(text).then(() => {
        
        console.log("Text copied to clipboard");
    }).catch(err => {
        console.error('Could not copy text: ', err);
    });
}

/* Alternative Solutions */
/*
function reverseWords() {
    let input = document.getElementById("inputText").value;
    let words = input.split(/\s+/);
    let reversedWords = words.reverse().join(' ');
    let resultBox = document.getElementById("result");
    resultBox.innerText = reversedWords;
}
*/