public class Solution {
    public string LongestCommonPrefix(string[] strs) {
if (strs == null || strs.Length == 0) {
            return "";
        }
        
        string first = strs[0];
        for (int i = 0; i < first.Length; i++) {
            char currentChar = first[i];
            foreach (string s in strs) {
                if (i >= s.Length || s[i] != currentChar) {
                    return first.Substring(0, i);
                }
            }
        }
        return first;
    }
}