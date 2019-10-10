var nav=document.getElementById("nav");
                
nav.style.display="block"; //hide the navigation

    
document.getElementById("navdisplay").onclick=function(){ //when click the button, show the navigation.
    
    if(nav.style.display=="block"){
        
        nav.style.display="none";
        
    }else{ nav.style.display="block"; }
    }
window.onload=function(){ 
    var content = document.getElementById('pid1');
    var sp = document.getElementById('show-pid1');
    var character = 0;
    timer=setInterval(function(){ // call the funtion at 50 milliseconds 
        sp.innerHTML=content.innerHTML.substring(0,character); //get the single letter from the <p> tag
        character++;
        if(sp.innerHTML==content.innerHTML){
            
            clearInterval(timer); // shut down the timer

        }
    },30);
}

var question = document.getElementById("question");
question.style.visibility="hidden";

document.getElementById("panda").onmouseover=function(){
    if(question.style.visibility=="hidden"){
       question.style.visibility="visible";
    }
}
document.getElementById("a1").onclick=function(){
    document.getElementById("audio01").pause(); // pause the last audio
    document.getElementById("audio02").play(); // play the previous audio
    popWrongMassageBox();
    
}
document.getElementById("a2").onclick=function(){
    document.getElementById("audio01").pause(); // pause the last audio
    document.getElementById("audio02").play(); // play the previous audio
    popWrongMassageBox();
}

document.getElementById("a3").onclick=function(){
    document.getElementById("audio02").pause(); // pause the last audio
    document.getElementById("audio01").play(); // play the previous audio
    popCorrectMassageBox();
}

/*close wrongMassageBox*/
function closeWrongMassageBox() {
    var popMassageBox = document.getElementById("pop-wrong-messagebox"); // remove the massagebox
    var blankBox = document.getElementById("blank-box"); // display the blank container
    popMassageBox.style.display = "none";
    blankBox.style.display = "none";
}

/*pop wrongMassageBox*/
function popWrongMassageBox() {
    var popMassageBox = document.getElementById("pop-wrong-messagebox"); // display the massagebox
    var blankBox = document.getElementById("blank-box"); // display the blank container
    popMassageBox.style.display = "block";
    blankBox.style.display = "block";
};

/*close correctMassageBox*/
function closeCorrectMassageBox() {
    var popMassageBox = document.getElementById("pop-correct-messagebox"); // remove the massagebox
    var blankBox = document.getElementById("blank-box"); // display the blank container
    popMassageBox.style.display = "none";
    blankBox.style.display = "none";
}

/*pop correctMassageBox*/
function popCorrectMassageBox() {
    
    var popMassageBox = document.getElementById("pop-correct-messagebox"); // display the massagebox
    var blankBox = document.getElementById("blank-box"); // display the blank container
    popMassageBox.style.display = "block";
    blankBox.style.display = "block";
};




