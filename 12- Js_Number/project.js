let radius = 15;
const PI = 3.14;

let area = PI * radius**2;
console.log(area);

let remainder = radius % 4;
console.log(remainder);

let result = 6* (15-4)**2;
console.log(result);

/************* Sayi arttirma ************/

let number = 13;


//number = number + 1;
//++number
//number++

let sayim = number++
console.log("Sayim", sayim);
let sayimYeni = ++number;
console.log("Sayim Yeni", sayimYeni);


/************* NaN Kullanimi ************/
console.log(15/4);
console.log(15/"Can");

let birlestirme = "Dersi " + number + " kere tekrar ettim";  // ==> string olusur
console.log(birlestirme);


