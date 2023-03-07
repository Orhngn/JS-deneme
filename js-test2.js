function islem() {
  let girilen = document.getElementById("islemSec").value;
  let sayi1 = document.getElementById("sayi1").value;
  let sayi2 = document.getElementById("sayi2").value;
  console.log(girilen);
  if (girilen == "+") {
    document.getElementById("sonucİslem").innerHTML =
      sayi1 + " + " + sayi2 + "=" + (sayi1 + sayi2);
    document.getElementById("div1").style.backgroundColor = "red";
    document.getElementById("sonucİslem").style.backgroundColor = "red";
  } else if (girilen == "-") {
    document.getElementById("sonucİslem").innerHTML =
      sayi1 + " - " + sayi2 + "=" + (sayi1 - sayi2);
    document.getElementById("div1").style.backgroundColor = "yellow";
    document.getElementById("sonucİslem").style.backgroundColor = "yellow";
  } else if (girilen == "*") {
    document.getElementById("sonucİslem").innerHTML =
      sayi1 + " x " + sayi2 + "=" + sayi1 * sayi2;
    document.getElementById("div1").style.backgroundColor = "lightpink";
    document.getElementById("sonucİslem").style.backgroundColor = "lightpink";
  } else if (girilen == "/") {
    document.getElementById("sonucİslem").innerHTML =
      sayi1 + " / " + sayi2 + "=" + sayi1 / sayi2;
    document.getElementById("div1").style.backgroundColor = "darkgrey";
    document.getElementById("sonucİslem").style.backgroundColor = "darkgrey";
  } else {
    document.getElementById("sonucİslem").innerHTML =
      " yalnış işlem seçtiniz !";
  }
}
