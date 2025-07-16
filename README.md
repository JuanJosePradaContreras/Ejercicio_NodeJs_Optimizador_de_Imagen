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

npm install inquirer

```

### Instalación de Chalk

```

npm install chalk

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

