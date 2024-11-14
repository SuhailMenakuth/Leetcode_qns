<<<<<<< HEAD

var longestConsecutive = function(nums) {

    nums =  nums.sort(function(a,b) {return a-b});
    //nums = new Set(nums)

    if(nums.length == 0 ) return null;
    else if(nums.length == 1) return 1;
    else if(nums.length == 2 && nums[1] - nums[0] != 1) return 1;

    let currentLength = 0;
    let maxLength = 0;
    let currentSequence = [];
    currentSequence.push(nums[0]);

    for(let i=0 ; i<nums.length-1 ; i++ ){

        if(nums[i] == nums[i+1] ) continue;

        if( nums[i] -nums[i+1] == - 1 ){

            currentSequence.push(nums[i+1]); 
            currentLength = currentSequence.length;
            if(maxLength < currentLength) maxLength = currentLength;


        }

        else{
        
            currentSequence = [];
            currentSequence.push(nums[i]);
            currentLength = currentSequence.length;
            if(maxLength < currentLength) maxLength = currentLength;

        }



        
    }



    return maxLength;

    
=======

var longestConsecutive = function(nums) {

    nums =  nums.sort(function(a,b) {return a-b});
    //nums = new Set(nums)

    if(nums.length == 0 ) return null;
    else if(nums.length == 1) return 1;
    else if(nums.length == 2 && nums[1] - nums[0] != 1) return 1;

    let currentLength = 0;
    let maxLength = 0;
    let currentSequence = [];
    currentSequence.push(nums[0]);

    for(let i=0 ; i<nums.length-1 ; i++ ){

        if(nums[i] == nums[i+1] ) continue;

        if( nums[i] -nums[i+1] == - 1 ){

            currentSequence.push(nums[i+1]); 
            currentLength = currentSequence.length;
            if(maxLength < currentLength) maxLength = currentLength;


        }

        else{
        
            currentSequence = [];
            currentSequence.push(nums[i]);
            currentLength = currentSequence.length;
            if(maxLength < currentLength) maxLength = currentLength;

        }



        
    }



    return maxLength;

    
>>>>>>> 43fd5350a3db96d155c65cde7c552e91d1237e93
};