#include <iostream>
#include <string>
#include <stack>
using namespace std;

string reverseWords(string s);

int main() {
    // Test Data
    cout << "'" << reverseWords("the sky is blue") << "'" << endl;
    cout << "'" << reverseWords("  hello world  ") << "'" << endl;
    cout << "'" << reverseWords("a good   example") << "'" << endl;
    cout << "'" << reverseWords("  Bob    Loves  Alice   ") << "'" << endl;

    return 0;
}

string reverseWords(string s) {
    // Remove leading spaces (if applicable)
    std::size_t start = s.find_first_not_of(' ');
    if (start == std::string::npos) {
        return "";
    }
    s = s.substr(start);

    // Remove trailing spaces (if applicable)
    while (s.rfind(' ') == s.length() - 1) {
        s.pop_back();
    }

    stack<std::string> words;
    std::string reversed = "";
    int length = s.length();

    // Process words
    for (int i = 0; i < length; ++i) {
        // Add letters to the temporary string (reversed) until we encounter a space
        if (s[i] != ' ') {
            reversed += s[i];
        }
        else {
            // Insert a space before each word and push it onto the stack
            if (!reversed.empty()) {
                words.push(reversed.insert(0, " "));
                reversed = "";
            }
        }
    }

    // Pop items from stack to form a reversed string
    while (!words.empty()) {
        reversed += words.top();
        words.pop();
    }
    return reversed;
}