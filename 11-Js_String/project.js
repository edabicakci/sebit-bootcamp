// let email = "canbozzz1@gmail.com";
let email = 'canboz@gmail.com';

console.log(email);

/************* Birlestirme ************/
let ad = "Zekeriya";
let soyad = "Duranel HHHH";
let adSoyad = ad + " " + soyad;
console.log(adSoyad);
console.log(adSoyad[1]);

/************* Kac karakter ************/
console.log(adSoyad.length);

/************* Sting metodlari ************/
console.log(adSoyad.toUpperCase());
console.log(adSoyad.toLowerCase());

/************* Kacinci indexte bulundugu ************/
let index = adSoyad.indexOf('a');  //bastan alir ilk bulgunu yazdirir.
let lastIndex = adSoyad.lastIndexOf('a')
console.log(index);
console.log(lastIndex);
//lastIndexOf son gordgu karakteri yazdirir


/************* Slice kullanimi ************/
let firstName = adSoyad.slice(0,8)
console.log(firstName);

/************* Replace/ ReplaceAll kullanimi ************/
let replacedString = adSoyad.replace(" ", "")  //ilk gordugu karakteri degistirir.
console.log(replacedString);

console.log(replacedString.replaceAll(" ", "")); // replaceAll kullamimi