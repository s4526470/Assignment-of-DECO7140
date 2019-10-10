var nav=document.getElementById("nav");
                
nav.style.display="block"; //hide the navigation

    
document.getElementById("navdisplay").onclick=function(){ //when click the button, show the navigation.
    
    if(nav.style.display=="block"){
        
        nav.style.display="none";
        
    }else{ nav.style.display="block"; }
    }