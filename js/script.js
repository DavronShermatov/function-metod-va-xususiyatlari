// Function medotlari va xususiyatlari

// xusisiyatlari 
// STRING
// length bu nechta belgidan iborat ekanligini aniqlab beradi  
const LastName = "Davron";
console.log(LastName.length);

// Medodlari
// indexOf bu malumotdagi harfning nechinchi qatorda turganini aniqlaydi
console.log(LastName.indexOf("r")); 

// slice bu matndagi belgilangan miqdordagi matnni qirqib olishda ishlatiladi
console.log(LastName.slice(1, 6));
// substring bu slice bilan bir xil ish bajaradi faqat bunda manfiy ishorali son kiritish mumkin emas
console.log(LastName.substring(1,5));
// substr bu tanlangan belgidan keyingi bir nechta belgilarni olishda ishlatiladi
console.log(LastName.substr(2 ,3));
// toUpperCase bu matndagi barcha harflarni katta harfga aylantiradi
console.log(LastName.toUpperCase);
// toLowerCase bu matndagi barcha harflarni kichik harflarga aylantiradi
console.log(LastName.toLowerCase);

// NUMBER

// numberda asosan Math elementida boshlanadi
const num = 5.5;
 const borderWidth = "13.9 px";

// 1  Math.raund sonni yaxlitlaydi
console.log(Math.round(num));
// 2 parseInt(borderWidth)
console.log(parseInt(borderWidth));


