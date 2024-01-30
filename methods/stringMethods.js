
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
