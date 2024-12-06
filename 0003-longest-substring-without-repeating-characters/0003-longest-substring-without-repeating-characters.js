/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let maxLength = 0;
    let hashArray = {};
    let r = 0 ;
    let l = 0 ;
    let len = 0;
    while (r < s.length){
        if(hashArray[s[r]] != undefined){
            if(hashArray[s[r]] >= l){
                l = hashArray[s[r]]+1;
            }
        }
     len = r-l+1;
     maxLength = Math.max(len,maxLength);
     hashArray[s[r]] = r;
     r++;
    }
    return maxLength

};