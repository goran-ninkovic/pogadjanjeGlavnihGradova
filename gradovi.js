var drzave = ["Albanija", "Austrija", "Belgija", "Belorusija", "Bosna i Hercegovina", "Bugarska", "Crna Gora", "Češka", "Danska", "Engleska", "Estonija", "Finska", "Francuska", "Grčka", "Holandija", "Hrvatska", "Italija", "Letonija", "Lihtenštajn", "Litvanija", "Luksemburg", "Mađarska", "Moldavija", "Monako", "Nemačka", "Norveška", "Poljska", "Portugal", "Rumunija", "Rusija", "Severna Makedonija", "Slovačka", "Slovenija", "Srbija", "Španija", "Švajcarska", "Švedska", "Turska", "Ukrajina"];

var gradovi = ["Tirana", "Beč", "Brisel", "Minsk", "Sarajevo", "Sofija", "Podgorica", "Prag", "Kopenhagen", "London", "Talin", "Helsinki", "Pariz", "Atina", "Amsterdam", "Zagreb", "Rim", "Riga", "Vaduz", "Viljnus", "Luksemburg", "Budimpešta", "Kišinjev", "Monako", "Berlin", "Oslo", "Varšava", "Lisabon", "Bukurešt", "Moskva", "Skoplje", "Bratislava", "Ljubljana", "Beograd", "Madrid", "Bern", "Stokholm", "Ankara", "Kijev"];

var glavniGrad = "";
var radios = document.getElementsByName("grad");
var radioButtons = document.getElementsByClassName("ponudjeniGradovi");

function igraj() {
    var min = 0;
    var max = 38;
    var brojevi = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 
                   10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 
                   20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 
                   30, 31, 32, 33, 34, 35, 36, 37, 38];
    var ponudjeniGradovi = [];
    document.getElementById("div2").style.display = "block";
    document.getElementById("btnOdaberiDdrzavu").disabled = true;
    document.getElementById("btnPotvrdi").disabled = false;
    for (let i = 0; i < radios.length; i++) {
        radios[i].checked = false;
    }

    var x = Math.floor(Math.random() * (max - min + 1)) + min;
    var drzava = drzave[brojevi[x]];
    document.getElementById("p1").innerHTML = drzava;
    glavniGrad = gradovi[brojevi[x]];
    brojevi.splice(x, 1);

    var y = Math.floor(Math.random() * (max - 1 - min + 1)) + min;
    var gradNetacno_1 = gradovi[brojevi[y]];
    brojevi.splice(y, 1);

    var z = Math.floor(Math.random() * (max - 2 - min + 1)) + min;
    var gradNetacno_2 = gradovi[brojevi[z]];

    var triBroja = [0, 1, 2];
    var minr = 0;
    var maxr = 2;
    ponudjeniGradovi.push(glavniGrad, gradNetacno_1, gradNetacno_2);
    for (let i = 0; i < 3; i++) {
        if (maxr > -1) {
            var r = Math.floor(Math.random() * (maxr - minr + 1)) + minr;
            radioButtons[i].innerHTML = ponudjeniGradovi[triBroja[r]];
            maxr--;
            triBroja.splice(r, 1);
        }
    }
}

var brPogodaka = 0;
var brPromasaja = 0;
function potvrdi() {
    for (let i = 0; i < radioButtons.length; i++) {
        if (radios[i].checked) {
            if (radioButtons[i].innerHTML == glavniGrad) {
                brPogodaka++;
                document.getElementById("pogodak").innerHTML = brPogodaka;
                break;
            } else {
                brPromasaja++;
                document.getElementById("promasaj").innerHTML = brPromasaja;
                break;
            }
        }    
    }
    document.getElementById("btnOdaberiDdrzavu").disabled = false;
    document.getElementById("btnPotvrdi").disabled = true;
    if (radios[0].checked == false && radios[1].checked == false && radios[2].checked == false) {
        alert("Molimo, odaberite jedan odgovor.");
        document.getElementById("btnOdaberiDdrzavu").disabled = true;
        document.getElementById("btnPotvrdi").disabled = false;
    }
}