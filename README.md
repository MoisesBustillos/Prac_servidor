# Proyecto Cliente-Servidor

Este proyecto consiste en un simple cliente y servidor TCP implementado en Node.js. El cliente se conecta al servidor y puede enviar mensajes, los cuales serán procesados y respondidos por el servidor.

## Requisitos

- Node.js (v14 o superior)

## Instalación

1. Clona este repositorio:
    ```sh
    git clone https://gitlab.com/usuario/proyecto.git
    cd proyecto
    ```

2. Instala las dependencias (si las hubiera):
    ```sh
    npm install
    ```

## Uso

### Iniciar el Servidor

Para iniciar el servidor, ejecuta el siguiente comando:
```sh
node server.js

El servidor escuchará en el puerto 5000 en 127.0.0.1.
Iniciar el Cliente

Para iniciar el cliente, abre otra terminal y ejecuta el siguiente comando:


node client.js

El cliente se conectará al servidor en 127.0.0.1:5000.
Funcionalidades
Cliente

    Se conecta al servidor en el puerto 5000.
    Envia mensajes al servidor desde la entrada estándar del usuario.
    Muestra mensajes recibidos del servidor.

Servidor

    Escucha conexiones entrantes en el puerto 5000.
    Responde a los mensajes enviados por el cliente.
    Permite enviar mensajes desde la entrada estándar del servidor al cliente.

Estructura del Proyecto


.
├── client.js        # Código del cliente
├── server.js        # Código del servidor
└── README.md        # Documentación del proyecto

Contribución

Si deseas contribuir a este proyecto, por favor sigue los siguientes pasos:

    Haz un fork del repositorio.
    Crea una nueva rama (git checkout -b feature/nueva-funcionalidad).
    Realiza tus cambios y haz commit de los mismos (git commit -am 'Añadir nueva funcionalidad').
    Sube tus cambios a tu rama (git push origin feature/nueva-funcionalidad).
    Crea un nuevo Pull Request.

Licencia

Este proyecto está licenciado bajo la Licencia MIT. Para más detalles, consulta el archivo LICENSE.




Guarda este contenido en un archivo llamado `README.md` en la raíz de tu proyecto. Luego, agrégalo y súbelo a GitLab:


git add README.md
git commit -m "Añadir archivo README"
git push
