const notlar = [15, 45, 32, 0, 100, 90, 7];

for (let i = 0; notlar.length; i++) {
  if (notlar === 32) continue;

  console.log(notlar[i]);

  if (notlar === 100) {
    console.log("Bravo en yuksek notu sen aldin");
    break;
  }
}
