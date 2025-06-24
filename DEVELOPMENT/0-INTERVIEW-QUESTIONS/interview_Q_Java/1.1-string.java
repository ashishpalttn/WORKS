// convert first letter of each word to uppercase;
// sort the string;
import java.util.*;
import java.util.stream.Collectors;

class Main {
    public static void main(String[] args) {
       String str = "Hello how are you and where are you going now";
       String[] words = str.split(" ");
        List<String> result = Arrays.stream(words)
                    .map(item->item.substring(0,1).toUpperCase()+item.substring(1))
                    .collect(Collectors.toList());
                    
        String finalResult = String.join(" ",result);
        System.out.println(finalResult);
        test2();
     
    }
    static void test2(){
        Main ts = new Main();
        ts.test();
        System.out.println("test2");
     
    }
     void test(){
        System.out.println("test1");
    }
 
}