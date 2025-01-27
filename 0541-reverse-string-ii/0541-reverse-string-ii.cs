public class Solution {
    public string ReverseStr(string s, int k) {
        char[] charArray = s.ToCharArray();
        
        for (int start = 0; start < charArray.Length; start += 2 * k) {
            int i = start;
            int j = Math.Min(start + k - 1, charArray.Length - 1);
            
            while (i < j) {
                char tmp = charArray[i];
                charArray[i++] = charArray[j];
                charArray[j--] = tmp;
            }
        }
        
        return new string(charArray);
    }
}


