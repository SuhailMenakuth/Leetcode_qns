public class Solution {
    public int SearchInsert(int[] nums, int target) {
        int mid = nums.Length / 2 ;
        int start = 0 ; 
        int end = 0;
        int result = 0 ; 
        if (nums[mid] <  target ){
            
            start = mid ;
            end = nums.Length - 1;
        }
        else if(nums[mid] ==  target) {
            return mid ;

        }
        else {
            start = 0;
            end = mid ;
        }
      
      
        for(int i = start ; i <= end ; i++){
                result = i ;
            if(nums[i] == target || nums[i] > target){
                return i; 

            }
        }
       return result + 1 ;

    }
}