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

    updateOutputText(reversed);
}

function reverseLetters() {
    let input = document.getElementById("inputText").value;

    // Remove leading and trailing spaces and reduce multiple spaces to a single space
    input = input.trim().replace(/\s+/g, ' ');

    // Split the input into words
    let words = input.split(' ');

    // Reverse each word and join them back into a string
    let reversed = words.map(word => word.split('').reverse().join('')).join(' ');

    updateOutputText(reversed);
}

function palindromizeWords() {
    let input = document.getElementById("inputText").value;

    // Split the input into words
    let words = input.split(/\s+/);

    // Transform each word into a palindrome
    let palindromized = words.map(word => word + word.slice(0, -1).split('').reverse().join('')).join(' ');

    updateOutputText(palindromized);
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

document.getElementById('nightShift').addEventListener('change', function () {
    document.body.classList.toggle('night-mode');
});

function updateOutputText(newText) {
    var outputTextElement = document.getElementById('outputText');
    outputTextElement.textContent = newText;
}
