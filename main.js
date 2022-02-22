// - Знайти та вивести довижину настипних стрінгових значень
// 'hello world', 'lorem ipsum', 'javascript is cool'
// let srt1 = 'hello world';
// let srt2 = 'lorem ipsum';
// let srt3 = 'javascript is cool';
// document.write(`<p>${srt1.length}</p>`);
// document.write(`<p>${srt2.length}</p>`);
// document.write(`<p>${srt3.length}</p>`);

// - Перевести до великого регістру наступні стрінгові значення
// 'hello world', 'lorem ipsum', 'javascript is cool'
// let srt1 = 'hello world';
// let srt2 = 'lorem ipsum';
// let srt3 = 'javascript is cool';
// document.write(`<p>${srt1.toUpperCase()}</p>`);
// document.write(`<p>${srt2.toUpperCase()}</p>`);
// document.write(`<p>${srt3.toUpperCase()}</p>`);

// - Перевести до нижнього регістру настипні стрінгові значення
// 'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'
// let srt1 = 'HELLO WORLD';
// let srt2 = 'LOREM IPSUM';
// let srt3 = 'JAVASCRIPT IS COOL';
// document.write(`<p>${srt1.toLowerCase()}</p>`);
// document.write(`<p>${srt2.toLowerCase()}</p>`);
// document.write(`<p>${srt3.toLowerCase()}</p>`);

// - Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.
// let str = ' dirty string   ';
// let srtclear = str.replaceAll(' ','');
// console.log(srtclear);


// - Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
//     let str = 'Каждый охотник желает знать';
//     let arr = stringToarray(str);
//     document.writeln(arr); // ['Каждый', 'охотник', 'желает', 'знать']


// let stringToarray = (string) =>{
//     let arr = str.split(' ');
//     document.write(arr);
// }
// let str = 'Каждый охотник желает знать';
// stringToarray(str);


// - Напишіть функцію delete_characters(str, length), яка повертає підрядок, що складається із зазначеної кількості символів.
//     let str = 'Каждый охотник желает знать';
// document.writeln(delete_characters(str, 7)); // Каждый

// let string = 'Каждый охотник желает знать';
// let delete_characters = (str, length) => {
//     return str.substr(str,length)
//
// }
// document.write(delete_characters(string,15));

// - Напишіть функцію insert_dash(str), яка приймає рядок str як аргумент і вставляє тире (-) між словами.
// При цьому всі символи рядка необхідно перевести у верхній регістр.
//     let str = "HTML JavaScript PHP";
// document.writeln(insert_dash(str)); // 'HTML-JAVASCRIPT-PHP'

// let str1 = "HTML JavaScript PHP";
// let insert_dash = (str) =>{
//     return(str.split(' ').join('-').toUpperCase());
// }
// console.log(insert_dash(str1)) ;


// - Напишіть функцію, яка приймає рядок як аргумент і перетворює регістр першого символу рядка з нижнього регістру у верхній.

// let upFirststr = (str) =>{
//     return str[0].toUpperCase() + str.slice(1);
// }
// document.write(upFirststr('helo world'));


// - Напишіть функцію capitalize(str), яка повертає рядок, у якому кожне слово починається з великої літери.

// let str = 'My name is I live in Lviv';
// let capitalize = (str) => {
//     // return str.split(' ').map(value => value.charAt(0).toUpperCase() + value.slice(1)).join(' ');
//     return str.split(' ').map(value => value.charAt(0).toUpperCase() + value.slice(1)).join(' ');
// }
// console.log(capitalize(str));