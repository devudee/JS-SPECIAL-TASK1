//   array methods
let favoriteFood = [
  "plantain",
  "afang",
  "edikaikong",
  "pounded yam",
  "beans",
  "peppersoup",
];
let soups = ["ogbono", "egusi", "okro", "afang", "bitterleafsoup"];

// 1. forEach : it executes a function once for each aarray element
favoriteFood.forEach((food) => console.log(food));
/**plantain 

afang 

edikaikong 

pounded yam 

beans 

peppersoup **/

// 2. map:

// 3. concat :it merges two or more arrays, does not chande the existing array but returns a new one
console.log(favoriteFood.concat(soups));
/** 
 * [ 'plantain',
  'afang',
  'edikaikong',
  'pounded yam',
  'beans',
  'peppersoup',
  'ogbono',
  'egusi',
  'okro',
  'afang',
  'bitterleafsoup' ]
 */

// 4. push : adds rlement to the end of an array and returns a new length
console.log(favoriteFood.push("spag", "noddles")); //8
console.log(favoriteFood);
/*[ 'plantain',
  'afang',
  'edikaikong',
  'pounded yam',
  'beans',
  'peppersoup',
  'spag',
  'noddles' ] **/

// 5. pop : removes the last element from an array and returns that element
console.log(favoriteFood.pop()); //noddles
console.log(favoriteFood);
/** 
 * [ 'plantain',
  'afang',
  'edikaikong',
  'pounded yam',
  'beans',
  'peppersoup',
  'spag' ]
 */

// 6. splice : this method add element depending on the postion to startwith and remove elements depending on the index of the element. this method uses parameters like (startwith, deletcount,item0, item1, /* … ,*/ itemN )
console.log(favoriteFood.splice(5, 5, "friedPlantain"));
/**
 * ['peppersoup', 'spag']
 */
console.log(favoriteFood);
/**
 * [ 'plantain',
  'afang',
  'edikaikong',
  'pounded yam',
  'beans',
  'friedPlantain' ]
 */
console.log(favoriteFood.splice(2, 2, "moimoi", "akara"));
/*
[ 'edikaikong', 'pounded yam' ]
*/
console.log(favoriteFood);
/*
[ 'plantain', 'afang', 'moimoi', 'akara', 'beans', 'friedPlantain' ]
*/

// 7. slice
console.log(favoriteFood.slice(2)); //[ 'moimoi', 'akara', 'beans', 'friedPlantain' ]
console.log(favoriteFood); //[ 'plantain', 'afang', 'moimoi', 'akara', 'beans', 'friedPlantain' ]

// 8. shift: use to remove an element at the the beginning of an array or remove the first element of an array
console.log(favoriteFood.shift()); //plantain
console.log(favoriteFood); //[ 'afang', 'moimoi', 'akara', 'beans', 'friedPlantain' ]

// 9. unshift ; use to add an element or elements at the the beginning of an array
console.log(favoriteFood.unshift("yam", "bread")); //7
console.log(favoriteFood.unshift("semo")); //8
console.log(favoriteFood);

// 10. join : use to concantenate or join strings together in an array and returns a new string
let soup = ["okra", "egusi", "banga"];
console.log(soup.join("")); //okraegusibanga
console.log(soup.join("-")); //okra-egusi-banga
// 11. every: it is use to check if all element in an array pass a test of a specific function and returns a boolean value

// 13. indexOf: it tells us the index of an element in an array and returns it number
console.log(soups); //[ 'ogbono', 'egusi', 'okro', 'afang', 'bitterleafsoup' ]
console.log(soups.indexOf("okro")); //2
console.log(soups.indexOf("afang")); //3
console.log(soups.indexOf("ogbono")); //0

// 14. reduce

// 15. sort: use to sort out or arrange an array in order of accending or descending order
console.log(favoriteFood.sort());
/**[ 'afang',
  'akara',
  'beans',
  'bread',
  'friedPlantain',
  'moimoi',
  'semo',
  'yam' ] */

// 16. reverse: use to reverse an array in the opposite direction.
console.log(favoriteFood.reverse());
/** 'yam',
  'semo',
  'moimoi',
  'friedPlantain',
  'bread',
  'beans',
  'akara',
  'afang' ] */

// 17. toString: it returns a string
let num4 = [4, 5, 6, 7];
console.log(num4.toString());
// 4,5,6,7
console.log(soups.toString());
// ogbono,egusi,okro,afang,bitterleafsoup

// 18. at
// 19. find
// 20. some
