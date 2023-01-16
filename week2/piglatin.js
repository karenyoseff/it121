function pigLatin(input) {
    if (input === "" || input.length == 1) {
      return "input can't be translated";
    }
    
    let vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
    let newWord= "";
    words = input.split(" ");
    for (let i = 0; i < words.length; i++) {
      word = words[i];
      if (i > 0) {
        newWord += " ";
      }
      
      if (vowels.indexOf(word[0]) > -1) {
        newWord += word + "way";
      } else {
        if (vowels.indexOf(word[1]) == -1) {
          newWord += word.substring(2) + word.substring(0, 2) + "ay";
        } else {
          newWord += word.substring(1) + word.substring(0, 1) + "ay";
        }
      }
    }
    
    return newWord;
  }