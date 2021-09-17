
/* FUNCIONES DE CAMBIO DE PESTAÑA */
/* Esta función se encarga de hacer el cambio entre las pantallas sin tener que recargar la página*/
  function windowSwitch(input01)
  {
    console.log("windowSwitch-Enabled")
    var var01 = document.getElementById("info");
    var var02 = document.getElementById("status");
    var var03 = document.getElementById("config");
    var var04 = document.getElementById("about");
    var var05 = document.getElementById("acceso");
    console.log(input01);
    switch (input01) 
    {
      case 1:
        var01.style.display = "inline-block";
        var02.style.display = "none";
        var03.style.display = "none";
        var04.style.display = "none";
        var05.style.display = "none";
        break;
      case 2:
        var01.style.display = "none";
        var02.style.display = "inline-block";
        var03.style.display = "none";
        var04.style.display = "none";
        var05.style.display = "none";
        break;
      case 3:
        var01.style.display = "none";
        var02.style.display = "none";
        var03.style.display = "inline-block";
        var04.style.display = "none";
        var05.style.display = "none";
        break;
      case 4:
        var01.style.display = "none";
        var02.style.display = "none";
        var03.style.display = "none";
        var04.style.display = "inline-block";
        var05.style.display = "none";
        break;
      case 5:
        var01.style.display = "none";
        var02.style.display = "none";
        var03.style.display = "none";
        var04.style.display = "none";
        var05.style.display = "inline-block";
        break;
    }
  }

/* FUNCIONES PARA EL ACOMODO DE ELEMENTOS */



/* FUNCIONES PARA EL MAPA */

  /* Función engargada de el cambio de información en el cuadro de despliegue encima del mapa */
  function replaceInfo(getID,targetID){
    document.getElementById(targetID).innerText = document.getElementById(getID).innerText;
  }

  function changeInfoMap(Name, Status, idID, lecturaID)
  {
    replaceInfo(Name,"nameField");
    replaceInfo(Status,"estatusField");
    replaceInfo(idID,"idField");
    replaceInfo(lecturaID,"timeField");
  }

  function changeInfoLecturas(ID,Name,Estatus,Time,Location)
  {
    replaceInfo(ID,"tableID");
    replaceInfo(Name,"tableName");
    replaceInfo(Estatus,"tableStatus");
    replaceInfo(Time,"tableTime");
    replaceInfo(Location,"tableLocation");
    updateGraphs(ID);
  }
  
  function updateGraphs(ID) {
    document.getElementById("Graph").src = "./tempPics/"+ID+"ReadGraph.jpeg";
    document.getElementById("dayGraph").src = "./tempPics/"+ID+"DayGraph.jpeg";
  }

  /* Función encargada del cambio de colores en el mapa */
  function colorMap(stateID,mapPath)
  {
    var var01 = document.getElementById(stateID).innerText;
    var var02 = document.getElementById(mapPath);
    switch (var01)
    {
      case "Activo":
        var02.style.fill = "rgb(119, 207, 124)";
        break;
      case "Inactivo":
        var02.style.fill = "rgb(219, 49, 77)";
        break;
      case "Requiere atención":
        var02.style.fill = "hsl(46, 100%, 67%)";
        break;
    }
  }

  /* Coloreado de los puntos indicadores de estado */
  function colorDot(stateID,dotID)
  {
    console.log("ColorDot-Enabled")
    var var01 = document.getElementById(stateID).innerText;
    var var02 = document.getElementById(dotID);
    console.log(var01);
    console.log(var02);
    switch (var01)
    {
      case "Activo":
        console.log("Active-Dot");
        var02.style.backgroundColor = "rgb(119, 207, 124)";
        break;
      case "Inactivo":
        console.log("Inactive-Dot");
        var02.style.backgroundColor = "rgb(219, 49, 77)";
        break;
      case "Requiere atención":
        console.log("Atention-Dot");
        var02.style.backgroundColor = "hsl(46, 100%, 67%)";
        break;
    }
  }


  /* Inicialización de la página web */
  function firstLoad()
  {
    /* Coloreado del mapa con estados de primera vez */
    
    for (let i = 1; i <= 16; i++) 
    {
      let pathID = i.toString()+'Path';
      let Status = i.toString()+'Status';
      let dotID = i.toString()+'Dot';
      console.log(Status);
      console.log(dotID);
      colorMap(Status,pathID);
      colorDot(Status,dotID);
    }
    console.log("StartPage");
    
  }

/* FUNCIONES DE CONEXIÓN A DATABASE */
function readdatabase(){
  var data = "";
  var xhr = new XMLHttpRequest();
  xhr.withCredentials = true;
  xhr.responseType = 'json';

  xhr.addEventListener("readystatechange", function() 
  {
    if(this.readyState === 4) 
    {
      console.log("CONEXIÓN EXITOSA")
      console.log(this.response);
      var myObj = xhr.response;
      console.log("RESPUESTA GUARDADA")
      console.log(myObj[11].smax)
      document.getElementById("output").innerHTML = myObj[11].smax;
    }
  });

  xhr.open("GET", "http://localhost:3000/equipos");
  xhr.send(data);
  console.log("Lectura ejecutada")
  }
