public class Solution {
    public int SingleNumber(int[] nums) {
        Dictionary<int , int> numbers = new();
        foreach(int num in nums){
           if(numbers.ContainsKey(num))
           numbers[num]++ ;
           else
           numbers[num] = 1;
        }

        // foreach(var pair in numbers){
        //     if(pair.Value < 2){
        //         return pair.Key;
        //     }
        // }
        // return -1 ; 
        return numbers.FirstOrDefault(x => x.Value == 1).Key;
    }
}