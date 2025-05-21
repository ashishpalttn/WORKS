import java.util.*;
import java.util.stream.Collectors;

class Main {
    public static void main(String[] args) {
       String str = "Hello how are you and where are you going now";
       String[] words = str.split(" ");
       System.out.println(words[0]);
        List<String> result = Arrays.stream(words)
                    .map(item->item.substring(0,1).toUpperCase()+item.substring(1))
                    .collect(Collectors.toList());
                    
        System.out.println(result);
    }
}