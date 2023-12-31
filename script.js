function reverseWords() {
    let input = document.getElementById("inputText").value;

    // Remove leading spaces
    let start = input.search(/\S/);
    if (start === -1) {
        document.getElementById("result").innerText = "";
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

    let resultBox = document.getElementById("result");
    resultBox.innerText = reversed;
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