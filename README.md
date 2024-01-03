# Reverse Text Generator

A simple web tool that reverses the order of words or letters in a string of text.

![image](https://github.com/danieldotwav/Reverse-Text-Generator/assets/31682816/8a0ed206-6c66-4bee-8fd1-d919d54d0b50)

## Link

[Web Application](https://danieldotwav.github.io/Reverse-Text-Generator/)

## Features

- **Reverse Words**: Reorder the words in a string in reverse. For example, "hello world" becomes "world hello".
- **Reverse Letters**: Reverse the letters in each word while maintaining the word order. For example, "hello world" becomes "olleh dlrow".
- **Copy to Clipboard**: Easily copy the transformed text to the clipboard with a single click.

## Algorithm and Efficiency

The `reverseWords` function employs a stack-based algorithm to reverse the order of words in a string. Stacks operate on a Last In, First Out (LIFO) principle, making them ideal for this use case.

### Process

- The function starts by trimming leading and trailing spaces.
- It then iterates through the string, grouping characters into words and pushing each word onto the stack when a space is encountered.
- After the entire string has been processed, words are popped from the stack to form the reversed string, effectively reversing the word order.

### Time Complexity

The time complexity of the `reverseWords` function is O(n), with n being the length of the input string. This linear complexity arises because each character is processed exactly once.

The `reverseLetters` function also has a time complexity of O(n), as it involves splitting the input into words and then reversing each word's characters before joining them back together.

### Technical Considerations

Due to the immutability of strings in JavaScript, concatenation operations create new strings, which can be inefficient for very large strings. In such cases, alternative methods that avoid creating multiple intermediate strings may offer improved performance.

## Usage

Simply type or paste text into the input area and click on the "Reverse Words" or "Reverse Letters" button as needed. The reversed text will appear in the output area below the buttons. Use the copy icon to copy the text to your clipboard.

## Copy Button

This small button with a clipboard icon allows users to copy the reversed text with ease. It uses the Clipboard API to copy text to the user's clipboard.

## Technologies

- HTML5
- CSS3
- JavaScript
- [Material Symbols Outlined](https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0) for the copy icon
