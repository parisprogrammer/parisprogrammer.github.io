function horaAtual() {
  var agora = new Date();
  var hora =
    agora.getHours() + ':' +
    agora.getMinutes()  + ':' +
    agora.getSeconds();
    return hora
}



// var dia     = data.getDate();           // 1-31
// var dia_sem = data.getDay();            // 0-6 (zero=domingo)
// var mes     = data.getMonth();          // 0-11 (zero=janeiro)
// var ano2    = data.getYear();           // 2 dígitos
// var ano4    = data.getFullYear();       // 4 dígitos
// var mseg    = data.getMilliseconds();   // 0-999
// var tz      = data.getTimezoneOffset(); // em minutos

//document.write("Bom dia, Paris!");
console.log("Bom dia, Paris!. Agora são:" + horaAtual());
