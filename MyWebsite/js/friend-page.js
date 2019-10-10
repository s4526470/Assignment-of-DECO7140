var nav=document.getElementById("nav");
                
nav.style.display="block"; //hide the navigation

    
document.getElementById("navdisplay").onclick=function(){ //when click the button, show the navigation.
    
    if(nav.style.display=="block"){
        
        nav.style.display="none";
        
    }else{ nav.style.display="block"; }
}

/*pop image01*/
function popImage01() {
    var popImage = document.getElementById("popImage01"); // display the image01
    var blankBox = document.getElementById("blank-box"); // display the blank container
    popImage.style.display = "block";
    blankBox.style.display = "block";
};

/*close image01*/
function closeImage01() {
    var popImage = document.getElementById("popImage01"); // remove the image01
    var blankBox = document.getElementById("blank-box"); // remove the blank container
    popImage.style.display = "none";
    blankBox.style.display = "none";
}

/*pop image02*/
function popImage02() {
    var popImage = document.getElementById("popImage02");
    var blankBox = document.getElementById("blank-box");
    popImage.style.display = "block";
    blankBox.style.display = "block";
};

/*close image02*/
function closeImage02() {
    var popImage = document.getElementById("popImage02");
    var blankBox = document.getElementById("blank-box");
    popImage.style.display = "none";
    blankBox.style.display = "none";
}

/*pop image03*/
function popImage03() {
    var popImage = document.getElementById("popImage03");
    var blankBox = document.getElementById("blank-box");
    popImage.style.display = "block";
    blankBox.style.display = "block";
};

/*close image03*/
function closeImage03() {
    var popImage = document.getElementById("popImage03");
    var blankBox = document.getElementById("blank-box");
    popImage.style.display = "none";
    blankBox.style.display = "none";
}

/*pop image04*/
function popImage04() {
    var popImage = document.getElementById("popImage04");
    var blankBox = document.getElementById("blank-box");
    popImage.style.display = "block";
    blankBox.style.display = "block";
};

/*close image04*/
function closeImage04() {
    var popImage = document.getElementById("popImage04");
    var blankBox = document.getElementById("blank-box");
    popImage.style.display = "none";
    blankBox.style.display = "none";
}



