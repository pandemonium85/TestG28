const servidorWeb = require("express");

const app = servidorWeb();
const puerto = 3000;

app.get('/', ( req, res ) => {

    res.send(" Estas consultando la raiz de la API");
});

app.get('/persona', ( req, res ) => {

    let persona= {
        "nombre": "Diego Fernando",
        "apellido": "montalvo monsalve",
        "estadoCivil": "Union libre",
        "tieneHijos": false,
        "edad": 25,
        "medicoAsignado" : "{ \"id\" : 123, \"nombre\": \"medico 1\" , \"licencia\" : \"123456\" }" 
        }

        res.send(persona);
});

app.listen(puerto, () => {
   console.log("El servidor esta en ejecucion el puerto" + puerto);
} );
