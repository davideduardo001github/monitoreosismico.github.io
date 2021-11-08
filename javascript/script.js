/* Variable Global estaciones registradas */
var NumEstaciones = 6;
var EstadoConexion = false; 

/* Dirección de conexión al servidor*/
var ServerLink = "http://localhost:3000/equipos";

/* FUNCIONES DE CAMBIO DE PESTAÑA */
/* Esta función se encarga de hacer el cambio entre las pantallas sin tener que recargar la página*/
  function windowSwitch(input01)
  {
    console.log("windowSwitch-Enabled")
    /* A continuación se leen los campos que serán intercambiados por la función */
    var var01 = document.getElementById("info");
    var var02 = document.getElementById("status");
    var var03 = document.getElementById("about");
    /* En esta parte se selecciona la parte a mostrar, funciona en un estilo hide,show.. donde según el caso se muestra la sección activa y se ocultan las restantes */
    switch (input01) 
    {
      case 1:
        var01.style.display = "inline-block";
        var02.style.display = "none";
        var03.style.display = "none";
        break;
      case 2:
        var01.style.display = "none";
        var02.style.display = "inline-block";
        var03.style.display = "none";
        break;
      case 3:
        var01.style.display = "none";
        var02.style.display = "none";
        var03.style.display = "inline-block";
        break;
    }
  }



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
    var var01 = document.getElementById(stateID).innerText;
    var var02 = document.getElementById(dotID);
    switch (var01)
    {
      case "Activo":
        var02.style.backgroundColor = "rgb(119, 207, 124)";
        break;
      case "Inactivo":
        var02.style.backgroundColor = "rgb(219, 49, 77)";
        break;
      case "Requiere atención":
        var02.style.backgroundColor = "hsl(46, 100%, 67%)";
        break;
    }
  }

  /* Update de indicadores en la página web */

  function updateIndicators()
  {
    for (let i = 1; i <= NumEstaciones; i++) 
        {
        let pathID = i.toString()+'Path';
        let Status = i.toString()+'Status';
        let dotID = i.toString()+'Dot';
        colorMap(Status,pathID);
        colorDot(Status,dotID);
        }
  }

  /* Inicialización de la página web */
  function firstLoad()
  {
    
    readDataBase();
    setInterval(function()
    {
      /* Actions each updtade */
        /* Request for information in the database */
          readDataBase();
    },60000/20)
    

  }

/* FUNCIONES DE CONEXIÓN A DATABASE */
  function readDataBase()
  {
    var data = "";
    var xhr = new XMLHttpRequest();
    xhr.withCredentials = true;
    xhr.responseType = 'json';

    xhr.addEventListener("readystatechange", function() 
    {
      if(this.readyState === 4) 
      {
        
        console.log(this.response);
        var lectura = xhr.response;
        NumEstaciones = lectura.length;
        for (let i = 1; i <= NumEstaciones; i++) 
        {
        console.log("Contador i: "+i);
        let listId = i.toString()+'Id';
        let listName = i.toString()+'Name';
        let listStatus = i.toString()+'Status';
        let listTime = i.toString()+'Time';
        let listLocation = i.toString()+'Location';
        document.getElementById(listId).innerHTML = lectura[i-1].id;
        document.getElementById(listName).innerHTML = lectura[i-1].name;
        document.getElementById(listStatus).innerHTML = lectura[i-1].status;
        document.getElementById(listTime).innerHTML = lectura[i-1].lastlecture;
        document.getElementById(listLocation).innerHTML = lectura[i-1].location;
        }

        console.log("CONEXIÓN EXITOSA")
        /* Actualización de la variable de estado de conexión*/
        EstadoConexion = true;
          /* Actualización de campos en la página web */

          updateIndicators();
          /* Display the last time for update */
          lastUpdate("dateUpdate")
          lastUpdate("dateUpdate2")
  
          /* Notificación de datos actualizados en consola*/
          console.log("Datos Actualizados");

        
      }
      else
      {
        /* Actualización de la variable de estado de conexión*/
        EstadoConexion = false;
        console.log("No hay conexión a la base de datos")
        lastUpdate("dateUpdate")
        lastUpdate("dateUpdate2")
      }
    });

    xhr.open("GET", ServerLink);
    xhr.send(data);

  }

  /* Función que despliega la última actualización de hora de los datos */
  function lastUpdate(objetiveID)
  {
    var date = new Date();
    var hours = date.getHours();
    var days = date.getDay(); 
    var minutes = date.getMinutes();
    var ampm = hours >= 12 ? 'pm' : 'am';
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    minutes = minutes < 10 ? '0'+minutes : minutes;
    var strTime = date + ' ' + hours + ':' + minutes + ' ' + ampm;
    if (EstadoConexion)
    {
      document.getElementById(objetiveID).innerHTML = strTime;
    }
    else
    {
      document.getElementById(objetiveID).innerHTML = "NO SE PUDO ESTABLECER CONEXIÓN, ultimo intento: "+strTime;
    }
  }


  
