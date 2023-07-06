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
/**plantain 

afang 

edikaikong 

pounded yam 

beans 

peppersoup **/

// 1. forEach : it executes a function once for each aarray element
favoriteFood.forEach((food) => console.log(food));

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

// 6. splice :
// 7. slice
// 8. shift
// 9. unshift
// 10. join
// 11. every
// 12. filter
// 13. indexOf
// 14. reduce
// 15. reverse
// 16. sort
// 17. toString
// 18. at
// 19. find
// 20. some
