// find the word ehich have more than 2 vowels

import java.util.*;
import java.util.stream.Collectors;

class Tain {
    public static void main(String[] args) {
       String str = "Oello how are you and where are you going now";
       String[] words = str.split(" ");
        List<String> result = Arrays.stream(words)
                                        .filter(word -> {
                                            if(isVowel(word)){
                                                return true;
                                            }
                                            return false;
                                        })
                                        .collect(Collectors.toList());
                        
                    
        System.out.println(result);
    }
    static boolean isVowel(String word){
        int vowelCount =0;
        for(int i=0; i<word.length(); i++){
            if("AEIOUaeiou".indexOf(word.charAt(i)) !=-1){
                vowelCount++;
            }
        }
        
        if(vowelCount>2){
            return true;
        }
        return false;
    }
}