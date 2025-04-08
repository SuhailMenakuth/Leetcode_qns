public class Solution {
    public void MoveZeroes(int[] arr) {
        int j = -1;
        for(int i=0; i < arr.Length; i++){
            if(arr[i] != 0 ){
                j++;
                arr[j] = arr[i];
            }
        }
        for(int i = j+1; i < arr.Length; i++){
            arr[i] = 0;
        }
       
    }
}