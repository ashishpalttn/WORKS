// count the frequency of each character in a string
// Important methods of Map interface
// 1. put(K key, V value) - adds a key-value pair to the map
// 2. get(Object key) - retrieves the value associated with the specified key
// 3. containsKey(Object key) - checks if the map contains the specified key
// 4. entrySet() - returns a set view of the mappings contained in the map
// 5. keySet() - returns a set view of the keys contained in the map
// 6. values() - returns a collection view of the values contained in the map
// 7. size() - returns the number of key-value pairs in the map
// 8. isEmpty() - checks if the map is empty

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
