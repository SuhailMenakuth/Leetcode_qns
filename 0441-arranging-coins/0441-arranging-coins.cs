public class Solution {
    public int ArrangeCoins(int n) {

        int i = 1;
        // int remaining = n;
        int completed = 0;
        while(i <= n){
            // if (n < i){
            //     break;
            // }
            // else{
                n = n -i;
                i++;
                completed += 1;
            // }
        }
        return completed;
        
    }
}