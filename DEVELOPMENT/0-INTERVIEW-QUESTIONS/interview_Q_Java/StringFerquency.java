// count the frequency of each character in a string

import java.util.*;

public class StringFerquency {

    public static void main(String[] args){
        String str = "HelloWorld";
        Map<Character, Integer> charCountMap = new HashMap<>();
        for (char c : str.toCharArray()){
            if(charCountMap.containsKey(c)){
                charCountMap.put(c, charCountMap.get(c)+1);
            }
            else{
                charCountMap.put(c, 1);
            }
        }
        char maxChar = ' ';
        int maxCount = 0;
        for (Map.Entry<Character, Integer> entry : charCountMap.entrySet()){
            if(entry.getValue()>maxCount){
                maxCount = entry.getValue();
                maxChar = entry.getKey();
            }
          
        }
        System.out.println(maxChar + " " + maxCount);

    }
    
}
