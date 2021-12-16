//1. Napisz skrypt sprawdzający czy wprowadzona przez użytkownika liczba jest większa od 10. Wypisz odpowiedni komunikat.
/*
var a = prompt("Wpisz liczbe")
if(a>=10)
    document.write("Liczba wieksza od 10")
else   
    document.write("Liczba mniejsza niz 10")
*/

//2. Napisz skrypt który sprawdzi czy wprowadzona liczba jest ujemna czy dodatnia.
/*
var a = prompt("Podaj liczbe")
if(a > 0)
    document.write("liczba dodatnia")
else
    document.write("liczba ujemna")
*/

//3.Napisz skrypt sprawdzający, czy wprowadzona przez użytkownika wartość jest większa niż 100 i podzielna przez 3
/*
var a = prompt("Podaj liczbe")
if(a>=100 && a%3==0)
    document.write("Liczba wieksza od 100 i podzielna przez 3")
else
    document.write("Liczba nie podzielna przez 3 lub mniejsza niz 100")
*/

//4. Opracuj skrypt, który wypisze 3 liczby wprowadzone przez użytkownika w kolejności malejącej
/*
var liczby =[]
liczby.push(parseFloat("Podaj 1 liczbe"))
liczby.push(parseFloat("Podaj 2 liczbe"))
liczby.push(parseFloat("Podaj 3 liczbe"))

var temp;
if(liczby[2]<liczby[1]){
    temp = liczby[2];
    liczby[2] = liczby[1];
    liczby[1] = temp;
}
if(liczby[1]<liczby[0]){
    temp = liczby[1];
    liczby[1] = liczby[0];
    liczby[0] = temp;
}
if(liczby[2]<liczby[1]){
    temp = liczby[2];
    liczby[2] = liczby[1];
    liczby[1] = temp;
}
document.write(liczby[2]+ " "+liczby[1]+" "+liczby[0]);
*/

//5. Napisz skrypt, którego zadaniem jest pobranie od użytkownika informacji na temat jego wzrostu. Na podstawie wprowadzonych danych wypisz odpowiedni komunikat:
/*
NISKI<150CM
ŚREDNI<180CM
WYSOKI>180 CM
*//*
var a = prompt("Podaj wzrost")
if(a<=150)
    document.write("Jestes niski")
else if(a>150 && a<=180)
    document.write("Jestes sredniego wzrostu")
else if(a>180)
    document.write("Jestes wysoki")
*/

//6. Zadeklaruj dwie zmienne i przypisz im dowolne wartości całkowite. Użyj instrukcji if…else do sprawdzenia, czy dzielenie modulo a przez b daje w wyniku 0 lub 1. Wyświetl stosowne komunikaty.
/*
var a = prompt("Podaj 1 liczbe")
var b = prompt("Podaj 2 liczbe")
if((a%b)==0)
    document.write("Modulo wynosi 1 lub 0")
else if((a%b)==1)
    document.write("Modulo wynosi 1 lub 0")
else
    document.write("Modulo sie nie zgadza")
*/

/*7. Napisz skrypt, który sprawdzi czy 
liczba jest równa 0 i wypisze stosowny komunikat
liczba jest równa 10 i wypisze stosowny komunikat
liczba jest równa 20 i wypisze stosowny komunikat
Jeżeli nie został spełniony ani jeden warunek wyświetli się komunikat ” liczba nie jest równa ani 0, ani 10, ani 20”*/
/*
var a = prompt("Podaj liczbe")
if(a==0)
    document.write("Podana liczba jest rowna 0")
else if(a==10)
    document.write("Podana liczba jest rowna 10")
else if(a==20)
    document.write("Podana liczba jest rowna 20")
else
    document.write("liczba nie jest rowna ani 0, ani 10, ani 20")
*/

//8. Napisz skrypt w którym w oknie dialogowym pojawi się pytanie „w którym roku się urodziłeś” jeżeli wpiszesz dobrą odpowiedź pojawi się komunikat „brawo” w przeciwnym przypadku wyświetli się okno informacyjne z komunikatem ”nie ten rok”
/*
var a = prompt("Podaj rocznik urodzenia (np. 2002)")
if(a == 2002)
    alert("Brawo to twoj rok urodzenia")
else
    alert("Nie ten rok")
*/

//9. Napis „zmienna liczba spełnia wszystkie warunki” powinien zostać wyświetlony, kiedy wartość zmiennej liczba jest większa od 0,  różna od 5 i różna od 10, lub też, gdy jest równa –8. Wykorzystaj operatory logiczne.
/*
var a = prompt("Podaj liczbe")
if(a>0 && a>!5 && a>!10 && a==8)
    document.write("Podana liczba spelnia wszystkie warunki, poprawna licza to 8 ")
else
    document.write("Nie spelnia warunkow")
*/

//10. Napisz skrypt, który wyświetli okno decyzyjne z komunikatem „czy chcesz się przywitać”. Jeżeli użytkownik wciśnie ok wyświetli się na stronie napis „witam” w przeciwnym wypadku napis „żegnam”
/*
if(confirm("Czy chcesz sie przywitac?"))
    document.write("Witam")
else
    document.write("Zegnam")
*/

//10 a) zmodyfikuj przykład wyżej tylko, że jeśli użytkownik wciśnie anuluj zostanie przekierowany do innej strony www.
/*
if(confirm("Czy chcesz sie przywitac?"))
    document.write("Witam")
else
    document.location='https://wp.pl'
*/