/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var longestOnes = function(nums, k) {
    let i = 0 ;
    let j=0 ; 
    let maxLength = 0 ;
    let zerosCount = 0 ;
    while (j < nums.length){
        if(nums[j] == 0){
            zerosCount++;
        }

        while (zerosCount > k){
            if(nums[i] == 0){
              zerosCount--;
            }
            i++
        }

        maxLength = Math.max(maxLength , j - i + 1)
        j++;
    }
    return maxLength;

};