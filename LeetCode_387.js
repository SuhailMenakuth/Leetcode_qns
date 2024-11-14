/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
    let result = false
    for(let i=0 ; i<s.length ; i++){
        if (s.indexOf(s[i]) == s.lastIndexOf(s[i])){
            result = true;
            return i;
        }
    }

    if(result == false){
        return -1;
    }
    
};