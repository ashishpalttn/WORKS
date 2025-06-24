import java.util.Arrays;
import java.util.stream.Collectors;

public class SortSentenceStream {
    public static void main(String[] args) {
        String sentence = "Java is a powerful language";

        String sortedSentence = Arrays.stream(sentence.split(" "))
                .sorted(String.CASE_INSENSITIVE_ORDER)
                .collect(Collectors.joining(" "));

        System.out.println("Sorted Sentence: " + sortedSentence);
    }
}