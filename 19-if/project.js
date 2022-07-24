/* sifre > 12 guclu
12 ve 8 arasi yeterli
yoksa tekrar giris */


const sifre = "kdjkljskljkjlkkndskn";

if (sifre.length > 12){
  console.log("Guclu sifre");
}

else if (sifre.length <= 12 && sifre.length >= 8){
  console.log("Yeterli sifre");
}

else{
  console.log("Sifreyi yeniden giriniz!");
}
