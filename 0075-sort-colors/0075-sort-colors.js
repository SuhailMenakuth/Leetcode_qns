/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function(nums) {
   var sorted = nums.sort(function(a,b) {return a-b})
    return sorted
};