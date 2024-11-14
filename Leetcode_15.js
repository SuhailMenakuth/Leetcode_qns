// Input: nums = [-1,0,1,2,-1,-4]
// Output: [[-1,-1,2],[-1,0,1]]





// var threeSum = function (nums) {

//     let arr = []; 
//     let strTriplet = "";
   
    

//     for (let i = 0; i <= nums.length - 3; i++) {

//         let j = i+1;
        

//         // for (let j = i + 1; j <= nums.length - 2 ; j++)
//             //  {

//             let k = nums.length-1;
//             let  sum=nums[i]+nums[j];

//             while(  k != j){
//                 console.log(nums[i],nums[j],nums[k]);
//                 if(nums.length == 3 && nums[0]== 0 && nums[1]== 0 && nums[2] == 0 ) {
//                     return [[0,0,0]]
//                 }
                
//                 else if(sum + nums[k] !== 0 ){

//                     k--;
//                     continue;
//                 } 
//                 else{
             
//                 if (nums[i] + nums[j] + nums[k] == 0  && strTriplet.indexOf([nums[i],nums[j],nums[k]].sort(function(a,b){return a-b})) == -1 ) {
//                        strTriplet = strTriplet +  [nums[i],nums[j],nums[k]].sort(function(a,b){return a-b}).join();

//                         arr.push([nums[i], nums[j], nums[k]]);
//                         innerArr = [];       
//                 }
                


              

                
        

               
               
//             }
//             if(k - 1 == j && j<=nums.length-2  ){
//                 j++;
//                  k=nums.length-1;
                
//             }
//             else   k--;
            
            
//         // }
       
//     }
//  }
//     return arr;

// };


// result = threeSum([-1,0,1,2,-1,-4]);
// console.log(result);
var threeSum = function (nums) {
    let arr = [];
    let strTriplet = "";

    for (let i = 0; i <= nums.length - 3; i++) {
        let j = i + 1;
        let k = nums.length - 1;
        let sum = nums[i] + nums[j];

        while (k !== j) {
            console.log(nums[i], nums[j], nums[k]);
            if (nums.length == 3 && nums[0] == 0 && nums[1] == 0 && nums[2] == 0) {
                return [[0, 0, 0]];
            } else if (sum + nums[k] !== 0) {
                k--;
                continue;
            } else {
                let sortedTriplet = [nums[i], nums[j], nums[k]].sort((a, b) => a - b).join();
                
                if (sum + nums[k] == 0 && strTriplet.indexOf(sortedTriplet) === -1) {
                    strTriplet = strTriplet + sortedTriplet;
                    arr.push([nums[i], nums[j], nums[k]]);
                }
            }

            if (k - 1 == j && j <= nums.length - 2) {
                j++;
                k = nums.length - 1;
            } else {
                k--;
            }
        }
    }
    return arr;
};

result = threeSum([-1, 0, 1, 2, -1, -4]);
console.log(result);
