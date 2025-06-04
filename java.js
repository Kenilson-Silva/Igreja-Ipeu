
function submit (){
    let firstnamevalue = document.getElementById("firstnamevalue").value
let lastnamevalue=document.getElementById("lastnamevalue").value
let firstname=document.getElementById("firstname")
let lastname=document.getElementById("lastname")

    console.log(`Olá${firstnamevalue} ${lastnamevalue}`);
    firstname.innerHTML = "OLÁ " + firstnamevalue;
    lastname.innerHTML = lastnamevalue;
}
function erase(){
    let firstnamevalue = document.getElementById("firstnamevalue").value
let lastnamevalue=document.getElementById("lastnamevalue").value
let firstname=document.getElementById("firstname")
let lastname=document.getElementById("lastname")
    console.log("Apagando valores");
    firstname.innerHTML="";
    lastname.innerHTML="";
}