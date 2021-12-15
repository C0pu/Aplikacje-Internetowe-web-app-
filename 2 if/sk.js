//1. Napisz program, którego działanie polega na wczytaniu długości boku kwadratu. Jeżeli bok jest niedodatni to powinien wyświetlić odpowiedni komunikat, a w przeciwnym przypadku obliczyć pole powierzchni i obwód kwadratu.
/*
var a = prompt("Podaj bok kwadratu: ")
if(a<0)
    document.write("Liczb jest ujemna")
else
    document.write("Pole wynosi: "+ a*a )
*/

//2. Napisz program, którego działanie polega na obliczeniu pola powierzchni i obwodu prostokąta. program powinien sprawdzać warunek istnienia prostokąta tj. czy a, b > 0.
/*
var a = prompt("Podaj dlugosc pierwszego boku prostokatka: ")
var b = prompt("Podaj dlugosc drugiego boku prostokata: ")

if(a,b>0)
    document.write("Pole wynosi: "+a*b+" "+"Obwod wynosi: "+(2*a+2*b))
else
    document.write("Liczby ujemne")
*/

//3. Napisz program, którego działanie polega na obliczeniu sumy i średniej arytmetycznej trzech liczb wprowadzonych przez użytkownika . średnia tych liczb powinna zostać obliczona i wyświetlona wówczas gdy suma tych liczb przekroczy 150
/*
var a = parseInt(prompt("Podaj pierwsza liczbe:"))
var b = parseInt(prompt("Podaj druga liczbe:"))
var c = parseInt(prompt("Podaj trzecia liczbe:"))
var suma = (a+b+c)
if(suma>=150)
    document.write("Srednia artymetyczna wynosi: "+(a+b+c)/3+ "<br> Suma wynosi: "+(a+b+c))
else
    document.write("Suma trzech liczb jest mniejsza niz 150")
*/
  
//4. Napisz program, którego działanie polega na obliczeniu wartości wyrażenia w=(x2+y)/(6x), dla dowolnych x i y wprowadzonych  z klawiatury. Przed wykonaniem obliczeń należy sprawdzić czy x i y >0, w przeciwnym razie powinien być zasygnalizowany błąd
/*
var x = parseInt(prompt("Podaj wartosc X:"))
var y = parseInt(prompt("Podaj wartosc Y"))
if(x<0)
    document.write("Blad liczba mniejsza niz 0")
else if(y<0)
    document.write("Liczba mniejsza niz 0")
else
    document.write("Poprawne liczby"+"<br>Wynik rownania w=(2x+y)/(6x) wynosi: " + (2*x+y)/6*x )
*/

//5. Napisz program, którego działanie polega na zastosowaniu instrukcji wyboru: po podaniu jednej z liczb z zakresu od 1 do 5, powinna pojawić się jej słowna interpretacja
/*
var wybor = prompt("Podaj liczbe od 1 do 5")
switch (wybor){
    case "1":
        alert("Wybrales numer 1");break;
    case "2":
        alert("Wybrales numer 2");break;
    case "3":
        alert("Wybrales numer 3");break;
    case "4":
        alert("Wybrales numer 4");break;
    case "5":
        alert("Wybrales numer 5");break;
    default: alert("Wybrales liczbe z poza skali sproboj ponownie")

} 
*/

//6. Napisz skrypt, w którym w zależności od tego jaki kolor wpiszemy pojawi się słowo JavaScript w danym kolorze. Zdefiniuj pięć kolorów. Jeżeli zostanie wpisany nieznany kolor ma się pojawić stosowny komunikat.
/*
var kolor = prompt("Wybierz kolor: czerwony, niebieski, zloty, fioletowy, zielony")
switch (kolor){
    case "czerwony": document.write("<span style='color:red'>wybrales kolor czerwony</span>");break;
    case "niebieski": document.write("<span style='color:blue'>wybrales kolor czerwony</span>");break;
    case "zolty": document.write("<span style='color:yellow'>wybrales kolor czerwony</span>");break;
    case "fioletowy": document.write("<span style='color:purple'>wybrales kolor czerwony</span>");break;
    case "zielony": document.write("<span style='color:green'>wybrales kolor czerwony</span>");break;
}
*/

//7. Napisz skrypt który będzie wyświetlał ocenę w zależności od progu procentowego:
/*
0-29 – niedostateczny
30-40 – dopuszczający
41- 50 – dostateczny
51- 60 – dobry
61- 70- bardzo dobry
powyżej 71 celujący
*/
/*
var procenty = prompt("Podaj ile procent uzyskales ze sprawdzianu (np. 50)")
if(procenty <= 29)
    document.write("Uzyskales ocene 1")
if(procenty >= 30 && procenty <= 40)
    document.write("Uzyskales ocene 2")
if(procenty >= 41 && procenty <= 50)
    document.write("Uzyskales ocene 3")
if(procenty >= 51 && procenty <= 60)
    document.write("Uzyskales ocene 4")
if(procenty >= 61 && procenty <= 70)
    document.write("Uzyskales ocene 5")
if(procenty >= 71)
    document.write("Uzyskales ocene 6")
*/

//8. Napisz program wykorzystując instrukcję if, który ustali hasło dostępu do strony. Hasło to 123. Jeżeli użytkownik wpisze poprawne hasło na stronie pojawi się komunikat „witaj” w przeciwnym przypadku okno informacyjne „nie to hasło”
/*
var haslo = prompt("Podaj haslo")
if(haslo == "123")
    alert("Witaj wpisales poprawne haslo zostales zalogowany")
else
    alert("Niepoprawne haslo sporoboj ponownie")
*/

//9. Napisz skrypt który wyświetli okno decyzyjne. Jeżeli użytkownik kliknie ok pojawi się strona ze zdjęciem. jeżeli kliknie anuluj pojawi się komunikat nie chciałeś wyświetlić obrazka.
/*
if(confirm())
    document.write("Klikneles ok wyswietlam obrazek<br> <img src='zdjecie.jpg'")
else
    document.write("Nie chciales zobaczyc obrazka")
*/

//10. Napisz skrypt który wyświetli komunikat:
/*
owoce leśne jeżeli użytkownik wpisze: maliny, poziomki, jagody, jeżyny
warzywa: ziemniaki, buraki, pomidory
warzywo nieznane jeżeli wpisze inne wartości
*/
/*
var jedzenie = prompt("wpisz wybrane rzeczy: maliny, jagody, jezyny, ziemniaki, buraki, pomidory")
switch(jedzenie){
    case "jagody": document.write("Wybrales owoc lesny: " + jedzenie);break;
    case "maliny": document.write("Wybrales owoc lesny: " + jedzenie);break;
    case "jezyny": document.write("Wybrales owoc lesny: " + jedzenie);break;
    case "ziemniaki": document.write("Wybrales warzywo: " + jedzenie);break;
    case "buraki": document.write("Wybrales warzywo: " + jedzenie);break;
    case "pomirdy": document.write("Wybrales warzywo: " + jedzenie);break;
    default: document.write("Wybrales rzecz z poza listy sporboj ponowanie i prosze wybrac jedna z wypisanych pozyji :)")
}
*/