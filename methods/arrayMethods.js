//leght
const carsModelsFrom80s =["Fusca", "Brasília", "Gol", "Fiat 147", "Monza", "Corvette"]
let sizeCars = carsModelsFrom80s.length
console.log(sizeCars) // 6

//toString
const elementsTypes = ["Fire", "Water", "Ground", "Grass", "Eletric", "Normal"]
let toStringElements = elementsTypes.toString()
console.log(toStringElements) // Fire,Water,Ground,Grass,Eletric,Normal
console.log(typeof(toStringElements)) // string

//at
const vegetables = [ "Pepino", "Cenoura", "Rúcula", "Couve-Flor", "Espinafre"]
console.log(vegetables.at(2)) // Rúcula | retorna o que o vegetables[2]

//join
const elementsType = ["Fire", "Water", "Ground", "Grass", "Eletric", "Normal"]
let joinElements = elementsType.join(" | ")
console.log(joinElements) // Fire | Water | Ground | Grass | Eletric | Normal
console.log(typeof(joinElements)) // string

//pop
let berries = ["banana", "maça","laranja","pêra"]
//Retirando o ultimo o elemento do array
let berry = berries.pop()
//verificando o array
console.log(berries)// ["banana", "maça","laranja"]
//verificando o elemento retirado do array
console.log(berry) // ["pêra"]

//push
berries = ["banana", "maça","laranja","pêra"]
//Inserindo um elemento no final do array
let newFruit = berries.push("maracujá")
//verificando o array
console.log(berries) // ['banana', 'maça', 'laranja', 'pêra', 'maracujá']
// vericando a posição do novo ultimo elemento
console.log(newFruit) // 5

//shift
let cartoons = ["Pica-Pau", "Lonney Tonnes", " Tom e Jerry"]
//Retirando o primeiro o elemento do array
let cartoon = cartoons.shift()
//verificando o array
console.log(cartoons) // ['Lonney Tonnes', ' Tom e Jerry']
//verificando o elemento retirado do array
console.log(cartoon) //  Pica-Pau

//unshift
cartoons = ["Pica-Pau", "Lonney Tonnes", " Tom e Jerry"]
//Inserindo um elemento no final do array
let newCartoon = cartoons.unshift("Flintstones")
//verificando o array
console.log(cartoons) // ['Flintstones', 'Pica-Pau', 'Lonney Tonnes', ' Tom e Jerry']
// vericando a posição do novo ultimo elemento
console.log(newCartoon) // 4

//Changing Elements
cartoons = ["Pica-Pau", "Lonney Tonnes", " Tom e Jerry"]
cartoons[1] = "Super Amigos"
console.log(cartoons) // ['Pica-Pau', 'Super Amigos', ' Tom e Jerry']

//Deleting Elements
cartoons = ["Pica-Pau", "Lonney Tonnes", " Tom e Jerry"]
console.log(cartoons[0]) // Pica-Pau
delete cartoons[0]
// Quando deletamos um elemento de array, o seu index ainda permanece,assim retornando o valor como undefined
console.log(cartoons) // […, 'Lonney Tonnes', ' Tom e Jerry']
console.log(cartoons[0]) // undefined

//concat
const myMouses = ["Pink", "Hamtaru", "Cerebro", "Mickey"]
const myDogs = ["Rex", "Caramelo", "Bobby", "Pluto"]
const myPets = myMouses.concat(myDogs)
console.log(myPets) 
// ['Pink', 'Hamtaru', 'Cerebro', 'Mickey', 'Rex', 'Caramelo', 'Bobby', 'Pluto']

//copyWithin
let animalsCartoons = ["Pink", "Hamtaru", "Cerebro", "Mickey","Tails", "Sonic", "Emma", "Nuckey"]
console.log(animalsCartoons)
// método copiará os elementos todos elementos a partir da posição 1, substituindo a partir da 3 posição
animalsCartoons.copyWithin(3,1)
console.log(animalsCartoons) 
    // ['Pink', 'Hamtaru', 'Cerebro', 'Hamtaru', 'Cerebro', 'Mickey', 'Tails', 'Sonic']
//esse método copiará os elementos na posição 0 há 4 ,substituindo a partir da 2 posição 
animalsCartoons = ["Pink", "Hamtaru", "Cerebro", "Mickey","Tails", "Sonic", "Emma", "Nuckey"]
animalsCartoons.copyWithin(2,0,4)
console.log(animalsCartoons) 
    // ['Pink', 'Hamtaru', 'Pink', 'Hamtaru', 'Cerebro', 'Mickey', 'Emma', 'Nuckey']
 
//flat
let names1 = ["maria","joão","arthur"]
let names2 = ["marcos","simone","vinicius"]
let names3 = ["bianca","rafael","bruno"]
let listNames = [names1, names2, names3]
console.log(listNames) // [Array(3), Array(3), Array(3)]
console.log(listNames.flat())
// ['maria', 'joão', 'arthur', 'marcos', 'simone', 'vinicius', 'bianca', 'rafael', 'bruno']

//splice
let years = [1980,1985,1990,1995,2000,2005,2010,2015,2020]
console.log(years)
// [1980, 1985, 1990, 1995, 2000, 2005, 2010, 2015, 2020]
let selectYears = years.splice(3,6)
console.log(selectYears) 
// [1995, 2000, 2005, 2010, 2015, 2020]
console.log(years) 
// [1980, 1985, 1990]

//toSpliced
years = [1980,1985,1990,1995,2000,2005,2010,2015,2020]
//removendo o elementos a partir da posição 1, os 3 próximos elementos 
selectYears = years.toSpliced(1,3)
console.log(selectYears) 
// [1995, 2000, 2005, 2010, 2015, 2020]
console.log(years) 
// [1980, 1985, 1990, 1995, 2000, 2005, 2010, 2015, 2020]

//remove o elementos a partir da posição 1, os 3 próximos elementos, e adiciona os valores especificados "1986,1991"
selectYears = years.toSpliced(1,3,1986,1991)
console.log(selectYears) 
// [1995, 2000, 2005, 2010, 2015, 2020]
console.log(years) 
// [1980, 1985, 1990, 1995, 2000, 2005, 2010, 2015, 2020]



