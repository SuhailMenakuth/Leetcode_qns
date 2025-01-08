/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    let sortedArray = nums.sort(function(a,b) {return a-b})

    for (let i = 1; i < sortedArray.length; i++) {
        if (sortedArray[i] - sortedArray[i - 1] != 1) {
            return sortedArray[i - 1] + 1; 
    }
    }

    if (sortedArray[0] != 0) {
        return 0; 
    }
    return sortedArray[sortedArray.length - 1] + 1;
};