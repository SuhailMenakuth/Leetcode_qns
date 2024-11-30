/**
 * @param {number[]} nums
 * @return {number[][]}
 */
// var threeSum = function(nums) {
//     let newArray = [];
//     nums.sort(function(a,b) {return a-b});
//     for(let i=0; i<nums.length-1; i++){
//         let j=i+1;
//         let k=nums.length-1;
//         while(j !== k  ){
//             if(nums[j-1] == nums[i] && i != j-1){
//                 j++;
//                 continue;
//             }
//             else{
//                 if(nums[i] + nums[j] + nums[k] == 0){
//                     newArray.push([nums[i],nums[j],nums[k]])
//                     j++;
//                     }
//                     else if(nums[i] + nums[j] + nums[k] > 0){
//                         k--;
//                     }
//                     else if(nums[i] + nums[j] + nums[k] < 0){
//                         j++
//                     }
//             }
           

//         }
//     }
//         return newArray;
// };
var threeSum = function(nums) {
    let newArray = [];
    nums.sort((a, b) => a - b); 

    for (let i = 0; i < nums.length - 2; i++) {
        if (i > 0 && nums[i] === nums[i - 1]) continue;

        let j = i + 1;
        let k = nums.length - 1;

        while (j < k) {
            let sum = nums[i] + nums[j] + nums[k];
            if (sum === 0) {
                newArray.push([nums[i], nums[j], nums[k]]);
                while (j < k && nums[j] === nums[j + 1]) j++;
                while (j < k && nums[k] === nums[k - 1]) k--;


                j++;
                k--;
            } else if (sum > 0) {
                k--;
            } else {
                j++;
            }
        }
    }

    return newArray;
};
