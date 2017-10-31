function Relogio()
{
  var tempo = new Date();
  var segundo = tempo.getSeconds();
  var minuto = tempo.getMinutes();
  var hora = tempo.getHours();

  if(hora < 10)
  {
    hora = "0" + hora;
  }

  if(minuto < 10)
  {
    minuto = "0" + minuto;
  }

  if(segundo < 10)
  {
    segundo = "0" + segundo;
  }

  var final = hora + ":" + minuto + ":" + segundo;

  document.getElementById("tempo").innerHTML = final;
}

function IniciaTempo()
{
  setInterval(Relogio, 1000);
}
