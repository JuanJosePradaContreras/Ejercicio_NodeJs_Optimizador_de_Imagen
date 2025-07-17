// 1. Importación de los modulos

const fs = require("fs")  // Lee y guarda los archivos
const path = require("path") // Maneja los nombres de los archivos y las rutas
const inquirer = require("inquirer") // Lo que permite crear el menu interactivo
const chalk = require("chalk") // Modulo para darle color a los mensajes de consola
const ora = require("ora").default; // Muestra un spinner mientras se comprimen las imagenes
const sharp = require("sharp") // Modulo que se encargara de comprimir las imagenes
const { type } = require("os")

// 2. Funcion empleando sharp para la optimización de imagenes

async function optimizarImagen(rutaOriginal, rutaSalida) {
    const spinner = ora ("Optimizando Imagen ...").start();  // Se muestra una animación mientras trabaja

        
    if (!fs.existsSync("output")) {
      fs.mkdirSync("output"); // Verificar si la carpeta output existe, si no, crearla
    }
   
    const extension = path.extname(rutaOriginal); // Obtener nombre base y extensión
    const nombreBase = path.basename(rutaOriginal, extension);

    const output = path.join("output", `${nombreBase}_opt${extension}`);  // Ruta de salida en carpeta output

    try{
        await sharp(rutaOriginal)
        .resize({ width: 800}) // Redimenciona la imagen a 800px de anchoe
        .jpeg({ quality: 70}) // Reduce la calidad de imagen al 70% para bajar el peso de esta
        .toFile(rutaSalida); // Guarda la imagen optimizada

        spinner.succeed("Imagen optimizada correctamente"); // Esto detiene el spinner y muestra un mensaje de exito si la imagen se optimizo correctamente
    } catch (error) {
        spinner.fail("Error al optimizar la imagen"); // Esto detiene el spinner y muestra un mensaje de error si algo fallo durante el proceso
        console.error(chalk.red(error))
    }
    
}

// 3. Función para emplear el menu interactivo

async function main() {
    console.clear(); // Limpia la consola para que el menú se vea limpio y ordenado

    console.log(chalk.cyan.bold("Optimizador de imagenes con sharp\n")) //Muestra el titulo de la app en un tono cyan y el \n al final es para dejar una linea en blanco luego del titulo

    const respuesta = await inquirer.prompt([
        {
            type: "list", //Indica que el tipo de pregunta sera una lista de opciones
            name: "opcion", // El resultado se guardara en una propiedad llamada "opcion"
            message: "¿Qué deseas hacer?", // Texto que se mostrara como pregunta
            choices: ["Optimizar imagen", "Salir"], // Opciones disponibles
        },
    ]); // Esta constante lo que hara es mostrar el menú con opciones interactivas para el usuario y espera su respuesta

    if (respuesta.opcion === "Optimizar imagen") {  // Esto se emplea en el caso de que el usuario elija "Optimizar imagen"

        const { rutaOriginal } = await inquirer.prompt([
            {
                type: "input", //Indica que el tipo de pregunta sera un input proporcionado por el usuario
                name: "rutaOriginal", //El resultado se guarda como ruta original
                message: "Ingresa la ruta de la imagen a optimizar", // Este es el mensaje que vera el usuario
            },
        ]);
        if(!fs.existsSync(rutaOriginal)) {
            console.log(chalk.red("La ruta ingresada no existe"));
            return;
        }

        const nombre = path.basename(rutaOriginal); // Esta constante con la cual obtenemos la carpeta donde esta ubicada la imagen original

        const extension = path.extname(nombre); // Esta constante es con la cual extraeremos el nombre del archivo (por ejemplo: imagen.jpg)

        const nombreBase = path.basename(nombre, extension);

        const rutaSalida = path.join("output", `${nombreBase}_opt${extension}`); // Esta constante es con la cual crearemos la ruta donde se guardara la imagen optimizada, usando el prefijo "opt-"

        await optimizarImagen(rutaOriginal, rutaSalida); // Con esta linea de codigo llamaremos a la función que se encargara de optimizar la imagen y esperamos a que la termine
    } else {
        console.log(chalk.green("\n !Hasta luego¡")); // Si el usuario elige la opción salir, este sera el mensaje de despedida en color verde
    }
}

// 4. Ejecutar la función

main();