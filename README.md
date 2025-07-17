# Optimizador de Imagen Mediante Node.ss

## Descripción del problema

La mala optimización de imágenes en el desarrollo web puede generar una serie de problemas que afectan
directamente al rendimiento, afectando a la experiencia de usuario y el consumo de recursos, problemas
mas a detalle pueden ser los siguientes:

1. Lentitud en la carga del sitio.
2. Mala experiencia de usuario.
3. Aumento del consumo de ancho de banda y almacenamiento.
4. Retrasos en la carga de otros recursos.

## Solucíon a plantear

Desarrollar una aplicación mediante consola con Node.js que permita optimizar imagenes para su posterior
uso en proyectos web.

## Libreria a utilizar

La libreria a emplear es imagemin la cual es una libreria de Node.js que permite optimizar imagenes, reduciendo
tamaño en peso sin sacrificar visiblemente la claidad. Permitiendo comprimir archivos tipo JPG, PNG.

### Instalación de libreria imagemin

Mediante la consola emplearemos los siguientes codigos

```

npm instal imagemin

```

## Librerias secundarias

Como librerias secundarias añadir funcionalidades extras a las aplicaciones emplearemos las siguientes:

1. Inquirer : La cual emplearemos para desarrollar un menu interactivc mediante consola
2. Chalk: El cual permitira dar color a los mensajes de consola
3. Ora: Un spinner de carga

## Instalación de librerias secundarias

### Instalación de Inquirer

```

npm install inquirer@8

```

### Instalación de Chalk

```

npm install chalk@4

```

### Instalación de Ora

```

npm install ora

```

#### Problemas con libreria imagemin

Durante el proceso de desarrollo de la app, ocurrieron problemas de compatibilidad con dicha libreria las razones
por las cuales esto sucede es lo siguiente, lo principal es que imagemin es una libreria antigua para comprimir
imagenes, por lo que algunos paquetes de la libreria no funcionaran correctamente con versiones modernas de node.js,
llegando a presentar fallos a la hora de ejecutar.

#### Solución a emplear

La solución a emplear sera cambiar la libreria imagemin por la libreria sharp la cual sirve para comprimir imagenes pero
esta siendo una opción mas moderna, teniendo mejor compatibilidad con versiones actuales de node, aparte de eso es mas facil
de usar y permite trabajar con otros formatos de imagen a parte de jpg, png y webp.

## Instalación de libreria sharp

```

npm sharp

```

## Estructura del Proyecto

```

-EJERCICIO_NODEJS_OPTIMIZADOR_DE_IMAGEN/
|
|--.gitignore ** Para ignorar node_modules **
|
|--images/ ** Carpeta donde iran las imagenes originales **
|
|--output/ ** Carpeta donde se guardaran las imagenes comprimidas **
|
|--index.js ** Codigo principal **
|
|--package-lock.json ** Detalles exactos de las versiones de NPM **
|
|--package.json ** Archivo del proyecto **

```

## Ejecuión del programa

**Antes de ejecutar el programa carga la imagen que deseas optimizar en la carpeta images**

### Para correr el proyecto

1. Mediante la consola bash vamos a ejecutar el siguiente codigo

```

node index.js

```

2.  Una vez ejecutado el programa podemos escoger alguna de las dos opciones ya sea: "Optimizar imagen" o "Salir

3. Si damos en la opción "Optimzar imagen" el programa nos pedira que justifiquemos la ruta: Ejemplo

```

? Ingresa la ruta de la imagen a optimizar C:\Users\Rasmm\OneDrive\Escritorio\Ejercicio_NodeJs_Optimizador_de_Imagen\images\Taberna.jpg

```

4. Una vez especificada la ruta de origen de la imagena optimizar el programa procedera a procesarla y ubicarla en la carpeta "output"

5. Por otro lado si la opción que escogemos es "Salir", el programa nos mostrara un mensaje de despedida y finalizara

#### Cosas a tener en cuenta

En la sección de codigo

```

    try{
        await sharp(rutaOriginal)
        .resize({ width: 800}) // Redimenciona la imagen a 800px de anchoe
        .jpeg({ quality: 70}) // Reduce la calidad de imagen al 70% para bajar el peso de esta
        .toFile(rutaSalida); // Guarda la imagen optimizada

```

en las lineas **resize** y **jpeg** podemos cambiar en el primer caso el width y en el segundo caso cambiar la extensión de la imagen sin ningun problema dependiendo del tipo de imagen que sea requerida, por ejemplo:

```

    try{
        await sharp(rutaOriginal)
        .resize({ width: 1200}) // Redimenciona la imagen a 800px de anchoe
        .webp({ quality: 70}) // Reduce la calidad de imagen al 70% para bajar el peso de esta
        .toFile(rutaSalida); // Guarda la imagen optimizada

```