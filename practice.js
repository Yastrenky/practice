// REDUCE: log the sum of numbers
const numbers = [5, 5, 5, 5, 5]

numbers.reduce((total,num)=>total + num , 0)
// MAP: uppercase each string and log the new array
const brands = ['toyota', 'ford', 'lamborghini']
brands.map((brand=>brand.toUpperCase()))

// FILTER: log only the blue cars
const cars = [
   {model: 'prius', color: 'brown'},
   {model: 'mustang', color: 'blue'},
   {model: 'firetruck', color: 'red'},
   {model: 'enzo', color: 'red'},
   {model: 'f-150', color: 'blue'}
]
cars.filter(car=>car.color==='blue')


// Write a function which receives an array and returns
// a new array with only the even elements present
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9]
numbers.filter(num=>{if((num%2)===0)return num})

// Write a function which receives a string and returns
// a new string with only the vowels.
const str = 'techlaunch'

str.split("").filter(voc=>{if(voc==='a'|| voc==='e'||voc==='i'||voc==='o'||voc==='u'){return voc}})
// Write a function which uses reduce to find the maximum
// value in a list.
const ages = [13, 78, 43, 92, 3, 14, 25, 38, 62]
ages.reduce((total,curr) => (total > curr) ? total:curr);
