/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumOperations = function(nums) {
    
    let OperationCount = 0;
    nums.forEach(num =>{
    const reminder = num % 3;
    if (reminder == 1){
        OperationCount += 1;

    }
    else if(reminder == 2){
        OperationCount +=1
    }
    }

    )
return OperationCount;
};