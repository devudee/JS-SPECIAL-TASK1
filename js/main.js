let sentence =
  "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quaerat sunt possimus voluptas accusantium";
//   STRING METHODS IN Js
// 1. toUpperCase : changes the structure a string or text from small letters to capital letter
console.log(sentence.toUpperCase()); //LOREM, IPSUM DOLOR SIT AMET CONSECTETUR ADIPISICING ELIT. QUAERAT SUNT POSSIMUS VOLUPTAS ACCUSANTIUM

// 2. toLowerCase : changes the structure of a string or text from capital letter to small letter
console.log(sentence.toLowerCase()); //lorem, ipsum dolor sit amet consectetur adipisicing elit. quaerat sunt possimus voluptas accusantium
console.log("I LOVE JAVASCRIPT".toLowerCase()); //i love javascript

// 3. includes : it checks if a word or sentence can be found in a string and returns a boolean value. in other words it can be use to compare similar words from two or more strings.
let word1 = " transportation";
let word2 = "amet consectetur ";
console.log(sentence.includes(word1)); //false
console.log(sentence.includes(word2)); //true
console.log(sentence.includes("sunt possimus")); //true

// 4. indexOf : it search a string and return the index of the first occurence.
console.log(sentence.indexOf("amet")); //23
console.log("it is good to be good always".indexOf("good")); //6

// 5. lastIndexOf:it returns the index of the last occurence in a given string or an array.
console.log(sentence.lastIndexOf("amet")); //23
console.log("it is good to be good always".lastIndexOf("good")); //17

// 6. charAt
console.log(sentence.charAt(50)); //g

// 7. repeat : it repeats a particular string depending on the number of times call and concatenate them together
console.log(word1.repeat(4)); //transportation transportation transportation transportation

// 8. search
// 9. startsWith : it checks if a string begin with a particular charcter and return a boolean value.
console.log("transportation".startsWith("t")); //true
console.log("transportation".startsWith("tran")); //true
console.log("transportation".startsWith("T")); //false

// 10. endsWith : it check if a string ends with a particular character or string and appropraitely return a boolean value.
console.log("it is good to be good always".endsWith("always")); //true
console.log("it is good to be good always".endsWith("ways")); //true
console.log("it is good to be good always".endsWith("s")); //true
console.log("it is good to be good always".endsWith("good")); //false

// 11. valueOf : it returns the primitive value of a string
console.log("it is good to be good always".valueOf()); // it is good to be good always
let number = 8;
console.log(number.valueOf()); //8

// 12. slice
console.log(sentence.slice(60)); //aerat sunt possimus voluptas accusantium
console.log(sentence.slice(70)); //possimus voluptas accusantium

// 13. concat
console.log("hello".concat(" good morning")); //hello good morning

//  14. replace : to replace a string with a new string
let sent = "html is fun, i love html.";
console.log(sent.replace("html", "javascript")); //javascript is fun, i love html.

//  15. replaceAll
console.log(sent.replaceAll("html", "javascript")); //javascript is fun, i love javascript.
