# Web SCIO
## Containerización con docker

### Construir la imagen del contenedor
Para construir la imagen a partir del archivo Dockerfile, se debe ejecutar el siguiente comando desde el root del proyecto:
```shell
docker build -t web-scio .
```
Esto construye la imagen llamada 'web-scio'. Este comando solo se debe ejecutar una vez, a menos que cambien los archivos:
* `package.json`
* `.dockerignore`
* `Dockerfile`

### Ejecutar el contenedor
Para correr el contenedor se ejecuta el comando desde la terminal, en el root del proyecto:
```shell
docker run -it -p 5173:5173 -v $(pwd):/app -v /app/node_modules web-scio
```
El sitio es accesible a través del link: http://localhost:5173/

### Matar el contenedor que está corriendo
Para detener el contenedor corriendo en la terminal se usa `Ctrl+c`.

Si se cierra la terminal sin detener el contenedor o si el contenedor sigue ejecutándose en segundo plano, debes seguir estos pasos:

1. Listar los contenedores en ejecución:
```shell
docker ps
```

2. Identificar el ID del contenedor web-scio en la lista

3. Detener el contenedor usando su ID:
```shell
docker stop [ID_DEL_CONTENEDOR]
```

4. Para eliminar completamente el contenedor (opcional):
```shell
docker rm [ID_DEL_CONTENEDOR]
```