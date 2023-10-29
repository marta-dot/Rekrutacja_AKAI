/*
    ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    AKAI Frontend Task - Javascript

    W tym zadaniu postaraj się zaimplementować metody, które sprawdzą, czy dane wprowadzone
    do formularza są poprawne. Przykładowo: czy imię i nazwisko zostało wprowadzone.
    Możesz rozwinąć walidację danych tak bardzo, jak tylko zapragniesz.

    Powodzenia!
    ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
*/

// Walidacja danych wprowadzonych przez użytkownika
function validateForm() {
    // Pobierz dane z formularza
    var name = document.forms["form"]["first-name"].value;
    var surname = document.forms["form"]["last-name"].value;
    var email = document.forms["form"]["email"].value;

    // Sprawdź, czy dane zostanły wprowadzone
    if (!name && name !== 0) {
        alert("Proszę wprowadzić imię");
        return false;
    }
    if (!surname && surname !== 0) {
        alert("Proszę wprowadzić nazwisko");
        return false;
    }
    // email regex
    const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;

    if (!email || !emailRegex.test(email)) {
        alert("Proszę wprowadzić poprawny adres e-mail");
        return false;
    }
}
