const horas = document.getElementById('horas');
const mins = document.getElementById('minutos');
const segs = document.getElementById('segundos');

const Clock = setInterval(function time() {
    let dateToday = new Date();
    let hora = dateToday.getHours();
    let min = dateToday.getMinutes();
    let seg = dateToday.getSeconds();

    if (hora < 10) hora = `0${hora}`;
    if (min < 10) min = `0${min}`;
    if (seg < 10) seg = `0${seg}`;

    horas.textContent = hora;
    mins.textContent = min;
    segs.textContent = seg;

});