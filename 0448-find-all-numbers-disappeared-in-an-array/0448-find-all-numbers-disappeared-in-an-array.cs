public class Solution {
    public IList<int> FindDisappearedNumbers(int[] nums) {
        
        
        for (int i = 0; i < nums.Count(); i++) {
            int index = Math.Abs(nums[i]) - 1; 
            if (nums[index] > 0) {
                nums[index] = -nums[index]; 
            }
        }

        
        List<int> disappearedNumbers = new List<int>();
        for (int i = 0; i < nums.Count(); i++) {
            if (nums[i] > 0) {
                disappearedNumbers.Add(i + 1); 
            }
        }

        return disappearedNumbers;
    }
}
