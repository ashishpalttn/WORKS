int digit = Character.getNumericValue(str.charAt(0));
int number = Integer.parseInt("12345");
int[] intArray = str.toCharArray();
Map<Character, Integer> charCount = new hashMap<>(); -----> charCount.put(c, charCount.getOrDefault(c,0)+1)