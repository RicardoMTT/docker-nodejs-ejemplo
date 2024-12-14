# APP NODEJS CON DOCKER

## Aplicar cambios al contenedor

Realiza los cambios que requieras

Reconstruir la imagen de docker, con el siguiente comando podrás reconstruir la imagen de docker con el nuevo codigo que hayas actualizado.

```
    docker build -t express-servidor .
```

Detener el contenedor antiguo(si esta en ejecución)

Crear el contenedor con la nueva imagen, una vez que hayas reconstruido la imagen de docker, debes ejecutar un comando para crear un contenedor basado en la imagen actualizada.

```
    docker run -d -p 3000:3000 --name express-servidor-contenedor --rm express-servidor
```

## Explicación de los parametros

-p 3000:3000: Mapea el puerto 3000 del contenedor al puerto 3000 de tu máquina local (puedes cambiar los números si usas otros puertos). [HOST_PORT]:[CONTAINER_PORT]

--name mi-servidor-express: Asigna el nombre mi-servidor-express al contenedor. Este nombre lo usarás para referirte al contenedor en otros comandos.
    
--rm: El contenedor se eliminará automáticamente cuando se detenga.

-d: Para ejecutar el contenedor en segundo plano, sino usamos esta opción la terminal quedara parada hasta que lo detengas manualmente.
    
servidor-express: El nombre de la imagen que estás usando para crear el contenedor
