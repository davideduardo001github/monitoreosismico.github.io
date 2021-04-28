
/* FUNCIONES DE CAMBIO DE PESTAÑA */
/* Esta función se encarga de hacer el cambio entre las pantallas sin tener que recargar la página*/
  function windowSwitch(input01)
  {
    console.log("windowSwitch-Enabled")
    var var01 = document.getElementById("info");
    var var02 = document.getElementById("status");
    var var03 = document.getElementById("config");
    var var04 = document.getElementById("about");
    console.log(input01);
    switch (input01) 
    {
      case 1:
        var01.style.display = "inline-block";
        var02.style.display = "none";
        var03.style.display = "none";
        var04.style.display = "none";
        break;
      case 2:
        var01.style.display = "none";
        var02.style.display = "inline-block";
        var03.style.display = "none";
        var04.style.display = "none";
        break;
      case 3:
        var01.style.display = "none";
        var02.style.display = "none";
        var03.style.display = "inline-block";
        var04.style.display = "none";
        break;
      case 4:
        var01.style.display = "none";
        var02.style.display = "none";
        var03.style.display = "none";
        var04.style.display = "inline-block";
        break;
    }
  }

  /* FUNCIONES PARA EL MAPA */

  /* Función engargada de el cambio de información en el cuadro de despliegue encima del mapa */
  function changeInfoMap(nameID, estatusID, idID, lecturaID)
  {
    document.getElementById("nameField").innerText = document.getElementById(nameID).innerText;
    document.getElementById("estatusField").innerText = document.getElementById(estatusID).innerText;
    document.getElementById("idField").innerText = document.getElementById(idID).innerText;
    document.getElementById("timeField").innerText = document.getElementById(lecturaID).innerText;
  }

  /* Función encargada del cambio de colores en el mapa */
  function colorMap(stateID,mapPath)
  {
    console.log("ColorChange-Enabled")
    var var01 = document.getElementById(stateID).innerText;
    var var02 = document.getElementById(mapPath);
    console.log(var01);
    console.log(var02);
    switch (var01)
    {
      case "Activo":
        console.log("Active-Case");
        var02.style.fill = "rgb(119, 207, 124)";
        break;
      case "Inactivo":
        console.log("Inactive-Case");
        var02.style.fill = "rgb(219, 49, 77)";
        break;
      case "Requiere atención":
        console.log("Atention-Case");
        var02.style.fill = "hsl(46, 100%, 67%)";
        break;
    }
  }

  function firstLoad()
  {
    /* Coloreado del mapa con estados de primera vez */
    
    for (let i = 1; i <= 16; i++) {
      let pathID = i.toString()+'Path';
      let statusID = i.toString()+'Status';
      console.log(pathID);
      console.log(statusID);
      colorMap('2Status','2Path');
      colorMap(statusID,pathID);
    }
    console.log("StartPage");
    
  }
