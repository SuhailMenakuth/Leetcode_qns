
public class Solution {
    public int Fib(int n) {
        List<int> fib = new List<int>();

        for(int i=0; i<=n ; i++){
            if (i == 0){
                fib.Add(i);
            }
            if(i == 1){
                fib.Add(i);
            }
            if(i>1){
                fib.Add(fib[i-1] + fib[i-2]);
            }
        }

        return fib[fib.Count - 1];
    }
}