/*1. Napisz skrypt wykorzystując instrukcje switch, który poprosi użytkownika o wpisanie dnia tygodnia. 
piątek-„wreszcie piątek”
sobota-„imprezowa sobota”
niedziela-„śpiąca niedziela”
przy pozostałych dniach tygodnia „kiedy wreszcie będzie weekend”
jeżeli zostanie wpisana inna nazwa niż dzień tygodnia „to nie dzień tygodnia”
*/
/*
var a = prompt("Wpisz dzien tygodnia")
switch(a){
    case "poniedzialek": case "wtorek": case "sroda": case "czwartek": document.write("Kiedy wreszcie bedzie weekend");break;
    case "piatek": document.write("Wreszcie piatek");break;
    case "sobota": document.write("Imrezowa sobota");break;
    case "niedziela": document.write("spiaca niedziela");break;/*
}
*/

//2. Napisz skrypt, w którym w zależności od tego jaką cyfrę wybierzemy zmieni się obrazek wyświetlany na stronie.
/*
var a = prompt("Wybierz liczby od 1 do 5")
switch(a){
    case "1": document.write('<img src="zdj.jpg>"');break;
    case "2": document.write('<img src="zdj.jpg>"');break;
    case "3": document.write('<img src="zdj.jpg>"');break;
    case "4": document.write('<img src="zdj.jpg>"');break;
    case "5": document.write('<img src="zdj.jpg>"');break;
}
*/

//3. Napisz skrypt, w którym w zależności od tego jaki kolor wpiszemy pojawi się tabela z obramowaniem w tym kolorze.
/*
var a = prompt("Wpisz kolor: czerwony, zolty, zielony")
switch(a){
    case "czerwony": document.write("<table style='border: 1px solid red'> <tr><td>tabela</td><td>tabela2</td><td>tabela3</td></tr><table>");break;
    case "zolty": document.write("<table style='border: 1px solid yellow'> <tr><td>tabela</td><td>tabela2</td><td>tabela3</td></tr><table>");break;
    case "zielony": document.write("<table style='border: 1px solid green'> <tr><td>tabela</td><td>tabela2</td><td>tabela3</td></tr><table>");break;
}
*/

/*4. Napisz skrypt, który poprosi użytkownika o wpisania nazwy zwierzęcia.
pies, kot, chomik – „zwierze domowe” – okno informacyjne;
wielbłąd, skorpion – „zwierze pustynne” – instrukcja document.write i zdjęcie tych zwierząt*/
/*
var a = prompt("Wpisz zwierze: pies, kot, chomik, wielblad, skorpion")
switch(a){
    case "kot": alert("zwierze domowe");break;
    case "pies": alert("zwierze domowe");break;
    case "chomik": alert("zwierze domowe");break;
    case "wielblad": document.write('zwierze pustynne <img src="https://upload.wikimedia.org/wikipedia/commons/b/b1/Chameau_de_bactriane.JPG/*">');break;
    case "skorpion": document.write('zwierze pustynne <img src="https://egzotic-room.com/wp-content/uploads/2020/10/DSC_0669-scaled.jpg">');break;
}
*/

/*5.Napisz skrypt, który wypisze komunikaty w zależności od podanej godziny:
8 – śniadanie
9 i 10 – wykład
11 do 13 – zajęcia w grupach
14 – obiad
15 do 17 – film
18 i 19 kolacja
pozostałe godziny – czas wolny
*/
/*
var a = prompt("Podaj godzine")
switch(a){
    case "8": document.write("Sniadanie");break;
    case "9": case "10": document.write("wyklad");break;
    case "11": case "12": case "13": document.write("zajecia w grupach");break;
    case "14": document.write("obiad");break;
    case "15": case "16": case "17": document.write("film");break;
    case "18": case "19": document.write("kolacja");break;
    default: document.write("czas wolny");break;
}
*/

//6. Napisz prosty kalkulator dla dwóch liczb, obsługujący cztery działania matematycznie: +, -, * i /. 
/*
var a = parseInt(prompt("podaj pierwsza liczbe"))
var b = parseInt(prompt("Podaj druga liczbe"))
var c = prompt("uzyj dzialania jakiego chcesz wykonac na dwoch podanych wczesniej liczbach : '+', '-', '*', '/'")
switch(c){
    case "+": document.write("Wykonlales dodawnie: "+(a+b));break;
    case "-": document.write("Wykonales odejmowanie: "+(a-b));break;
    case "*": document.write("Wykonales mnozenie: "+(a*b));break;
    case "/": document.write("Wykonales dzielenie : "+(a/b));break;
}
*/

