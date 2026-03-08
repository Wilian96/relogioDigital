const horas = document.getElementById('horas');
const mins = document.getElementById('minutos');
const segs = document.getElementById('segundos');

//Código original, sem o operador ternário e Arrow Function (ANTIGO):

// const Clock = setInterval(function time() {
//     let dateToday = new Date();
//     let hora = dateToday.getHours();
//     let min = dateToday.getMinutes();
//     let seg = dateToday.getSeconds();

//     if (hora < 10) hora = `0${hora}`;
//     if (min < 10) min = `0${min}`;
//     if (seg < 10) seg = `0${seg}`;

//     horas.textContent = hora;
//     mins.textContent = min;
//     segs.textContent = seg;

// });

const Clock = setInterval(() => {
    let dateToday = new Date();
    let hora = dateToday.getHours();
    let min = dateToday.getMinutes();
    let seg = dateToday.getSeconds();

    horas.textContent = hora < 10 ? `0${hora}` : hora;
    mins.textContent = min < 10 ? `0${min}` : min;
    segs.textContent = seg < 10 ? `0${seg}` : seg;
});

