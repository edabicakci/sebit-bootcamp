function hello() {
  console.log("Hello");
}

// hello();
// hello();
// hello();

/************* Fonksiyonlara parametre gonderme ************/

// const canBoz = function(ad, soyad){
//   console.log(`Ad-Soyad: ${ad} ${soyad}`);
// }

// canBoz("kemal", "dogukan");

const canBoz = function (ad = "Can", soyad = "Boz") {
  // default paramatre gonderme
  console.log(`Ad-Soyad: ${ad} ${soyad}`);
};

canBoz("kemal", "dogukan");
canBoz();

// eski tipten arraow'a hafif gecis=
const kareAlani = function (kenar) {
  return kenar * kenar;
};

let sonuc = kareAlani(6);
console.log(sonuc);

/************* arrow v1 ************/

// const kareAlanim = (kenar) =>{
//   return kenar**2;

// }

/************* Tek parametre ise ************/

// const kareAlanim = kenar =>{
//   return kenar**2;

// }

/************* tek parametre ve tek donus degeri varsa ************/

const kareAlanim = (kenar) => kenar ** 2;
console.log(kareAlanim(7));

// const donus = () =>{
//   return "Burak";

// }

const stringDonus = () => "Burak";

console.log(stringDonus());

// normal fnc.
const urunSatis = function(urunler, vergi){
  let toplam =0; 
  for (let i=0; i< urunler.length; i++){
    toplam += urunler[i] + urunler[i] * vergi;
  }
  return toplam;

}

//arrow hali
const urunToplam = (urunler,vergi) => {
  let toplam =0; 
  for (let i=0; i< urunler.length; i++){
    toplam += urunler[i] + urunler[i] * vergi;
  }
  return toplam;
}



console.log(urunSatis([10, 20, 30], 0.25));
console.log(urunToplam([10, 20, 30], 0.25));
