let isimler = ['can', 'ridvan', 'elif'];
// console.log(isimler[0]);

// isimler[1] = "osman";
// console.log(isimler);

let yaslar = [43, 5, 6, 30];
console.log(yaslar[3]);

let rastgele = ["can", "boz", 10 , 15]
console.log(rastgele);

//dizimin eleman sayisi

console.log(rastgele.length);


let tireli = isimler.join("-");
console.log(tireli);


let virgullu = isimler.join(", ");
console.log(virgullu);

let sira = isimler.indexOf("elif")
console.log(sira);

/************* Concat Method ************/

let eklenmis = isimler.concat(["osman","merve"]) // ana dizi degismiyor 
console.log(eklenmis);
console.log(isimler);

isimler.push("leyla") // push methodu ana dizini degistirir
console.log(isimler);

isimler.pop()    // pop methodu ana dizini degistirir
console.log(isimler);


