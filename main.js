function openmenu() {
    if (window.innerWidth <= 600) {
     document.getElementById("menu-bar").style.width = "100%";
    }
    else if (window.innerWidth <= 800) {
        document.getElementById("menu-bar").style.width = "50%";
    }
    else if (window.innerWidth <= 1000) {
        document.getElementById("menu-bar").style.width = "34%";
    }
    else {
      document.getElementById("menu-bar").style.width = "25%";
    }
  }
  
 var a=false; 
function closemenu(){
    if(a==false){
    openmenu();
    return a=true;
    }
    else
    {
        document.getElementById("menu-bar").style.width = "0%";
        return a=false;
    }
      
}
  
    document.addEventListener('keydown', function(event){
      if(event.key === "Escape")
      {
        document.getElementById("menu-bar").style.width = "0%";
      }
    })