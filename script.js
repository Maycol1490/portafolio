//funcion menu
function responsiveMenu(){
let menu = document.getElementById("nav");
if (menu.className === "") {
    menu.className = "responsive"
} else{
    menu.className ="";
}
}
//funcion para estilo de seleccionar y desaparecer el menu al dar click
function seleccionar(link) {
    let opciones = document.querySelectorAll("#links a")
    opciones[0].className = "";
    opciones[1].className = "";
    opciones[2].className = "";
    opciones[3].className = "";
    opciones[4].className = "";
    link.className ="seleccionado"
    let menuOf = document.getElementById("nav")
    menuOf.className = "";

}
//scrolling para la barra de habilidades
window.onscroll = function () {
    efectoHabilidades()
}
//funcion para animacion de la barra de habilidades
function efectoHabilidades() {
    let skills =document.getElementById("skills")
    let distanciaSkills = window.innerHeight - skills.getBoundingClientRect().top;
    if(distanciaSkills >= 300){
        document.getElementById("html").classList.add("barra_progreso1")
        document.getElementById("js").classList.add("barra_progreso2")
        document.getElementById("python").classList.add("barra_progreso3")
        document.getElementById("ps").classList.add("barra_progreso4")
    }
}
// funcionalidad del formulario
// const form = document.querySelector("#form");
// let users=[];
// form.addEventListener("submit",function(e) {
//     e.preventDefault();
    // const  nameUser =e.target.nameUser.value;
    // const  emailUser =e.target.emailUser.value;
    // const  temaUser =e.target.temaUser.value;
    // const  msjUser =e.target.msjUser.value;
    // if(nameUser.trim()===""||emailUser.trim()===""||temaUser.trim()===""||msjUser.trim()==="")
    // return 
    // const newUser ={
    //     name : nameUser,
    //     email : emailUser,
    //     tema : temaUser,
    //     msj : msjUser,
    //     id : users.length + 1,
    // };
    // users.push(newUser)

//     form.reset();
// })