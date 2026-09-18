/* Terang gelap*/
var storedItem2 = localStorage.getItem("penyimpanankodemodegelapberandaperpustakaan");
function awalmula(){
muatsengkesimpen2();
tinggiatasotomatis();
}
function lakukanpenyimpanankodemodegelap(){
var Item = document.getElementById("sumbercssmodegelap").value;
localStorage.setItem("penyimpanankodemodegelapberandaperpustakaan", Item);
document.getElementById("tempattampilcssmodegelap").innerHTML = Item;
}
function muatsengkesimpen2(){
localStorage.getItem("penyimpanankodemodegelapberandaperpustakaan");
document.getElementById("tempattampilcssmodegelap").innerHTML = storedItem2;
}
function lakukanpenghapusankodemodegelap() {
localStorage.removeItem('penyimpanankodemodegelapberandaperpustakaan');
var setelahlakukanpenghapusankodemodegelap = document.getElementById("tempattampilcssmodegelap");
	setelahlakukanpenghapusankodemodegelap.innerHTML  = null;
}


/* Sektor pencarian */
function hilangkansemuaspotlite() {
	hapusspotliteyangsudahdilewati();
	hapusspotliteyangbelumdilewati();	
	document.getElementById("jumlahhasilid").hidden = true;
	document.getElementById("tombolcarispotliteid").hidden = false;
	document.getElementById("tombolmenujukehasilid").hidden = true;
}
/* hapus spotlite yang sudah dilewati */
function hapusspotliteyangsudahdilewati() {
var e = document.getElementById("sektorkontenutamaid").innerHTML;
var enew = e.replace(/(<span id="katayangbelumdilewati">|<\/span>)/igm, "");
document.getElementById("sektorkontenutamaid").innerHTML = enew;
}
/* hapus spotlite yang belum dilewati */
function hapusspotliteyangbelumdilewati() {
var e = document.getElementById("sektorkontenutamaid").innerHTML;
var enew = e.replace(/(<span id="katayangsudahdilewati">|<\/span>)/igm, "");
document.getElementById("sektorkontenutamaid").innerHTML = enew;
}
function periksajumlahkarakter() {
  var input = document.getElementById("sumberinputkatakunciid").value;
  if (input.length < 3) {
    /*# alert("Please enter three characters or more."); */
	document.getElementById("tombolcarispotliteid").disabled = true;
  } else if (input.length >= 3) {	
	/*# alert("Jumlah karakter sudah sesuai.");	*/
	document.getElementById("tombolcarispotliteid").disabled = false;
  }
}
/* kode untuk  pencarian dan spotlite */
function lakukancaridanspotlite() {
  var text = document.getElementById("sumberinputkatakunciid").value;
  var search = new RegExp("(" + text + ")", "gim");
  var e = document.getElementById("sektorkontenutamaid").innerHTML;
  var enew = e.replace(/(<span id="katayangbelumdilewati">|<\/span>)/igm, "");
  document.getElementById("sektorkontenutamaid").innerHTML = enew;
  var newe = enew.replace(search, "<span id='katayangbelumdilewati'>$1</span>");
  document.getElementById("sektorkontenutamaid").innerHTML = newe;
  /* Lakukan penghitungan jumlah spotlite */
  hitungsemuaspotlite();
}
/* Penghitung semua hasil spotlite */
function hitungsemuaspotlite() {
  var sudahdilewati = document.querySelectorAll("#katayangsudahdilewati").length;
  var belumdilewati = document.querySelectorAll("#katayangbelumdilewati").length;
  var semuanya = sudahdilewati+belumdilewati;
  document.getElementById("jumlahsemuaspotliteid").innerHTML = semuanya;
  /* periksa jumlah hasil yang ditemukan */
  /* jika nilainya bukan 0 */
  if (semuanya > 0) {
    /*# alert("Pencarian Anda ditemukan"); */
	/*# gulirmembawahkehasil(); */
	/* beri timeout agar tidak tabrakan dengan keyboard */
	setTimeout(gulirmembawahkehasil, 400);
	document.getElementById("tombolcarispotliteid").hidden = true;
	document.getElementById("tombolmenujukehasilid").hidden = false;
	document.getElementById("jumlahhasilid").hidden = false;	
  } else {
    /* jika nilainya 0 */
	alert("We're sorry we couldn't find your search.");
  } 
}
function gulirmembawahkehasil() {
  /* memeriksa apakah elemen dengan id "katayangbelumdilewati" ada atau tidak */
  var elmnt = document.getElementById("katayangbelumdilewati");
  if (elmnt) {
    /* jika ada, maka gulir ke elemen tersebut */
    elmnt.scrollIntoView({ behavior: "smooth", block: "center" });
    /* lalu ganti id katayangbelumdilewati ke katayangsudahdilewati */
    gantiidkatayangbelumdilewatikekatayangsudahdilewati();
  } else {
    /* Jika tidak ada, tampilkan alert */
    alert("All search results are displayed.");	
	document.getElementById("tombolmenujukehasilid").hidden = true;
	document.getElementById("tombolcarispotliteid").hidden = true;
  }
}
/* kode untuk ganti ID dari katayangbelumdilewati ke katayangsudahdilewati */
function gantiidkatayangbelumdilewatikekatayangsudahdilewati() {
var element = document.getElementById("katayangbelumdilewati");
element.id = "katayangsudahdilewati";
hitungsemuaspotliteyangtelahdilewati();
}
/* Penghitung semua hasil spotlite yang telah terbuka */
function hitungsemuaspotliteyangtelahdilewati() {
  var nodelist = document.querySelectorAll("#katayangsudahdilewati").length;
  document.getElementById("jumlahspotlitetelahdilewatiid").innerHTML = nodelist;
}



/* Batas atas otomotis*/
function tinggiatasotomatis() {
var elemenyangkitatiru = document.getElementById("headerid");
var elemenyangdituju = document.getElementsByClassName("sektorkontenutama");
for (var i = 0; i < elemenyangdituju.length; i++) {
var tinggielemenyangditiru = elemenyangkitatiru.offsetHeight;
elemenyangdituju[i].style.marginTop = tinggielemenyangditiru + "px";
}
}
setInterval(tinggiatasotomatis, 1000);



/* Batas bawah otomotis*/
function batasbawahotomatis() {
var elemenyangkitatiru = document.getElementById("wadahpencarianid");
var elemenyangdituju = document.getElementsByClassName("sektorkontenutama");
for (var i = 0; i < elemenyangdituju.length; i++) {
var tinggielemenyangditiru = elemenyangkitatiru.offsetHeight;
elemenyangdituju[i].style.marginBottom = tinggielemenyangditiru + "px";
elemenyangdituju[i].style.paddingBottom = tinggielemenyangditiru + "px";
}
}
setInterval(batasbawahotomatis, 1000);














/* Batas bawah KOTAK KONTEN otomotis*/
function batasbawahkotakkontenotomatis() {
var elemenyangkitatiru = document.getElementById("pembungkustombol");
var elemenyangdituju = document.getElementsByClassName("deskrip");
for (var i = 0; i < elemenyangdituju.length; i++) {
var tinggielemenyangditiru = elemenyangkitatiru.offsetHeight;
elemenyangdituju[i].style.marginBottom = tinggielemenyangditiru + "px";
}
}
setInterval(batasbawahkotakkontenotomatis, 1000);














/* lebar tombol open otomotis*/
function lebartombolopenotomatis() {
var elemenyangkitatiru = document.getElementById("jupukid");
var elemenyangdituju = document.getElementsByClassName("woco");
for (var i = 0; i < elemenyangdituju.length; i++) {
var tinggielemenyangditiru = elemenyangkitatiru.offsetWidth;
elemenyangdituju[i].style.width = tinggielemenyangditiru + "px";
}
}
setInterval(lebartombolopenotomatis, 1000);



/* Ukuran tombol menu otomotis*/
function ukurantombolmenubarotomatis() {
var elemenyangkitatiru = document.getElementById("sumberinputkatakunciid");
var elemenyangdituju = document.getElementsByClassName("tombolmenubar");
for (var i = 0; i < elemenyangdituju.length; i++) {
var tinggielemenyangditiru = elemenyangkitatiru.offsetHeight;
elemenyangdituju[i].style.height = tinggielemenyangditiru + "px";
elemenyangdituju[i].style.width = tinggielemenyangditiru + "px";
}
}
setInterval(ukurantombolmenubarotomatis, 1000);


/* Penutup dan penampil nav bar */
function tampilkanmenudankategori() {
	document.querySelector('#sektorpengaturanid').hidden = false;
	document.querySelector('#wadahpencarianid').hidden = true;
	document.querySelector('#headerid').hidden = true;
	tinggiatasotomatis();
	batasbawahotomatis();
}
function tutupmenudankategori() {
	document.querySelector('#sektorpengaturanid').hidden = true;
	document.querySelector('#wadahpencarianid').hidden = false;
	document.querySelector('#headerid').hidden = false;
	tinggiatasotomatis();
	batasbawahotomatis();
}