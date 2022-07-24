document.body.innerHTML=""
document.body.classList=""
let mainProblema1=document.createElement(`DIV`)
mainProblema1.classList.add(`main-problema1`)
mainProblema1.innerHTML=`<form autocomplete="off">
<h2>Inscripción de materias adeudadas</h2>
<input type="text" placeholder="Nombre" id="nombre" required>
<input type="email" placeholder="Email" id="email" required>
<input type="text" placeholder="Materia adeudada" id="materia" required>
<input type="submit" value="Solicitar mesa" id="btn-enviar">
<div class="resultado"></div>
</form>`
document.body.appendChild(mainProblema1)
const nombre=document.querySelector(`#nombre`);
const email=document.querySelector(`#email`);
const materia=document.querySelector(`#materia`);
const enviar=document.querySelector(`#btn-enviar`);
const resultado=document.querySelector(`.resultado`)


enviar.addEventListener(`click`, (e)=> {  
    e.preventDefault()
    let error=validarCampos();
    if (error[0]) {
        resultado.innerHTML=error[1]
        resultado.classList.add(`red`)
    }else {
        resultado.innerHTML=`Solicitud enviada correctamente`;
        resultado.classList.add(`green`)
        resultado.classList.remove(`red`)
    }
})

const validarCampos= ()=> {
    let error= [];
    if (nombre.value.length<5|| nombre.value.length>40) {
        error[0]=true
        error[1]=`El nombre es inválido`
        return error;
    }else if (  email.value.length<5 ||
                email.value.length > 40 ||
                email.value.indexOf(`@`) == -1 ||
                email.value.indexOf(`.`)== -1){
        error[0]=true
        error[1]=`El mail es inválido`
        return error
    }else if (materia.value<4 || materia.value>40) {
        error[0]=true
        error[1]=`La materia no existe`
    }
    error[0]=false
    return error
}