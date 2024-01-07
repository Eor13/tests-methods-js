
let text = "Esse método irá retorna o tamanho de caracteres presentes na variável";

//Lenght
console.log(text.length); //69

let Hello = "olá Pessoal!";
//charAt()
console.log(Hello.charAt(4));  //P

//charCodeAt()
console.log(Hello.charCodeAt(4)) //80

//at()
console.log(Hello.at(5)) //e
console.log(Hello.at(-1)) //!

//slice
let fruits = "Ameixa, Banana, Kiwi, Jabuticaba";
let fruta = fruits.slice(8, 14)
console.log(fruta); //Banana
fruits = ["Banana","Maça", "Laranja", "Uva"];
fruits = fruits.slice(1,3) // INÍCIO   ,  FIM+1
console.log(fruits) //['Maça', 'Laranja']
fruits = fruits.slice(-2,-1) // nesse exemplo os 2 parametros devem ser negativos
console.log(fruits) //['Maça']

//substring
let cars = "Montana, Fionrino, Pampa, Courier, Hoggar";
let car = cars.substring(9,17) //Fiorino
console.log(car)
car = cars.substring(-18) //Montana, Fionrino, Pampa, Courier, Hoggar
console.log(car)

//substr
car = cars.substr(4,3)
console.log(car) //ana
car = cars.substr(35) // com um unico parametro
console.log(car) //Hoggar
car = cars.substr(-6)
console.log(car) //Hoggar

//toUpperCase()
let phrase = "Olá Mundo!"
console.log(phrase.toUpperCase()) //OLÁ MUNDO!
//toLowerCase()
console.log(phrase.toLowerCase()) //olá mundo!

//concat

let phrase1 = "O nome no meu cachorro é "
let dog = "Floquinho"
console.log(phrase1.concat(dog)) // O nome no meu cachorro é Floquinho

//trim
let cat = "      Snowbell          "
console.log(cat.trim()) //Snowbell
console.log(cat.trimStart()) //Snowbell     
console.log(cat.trimEnd()) //      Snowbell

//pad
let padPhrase = "5";
console.log(padPhrase.padStart(4,"x")) //xxx5
console.log(padPhrase.padStart(4,0)) //0005
console.log(padPhrase.padEnd(4,"x")) //5xxx

//repeat
let browers = " Crhome, Edge, FireFox, Opera "
console.log(browers.repeat(3)) // Crhome, Edge, FireFox, Opera  Crhome, Edge, FireFox, Opera  Crhome, Edge, FireFox, Opera

//replace
let ListMarketplace ="Feijão Branco, Feijão Carioca, Feijão Fradinho" 
console.log(ListMarketplace.replace("Feijão", "Macarrão")) 
//Macarrão Branco, Feijão Carioca, Feijão Fradinho
console.log(ListMarketplace.replace(/Feijão/g, "Macarrão")) 
//Macarrão Branco, Macarrão Carioca, Macarrão Fradinho
console.log(ListMarketplace.replace(/feijão/i, "Macarrão")) 
//Macarrão Branco, Feijão Carioca, Feijão Fradinho

//replaceAll
let text1 = "Cachorros comem muito, quando os cachorros comem assim eles engordam muito. Cachorros precissam ter uma alimentação balanceada para não engordarem.";
text1 = text1.replaceAll("Cachorros","Gatos");
// text1 = text1.replaceAll(/cachorros/,"gatos"); //dá Erro
text1 = text1.replaceAll(/cachorros/g,"gatos");
console.log(text1) //Gatos comem muito, quando os gatos comem assim eles engordam muito. Gatos precissam ter uma alimentação balanceada para não engordarem.

//split
let games = "ps1,ps2,xbox,SuperNintendo,ps4,ps3,Xbox360,Xbox One,Nintendo Wii,Nintento Switch"
let game = games.split(",")

for (let i = 0; i < 3; i++) {
  console.log(game[i])
}
// console.log(game) //['ps1', ' ps2', ' xbox', ' SuperNintendo', ' ps4', ' ps3', ' Xbox360', ' Xbox One', ' Nintendo Wii', ' Nintento Switch']

let book = "Harry Potter"
let reservaBook= book.split("")
for (let i = 0; i < reservaBook.length; i++) {
  console.log(reservaBook[i])
}
