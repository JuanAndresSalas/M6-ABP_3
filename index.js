import express from "express";
import {dirname, join} from "path";
import {fileURLToPath} from "url";
import hbs from "hbs";


const localidades = {
    "localidad 1": {"Continente": "África", "Pais": "Angola","Capital": "Luanda"},
    "localidad 2": {"Continente": "América del Norte","Pais": "Estados Unidos","Capital": "Washington DC"},
    "localidad 3": {"Continente": "América Central","Pais": "México","Capital": "Ciudad de México"},
    "localidad 4": {"Continente": "América del Sur","Pais": "Brasil","Capital": "Brasilia"},
    "localidad 5": {"Continente": "Europa","Pais": "España","Capital": "Madrid"},
    "localidad 6": {"Continente": "Europa","Pais": "Alemania","Capital": "Berlín"},
    "localidad 7": {"Continente": "Oceanía","Pais": "Australia","Capital": "Camberra"},
    "localidad 8": {"Continente": "Asia","Pais": "Japón","Capital": "Tokio"}
}

const banderas =    ['https://upload.wikimedia.org/wikipedia/commons/9/9d/Flag_of_Angola.svg',
                    "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Flag_of_the_United_States.svg/1200px-Flag_of_the_United_States.svg.png",
                    "https://upload.wikimedia.org/wikipedia/commons/thumb/9/92/Flag_of_Mexico.jpg/1200px-Flag_of_Mexico.jpg",
                    "https://img.freepik.com/vector-gratis/ilustracion-bandera-brasil_53876-27017.jpg",
                    "https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Bandera_de_Espa%C3%B1a.svg/1200px-Bandera_de_Espa%C3%B1a.svg.png",
                    "https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Flag_of_Germany.svg/800px-Flag_of_Germany.svg.png",
                    "https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/Flag_of_Australia_%28converted%29.svg/1200px-Flag_of_Australia_%28converted%29.svg.png",
                    "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Flag_of_Japan.svg/1200px-Flag_of_Japan.svg.png"]


let arreglo = [];
let i = 0;
for (let clave in localidades){
    localidades[clave].imagen = banderas[i]
    arreglo.push(localidades[clave])
    i++
}

const app = express()
const __dirname = dirname(fileURLToPath(import.meta.url))

app.set("view engine", "hbs")
app.use(express.static("public"))
hbs.registerPartials(join(__dirname,"views/partials"))




app.listen(3000, function(){
    console.log("Servidor en puerto 3000")
})


app.get("/", (req,res) =>{
    res.render("index",{arreglo})
})


    
    
