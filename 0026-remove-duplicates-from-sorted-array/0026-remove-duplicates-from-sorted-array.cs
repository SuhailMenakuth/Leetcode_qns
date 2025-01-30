public class Solution {
    public int RemoveDuplicates(int[] nums) {
        
    // int i = 0;
    // int j = i + 1 ;
    // int current = nums[j];

    // while (i < nums.Length ){

    //     if(nums[i] == nums[j] ){
    //         i++ ;
    //     }

    //     else if (nums[i] > current ){
    //         current = nums[j];
    //         nums[j] = nums[i];
    //         j++;
    //         i++;
    //     }
    // }

    // return  j;
       if (nums.Length == 0) return 0;
        int i = 0;
        for (int j = 1; j < nums.Length; j++) {
            if (nums[j] != nums[i]) {
                i++;
                nums[i] = nums[j];
            }
        }
        return i + 1;
    }
}