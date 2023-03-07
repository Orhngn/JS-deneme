function tikla() {
  let sayi = document.getElementById("sayiGir").value;

  if (sayi > 0) {
    alert("girdiğiniz " + sayi + " sayısı pozitiftir");
  } else if (sayi < 0) {
    alert("girdiğiniz " + sayi + " sayısı negatiftir");
  } else {
    alert(0 + " sayısını girdiniz.!");
  }
}
