//Impotent methods in Java 8 Stream API
// 1. filter(Predicate<? super T> predicate) - filters elements based on a condition
// 2. map(Function<? super T, ? extends R> mapper) - transforms elements from one type to another
// 4. distinct() - removes duplicate elements
// 5. sorted() - sorts elements in natural order
// 8. limit(long maxSize) - limits the number of elements in the stream
// 9. skip(long n) - skips the first n elements of the stream
// 11. collect(Collector<? super T, A, R> collector) - collects elements into a collection or other data structure
// 12. reduce(BinaryOperator<T> accumulator) - reduces the stream to a single value using an accumulator
import java.util.*;
import java.util.stream.Collectors;
class Main {
    public static void main(String[] args) {
    List<String> arr = Arrays.asList("Zshish", "Amil", "Manoj", "Mohit", "Pal","Pal");
        List<String> result = arr.stream()
            .map(item->{
                return item.toUpperCase(); 
            })
            .skip(3)
            .collect(Collectors.toList());
        
        System.out.println(result) ;  
        
        List<Integer> numbers = Arrays.asList(1,2,3,4,5,6);
        int sum = numbers.stream()
                    .reduce(0, (acc,curr) ->{
                        System.out.println(curr);
                        return acc+curr; }
                        );
        System.out.println(sum);
    }
}