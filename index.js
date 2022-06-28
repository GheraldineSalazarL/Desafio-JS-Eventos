const estudiantes=[];

let val=document.getElementById("formulario");
let divparr= document.getElementById("parr");

val.addEventListener("submit", validar);

function validar(e){
    e.preventDefault();
    console.log("prueba");
    let nomb=document.getElementById("nombre").value;
    let id=document.getElementById("ident").value;
    let cel=document.getElementById("cel").value;
    let prog=document.getElementById("prog").value;
    console.log(prog);
    
    if(nomb.length == 0){
        divparr.innerHTML = "Debe ingresar el nombre del estudiante" 
    } else if(id.length < 8){
        divparr.innerText = "Número de identificación invalido" 
    } else if (cel.length < 10){
        divparr.innerHTML = "Número de celular invalido" 
    } else if (prog.length == 0){
        divparr.innerHTML = "Debe ingresar un programa " 
    } else{ 
        class estudiante{
            constructor(nombre, identificacion, celular, programa){
                this.nombre = nombre;
                this.identificacion = identificacion;
                this.celular = celular;
                this.programa = programa;
            }
        }
        estudiantes.push(new estudiante(nomb,id,cel,prog));
        
        let nombreR = document.getElementById("nombreP");
        let identR = document.getElementById("identP");
        let celR = document.getElementById("celP");
        let progR = document.getElementById("progP");
    
        for(let i=0;i<estudiantes.length;i++){
            nombreR.innerHTML = estudiantes[i].nombre;
            identR.innerHTML = estudiantes[i].identificacion;
            celR.innerHTML = estudiantes[i].celular;
            progR.innerHTML = estudiantes[i].programa;
        }

        divparr.innerText="Creado el " + new Date();

        setTimeout(() => {
            nombreR.innerHTML = "";
            identR.innerHTML = "";
            celR.innerHTML = "";
            progR.innerHTML = "";
          }, 3000);
    }
}