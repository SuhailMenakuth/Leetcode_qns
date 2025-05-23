/**
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function(nums) {
    let seen = new Set();
    for (let num of nums) {
        if (seen.has(num)) {
            return num;
        }
        seen.add(num);
    }
    return -1;
}