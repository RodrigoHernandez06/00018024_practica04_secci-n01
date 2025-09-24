function mostrarRecordatorio(dia) {
  let mensaje = "";

  switch (dia.toLowerCase()) {
    case "lunes":
      mensaje = "Atender a un cliente especifico.";
      break;
    case "martes":
      mensaje = "Visitar un agencia fuera de la ciudad.";
      break;
    case "miércoles":
    mensaje = "Llevar a mi hija al ballet.";
      break;
    case "jueves":
      mensaje = "Priorizar entregas de desarrollo.";
      break;
    case "viernes":
      mensaje = "Atender problemas de manera remota.";
      break;
    case "sábado":
      mensaje = "Hoy debes hacer lo que tu esposa quiera.";
      break;
    case "domingo":
      mensaje = "No tienes actividades programadas";
      break;
  }

  document.getElementById("resultado").innerText = mensaje;
}
