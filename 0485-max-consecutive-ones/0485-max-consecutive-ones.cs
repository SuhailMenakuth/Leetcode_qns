public class Solution {
    public int FindMaxConsecutiveOnes(int[] nums) {
        int maxCount = 0 , i = 0 , j = 0 ;
    int n = nums.Length;
    while(j < n){
        if(nums[j] != 0){
            j++;
            if(j - i > maxCount)
            maxCount = j - i;
        }
        else{
            j++ ;
            if(j < n)
            i = j ; 
        }
    }
    return maxCount;
    }
}