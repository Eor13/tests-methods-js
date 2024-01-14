let secretText =  "Por favor encontre a palavra secreta" //36 caracteres
//indexOf
console.log(secretText.indexOf("secreta")) // 29
console.log(secretText.indexOf("raiva")) // -1
console.log(secretText.indexOf("re",20)) //32

//lastIndexOf
console.log(secretText.lastIndexOf("re")) //32
console.log(secretText.lastIndexOf("amor"))  //-1
console.log(secretText.lastIndexOf("re",20)) //16

//search
console.log(secretText.search("secreta")) //29
console.log(secretText.search(/secreta/)) //29

//match
let myAnimals = "dog, cat, Dog, bird, mouse, horse, dog"
let animal = myAnimals.match(/dog/gi)
   //array
   console.log(animal) // 3 | dog,Dog,dog

console.log( animal.length + " | " + animal) // 3 | dog,Dog,dog

animal = myAnimals.match("dog")
console.log( animal.length + " | " + animal) // 1 | dog

animal = myAnimals.match(/dog/)
console.table(animal) 
        /*
        ┌─────────┬─────────────────────────────────────┐
        │ (index) │               Values                │
        ├─────────┼─────────────────────────────────────┤
        │    0    │                'dog'                │
        │  index  │                  0                  │
        │  input  │ 'dog, cat, Dog, bird, mouse, horse' │
        │ groups  │              undefined              │
        └─────────┴─────────────────────────────────────┘
        */

//matchAll
myAnimals = "dog, cat, Dog, bird, mouse, horse, dog"
  // Com Array.from
  animal = Array.from(myAnimals.matchAll(/dog/gi)) 
        /* (1) ['dog', 
        index: 0, 
        input: 'dog, cat, Dog, bird, mouse, horse, dog', 
        groups: undefined]
        */

  for (let i = 0; i < animal.length; i++) {
          console.log(animal[i][0]) // dog, Dog, dog
  }

  animal = Array.from(myAnimals.matchAll("dog"))
  for (let i = 0; i < animal.length; i++) {
          console.log(animal[i][0]) // dog, dog
  }

  // Com [...Iterator]
  let vowel = "ABCDEFG"
  const myArr = [...vowel.matchAll(/A/gi)];
  for (let i = 0; i < myArr.length; i++) {
        console.log(myArr[i][0]) // A
  }

//includes
myAnimals = "dog, cat, Dog, bird, mouse, horse, dog"
console.log(myAnimals.includes("dog")) //true
console.log(myAnimals.includes("cat",6)) // false

//startsWith
console.log(myAnimals.startsWith("bird")) //false
console.log(myAnimals.startsWith("cat",5)) //true

//endsWith
console.log(myAnimals.endsWith("dog")) //true
console.log(myAnimals.endsWith("cat",8)) //true

