//slice
//Com string
let fruits = "Ameixa, Banana, Kiwi, Jabuticaba";
let fruta = fruits.slice(8, 14)
console.log(fruta); //Banana

//Com Array
fruits = ["Banana","Maça", "Laranja", "Uva"];
let frutas= fruits.slice(1,3) // INÍCIO   ,  FIM+1
console.log(frutas) //['Maça', 'Laranja']

//Com Parametros negativos
frutas = fruits.slice(-4,-1) 
// Buscará os elementos contando a partir do ultimo.  
// Não permite zero.
console.log(frutas) //['Banana', 'Maça', 'Laranja']

//substring
let cars = "Montana, Fionrino, Pampa, Courier, Hoggar";
let car = cars.substring(9,17) 
console.log(car)//Fiorino

//os parâmetros menores que zero são classificados como zero
car = cars.substring(-18) 
console.log(car) //Montana, Fionrino, Pampa, Courier, Hoggar

//substr
car = cars.substr(4,3)
console.log(car) //ana
car = cars.substr(35) // com um unico parametro
console.log(car) //Hoggar
car = cars.substr(-6)
console.log(car) //Hoggar