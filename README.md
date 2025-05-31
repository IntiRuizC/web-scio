# Web SCIO
## Containerización con docker

### Ejecutar el contenedor de desarrollo
Para correr el contenedor bajo el archivo docker-compose-dev.yml se ejecuta el comando desde la terminal, en el root del proyecto:
```shell
docker compose -f docker-compose-dev.yml up
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