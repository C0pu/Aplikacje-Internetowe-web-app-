//1. Napisz skrypt wyświetlający okno dialogowe"to     jest    komunikat Naciśnij ok"a następnie pojawi się strona z napisem i dowolnym obrazkiem. Pierwsze słowo wytłuszczone, drugie pochylone i niebieskie.
/*
confirm("Naciśnij OK");
document.write('<b>Jakies</b> <i>slowa</i> <span style="color:red">losowe</span>');
*/

//2. Napisz skrypt który obliczy pole kwadratu.
/*
var a = prompt("Podaj bok kwadratu")
alert("Pole kwadratu wynosi: "+a*a)
*/

//3. Użytkownik podaje ilość metrów a na stronie pojawia się komunikat ile to centymetrów i kilometrów.\
/*
var a = prompt("Podaj ilosc metrow")
document.write("Kilometry: "+a/1000 + "<br>")
document.write("Centymetry: "+ a*100)
*/

//4. Utwórz skrypt który wyświetli okno dialogowe "jak się nazywasz" tekst domyślny "wpisz swoje imię". Po zatwierdzeniu pojawi się okno informacyjne z komunikatem "Witam Cię" i obok wpisane imię.
/*
var a = prompt("Jak sie nazywasz?\nwpisz swoje imie")
alert("Witam cie " + a )
*/

//5. Napisz program, którego działanie będzie polegało na obliczeniu wartości wyrażenia: 6x+y2/13. Liczby x, y wprowadź z klawiatury.
/*
var x = parseInt(prompt("Podaj pierwsza liczbe"))
var y = parseInt(prompt("Podaj druga liczbe"))
alert("Wynik rownania 6x+2y/13 wynosi: " + (6*x+2*y/13))
*/

//6. wprowadź okno decyzyjne z dowolnym komunikatem po zatwierdzeni ma się pojawić okno dialogowe „wprowadź swoje imię” po wprowadzeniu ma się pojawić okno informacyjne z komunikatem „cześć Tu wprowadzamy imię” po kliknięciu ok ten sam tekst ma się wyświetlić na stronie.
/*
confirm("Zatwierdz klikajac OK")
var a = prompt("Wprowadz swoje imie")
confirm("Czesc "+ a)
document.write("Czesc "+ a)
*/

//7. W programie wczytaj liczbę z i wyświetl kwadrat liczby z oraz liczbę z +2,5
/*
var a = parseInt(prompt("Podaj liczbe"))
document.write("Kwadrat tej liczby to: " + a*a + "<br>")
document.write("Liczba ta dodane do niej 2,5 wynosi: "+ (a+2.5))
*/

//8. Oblicz resztę z dzielenia liczby 1 i liczby 2 wprowadzonych przez użytkownika.
/*
var a = prompt("Podaj pierwsza liczbe")
var b = prompt("Podaj druga liczbe")
confirm("Reszta dzielenia z tej liczby wynosi: " + a%b)
*/

//9. Używając document.write wprowadź swoje dane. Zmień formatowanie wyświetlanego tekstu i wprowadź zdjęcie.
/*
document.write('<span style="color:purple">Edytowany tekst + <b>dodanie</b> zdjecia <br><img src="zdj.jpg"')
*/

//10. Napisz program, którego działanie polega na wyświetleniu sumy kwadratów dwóch liczb wprowadzonych przez użytkownika z klawiatury. Wynik należy wyprowadzić na ekran 
/*
var a = prompt("Podaj 1 liczbe")
var b = prompt("Podaj 2 liczbe")
document.write("Pierwsza liczba do kwadratu wynosi: "+ a*a + "<br>")
document.write("Pierwsza liczba do kwadratu wynosi: "+ b*b+ "<br>")
document.write("Dodanie 2 liczb podniesionych do kwadratu wysnosi: "+ (a*a+b*b))
*/
