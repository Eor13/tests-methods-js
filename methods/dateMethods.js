//Primeiro é necessário instanciar um Date Object.

//Podemos instaciar Date Object como uma data especifica.
const dt = new Date(2020,10,31,13,49,2,256); // Tue Dec 01 2020 13:49:02 GMT-0300 (Horário Padrão de Brasília)
console.log(dt)

//Podemos também instaciar Date Object vazio que que constará a data, horas e UTC do momento da criação.
const date = new Date();
console.log(date) //Testa aí! Minha data do teste foi: -->  Thu Feb 22 2024 21:25:46 GMT-0300 (Horário Padrão de Brasília)

// Get Methods
console.log(date.getFullYear()); //2024
console.log(date.getMonth()); //1
console.log(date.getDate()); //22
console.log(date.getDay()); //4 
// "Que dia da semana é 4?"
const weekDay =["Domingo","Segunda","Terça","Quarta","Quinta","Sexta","Sábado"];
console.log(weekDay[date.getDay()]) //Quinta
console.log(date.getHours()); //21
console.log(date.getMinutes()); //25
console.log(date.getSeconds()); //46
console.log(date.getMilliseconds()); //76
console.log(date.getTime()); //1708647946716

// Set Methods
date.setDate(12)
console.log(date) // Mon Feb 12 2024 22:06:05 GMT-0300 (Horário Padrão de Brasília)
date.setMonth(8)
console.log(date) // Thu Sep 12 2024 22:06:05 GMT-0300 (Horário Padrão de Brasília)
date.setFullYear(2012)
console.log(date) // Wed Sep 12 2012 22:06:05 GMT-0300 (Horário Padrão de Brasília)
date.setHours(2)
console.log(date) // Wed Sep 12 2012 02:06:05 GMT-0300 (Horário Padrão de Brasília)
date.setMinutes(59)
console.log(date) // Wed Sep 12 2012 02:59:05 GMT-0300 (Horário Padrão de Brasília)
date.setSeconds(26)
console.log(date) // Wed Sep 12 2012 02:59:26 GMT-0300 (Horário Padrão de Brasília)
date.setMilliseconds(159)
console.log(date) // Wed Sep 12 2012 02:59:26 GMT-0300 (Horário Padrão de Brasília)
date.setTime(232132134)
console.log(date) // Sat Jan 03 1970 13:28:52 GMT-0300 (Horário Padrão de Brasília)
