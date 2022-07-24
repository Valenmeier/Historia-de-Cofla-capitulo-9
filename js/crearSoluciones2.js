document.body.classList.add(`centrar`)
let alumnos= [ {
    nombre:`Valentin Meier`,
    email: `ValentinMeier123@gmail.com`,
    materia: `matemática`,
},{
    nombre:`César Galindez`,
    email: `Valensaurio@gmail.com`,
    materia: `literatura`,
},{
    nombre:`Jorge Ramirez`,
    email: `Jorge Ramirez@gmail.com`,
    materia: `fisica 1`,
},{
    nombre:`Facundo Roberto`,
    email: `Robbert@gmail.com`,
    materia: `fisica 2`,
},{
    nombre:`Coffla XD`,
    email: `Coffla@gmail.com`,
    materia: `recreo`,
}
]
document.body.innerHTML=`<div class="grid-container"></div>`
for (alumno in alumnos) {
    let datos=alumnos[alumno]
    let nombre=datos[`nombre`]
    let email=datos[`email`]
    let materia=datos[`materia`]
    let htmlCode= `
    <div class="nombre grid-item">${nombre}</div>
    <div class="email grid-item">${email}</div>
    <div class="materia grid-item">${materia}</div>
    <div class="semana grid-item">
        <select class="semana-elegida">
            <option value="Semana 1">Semana 1</option>
            <option value="Semana 2">Semana 2</option>
        </select>
    </div>
`
   document.querySelector(`.grid-container`).innerHTML+=`${htmlCode}`
   
}
document.body.innerHTML+=`<button class="boton-confirmar">confirmar</button>`
const boton=document.querySelector(`.boton-confirmar`);

boton.addEventListener(`click`,()=> {
    let confirmar= confirm(`¿Realmente quieres confirmar las mesas?`)
    if (confirmar) {
        document.body.removeChild(boton)
    let elementos=document.querySelectorAll(`.semana`)
    let semanasElegidas=document.querySelectorAll(`.semana-elegida`);
    for(elemento in elementos) {
        let semana=elementos[elemento]
        semana.innerHTML=semanasElegidas[elemento].value
    }
    }
})