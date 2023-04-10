var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");

function opentab(tabname)
{
    for(i of tablinks){
        i.classList.remove("active-link");
    }
    
    for(j of tabcontents){
        j.classList.remove("active-tab");
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab"); 
}

var sidemenu = document.getElementById("sidemenu");

function openmenu(){
    sidemenu.style.right = "0px";
}

function closemenu(){
    sidemenu.style.right = "-200px";
}