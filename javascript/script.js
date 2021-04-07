/* Change window functions */
  function sismReplace(){
      var var01 = document.getElementById("info");
      var var02 = document.getElementById("status");
      var var03 = document.getElementById("config");
      console.log(var01.style.display);
          var01.style.display = "inline-block";
          var02.style.display = "none";
          var03.style.display = "none";
      console.log("info");
  }
  function statReplace(){
      var var01 = document.getElementById("info");
      var var02 = document.getElementById("status");
      var var03 = document.getElementById("config");
      console.log(var02.display);
          var01.style.display = "none";
          var02.style.display = "inline-block";
          var03.style.display = "none";
      console.log("status");
  }
  function confReplace(){
      var var01 = document.getElementById("info");
      var var02 = document.getElementById("status");
      var var03 = document.getElementById("config");
          var01.style.display = "none";
          var02.style.display = "none";
          var03.style.display = "inline-block";
      console.log("config");
  }

/* Sticky Control */

  window.onscroll = function() {myFunction()};
      
  var navbar = document.getElementById("navbar");
  var sticky = navbar.offsetTop;

  function myFunction() {
    if (window.pageYOffset >= sticky) {
      navbar.classList.add("sticky")
      console.log("Sticky added");
    } 
    else {
      navbar.classList.remove("sticky");
      console.log("Sticky removed");
    }
  }