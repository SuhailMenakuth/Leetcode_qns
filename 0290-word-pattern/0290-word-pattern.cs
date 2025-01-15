public class Solution {
public bool WordPattern(string pattern, string s) {
        
// List<string> fruits = input.Split(',').ToList();
string[] words = s.Split(' ');

if(pattern.Length != words.Length) return false;

Dictionary<char , string> patternToWord = new Dictionary<char , string>();
Dictionary<string, char> wordToPattern = new Dictionary<string, char>();
for(int i = 0; i< pattern.Length; i++){
    char currentChar =  pattern[i];
    string currentWord = words[i];

    if (patternToWord.ContainsKey(currentChar)){

        if(patternToWord[currentChar] != currentWord) return false;
    }
    else {
        
                if (wordToPattern.ContainsKey(currentWord)) {
                    return false;
                }
                patternToWord[currentChar] = currentWord;
                wordToPattern[currentWord] = currentChar;
            }

   
}
 return true;


    }
}