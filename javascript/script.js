/* Change window functions */
  function sismReplace(){
      var var01 = document.getElementById("info");
      var var02 = document.getElementById("status");
      var var03 = document.getElementById("config");
      var var04 = document.getElementById("about");
      console.log(var01.style.display);
          var01.style.display = "inline-block";
          var02.style.display = "none";
          var03.style.display = "none";
          var04.style.display = "none";
      console.log("info");
  }
  function statReplace(){
      var var01 = document.getElementById("info");
      var var02 = document.getElementById("status");
      var var03 = document.getElementById("config");
      var var04 = document.getElementById("about");
      console.log(var02.display);
          var01.style.display = "none";
          var02.style.display = "inline-block";
          var03.style.display = "none";
          var04.style.display = "none";
      console.log("status");
  }
  function confReplace(){
      var var01 = document.getElementById("info");
      var var02 = document.getElementById("status");
      var var03 = document.getElementById("config");
      var var04 = document.getElementById("about");
          var01.style.display = "none";
          var02.style.display = "none";
          var03.style.display = "inline-block";
          var04.style.display = "none";
      console.log("config");
  }
  function aboutReplace(){
    var var01 = document.getElementById("info");
    var var02 = document.getElementById("status");
    var var03 = document.getElementById("config");
    var var04 = document.getElementById("about");
        var01.style.display = "none";
        var02.style.display = "none";
        var03.style.display = "none";
        var04.style.display = "inline-block";
    console.log("about");
}


/* Sticky Control */
  
  /* window.onscroll = function(){stickBar()};

  
  
  function stickBar() {
    var sticky = document.getElementById("navbar").offsetTop;
    console.log(window.pageYOffset)
    console.log(sticky)
    console.log(document.getElementById("content").offsetTop)
    if (window.pageYOffset >= 111) {
      navbar.classList.add("sticky")
    } else {
      navbar.classList.remove("sticky");
    }
  } */