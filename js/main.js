document.getElementById('oblicz').addEventListener('click', function () {
    var czas = document.getElementsByClassName('czas');
    var stawka = document.getElementsByClassName('stawka');
    var array = [];

    for (var i = 0; i < czas.length; i++) {
        var wyplata = czas[i].defaultValue * stawka[i].defaultValue;
        document.getElementsByClassName('wyplata')[i].innerHTML = wyplata;

        array.push(czas[i].value);

        if (czas[i].defaultValue > 160) {
            var iloscNadgodzin = czas[i].defaultValue - 160;
            var nadgodziny = stawka[i].defaultValue * 2 * iloscNadgodzin;
            document.getElementsByClassName('wyplata')[i].innerHTML = wyplata + nadgodziny;
        } else if (czas[i].defaultValue < 100) {
            document.getElementsByClassName('pracownik')[i].style.backgroundColor = 'red';
        }
    }
    var arraySorted = array.sort(function (e1, e2) {
        return e1 - e2;
    });
    var arraySorted = arraySorted.reverse();

    for (var i = 0; i < czas.length; i++) {
        if (arraySorted[0] === czas[i].value) {
            var nameFirst = document.getElementsByClassName('pracownik')[i].innerHTML;
        } else if (arraySorted[1] === czas[i].value) {
            var nameSecond = document.getElementsByClassName('pracownik')[i].innerHTML;
        } else if (arraySorted[2] === czas[i].value) {
            var nameThird = document.getElementsByClassName('pracownik')[i].innerHTML;
        }
    }
    var ul = document.getElementById('najlepsi_pracownicy');
    var li = document.createElement('li');

    ul.appendChild(li);
    li.innerHTML = nameFirst + '<li>' + nameSecond + '<li>' + nameThird;
});
