document.getElementById('oblicz').addEventListener('click', function () {
    var czas = document.getElementsByClassName('czas');
    var stawka = document.getElementsByClassName('stawka');

    for (var i = 0; i < czas.length && czas.length; i++) {
        var wyplata = czas[i].defaultValue * stawka[i].defaultValue;
        document.getElementsByClassName('wyplata')[i].innerHTML = wyplata;

        if (czas[i].defaultValue > 160) {
            var iloscNadgodzin = czas[i].defaultValue - 160;
            var nadgodziny = stawka[i].defaultValue * 2 * iloscNadgodzin;
            document.getElementsByClassName('wyplata')[i].innerHTML = wyplata + nadgodziny;
        } else if (czas[i].defaultValue < 100) {
            document.getElementsByClassName('pracownik')[i].style.backgroundColor = 'red';
        }
    }
});
