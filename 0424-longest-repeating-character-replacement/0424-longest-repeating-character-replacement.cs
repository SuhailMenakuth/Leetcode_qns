public class Solution {
    public int CharacterReplacement(string s, int k) {
        
     int[] charCount =  new int[26];
     int lef = 0 , maxFreq = 0 , maxLen = 0  ;

     for(int rig=0; rig<s.Length ; rig++){
        charCount[s[rig] - 'A' ]++;

        maxFreq = Math.Max(maxFreq , charCount[s[rig] - 'A']);

        if(rig - lef+1 - maxFreq > k){
            charCount[s[lef] - 'A']-- ;
            lef++;
        }
        maxLen = Math.Max(maxLen , rig - lef+1);
     }

     return maxLen;

    }
}