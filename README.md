# Pueba Tecnica - Ezequiel Martinez

## Como Inicializar El Proyecto:

    - Para iniciar el proyecto siga los siguientes pasos:
     - Abra una Terminal (Control + j (en windows))
     - Asegurese de estar situado en la carpeta Back para inicializar el proyecto
     - Luego Estando en la carpeta /Back Escriba "npm i" (sin las comillas)
     - una vez terminado de instalar las dependencias escriba npm start para inicializar el servidor

  ## ACLARACION 
   - LA BASE DE DATOS ESTA DEPLOYADA EN RAILWAY POR LO QUE NO DEBERA CREARSE UNA EN SU COMPUTADORA

  ## SEGURIDAD
  - Para la seguridad de los datos estan las variables de entorno de la base de datos deployada
    estan en un archivo .env

    ## Recorrido
    - Codigo Modularizado, Puede ver las funciones que obtienen informacion en Controllers,
    En Models los modelos tanto de Producto, Usuarios como Las Entradas de nuevos productos

    - Para ver las rutas En /Routes/index.js vera que cada ruta esta modularizada dirigida segun
    lo que contresponda en /products para los productos, /users usuarios y /entry para las nuevas entradas de produtos

    # COMO ACCEDER
     - Para aceeder a las funcionalidades haga lo siguiente:

     - **Ver todos los productos**:
     - dirijase a http://localhost:3001/products
     - **Ver un producto en especifico**:
     - dirijase a http://localhost:3001/products/1 (o en lugar de 1 la id del producto)


     - **Ver todos los usuarios**:
     - dirijase a http://localhost:3001/users
     - **Ver un usuario en especifico**:
     - dirijase a http://localhost:3001/users/ezeelmartinez@gmail.com 
                (o en lugar de ezeelmartinez@gmail.com el gmail del usuario requerido)


    - **Ver todos los ingresos de productos**:
    - dirijase a http://localhost:3001/entry
    
    - **USUARIOS**:
    - Todos los usuarios tienen en su modelo foto de perfil y direccion, esta creada la ruta para su posterior uso en el frontend, la ruta esta completamente funcionar puede probarlo utilizando Postman y hacer un Put para modificar tanto su foto como su direccion

    - **PRODUCTOS**:
    - Esta creada la ruta para poder crear productos completamente funcional tambien, obteniendo como parametros ISBN, Titulo del libro, precio, autor, editorial y numero de existencias. Tambien esta la ruta (put) lista para unirse con el frontend y poder modificar las existencias.
    De igual forma puede probar la ruta Put para modificar existencias utilizando Postman y haciendo un put hacia http://localhost:3001/products


    - **Ver entradas de nuevos producots**:
    - Para ver entradas de nuevos productos dirijase hacia http://localhost:3001/entry 
    y vera todas las compras de productos indicando el nombre del producto, el distribuidor y la
    cantidad de productos obtenidos

    ## Recomendaciones
    - **Recomendaciones**:
    - Para Mayor seguridad a la hora de tratar con datos sensibles no recomiendo crear un tipo de dato con la contraseña en los modelos sino utilizar auth0 para gestionar de una manera mas segura
    y facil el registro de usuarios de igual manera para crear un carrito de compras acostumbro hacerlo en el frontend

    ## Tiempo de realizacion
    - 2horas y 21Minutos
    
## Objetivos del Construir

 - **Registro de usuarios**:
    - Los usuarios deben estar en la capacidad de registrarse indicando un correo electrónico, un nombre y una contraseña.
- **Autenticación de usuarios:**
    - Los usuarios podrán ingresar en su cuenta ingresando el correo y contraseña del registro.
- **Perfil de Usuarios:**
    - Los usuarios podrán agregar una dirección de residencia y una foto de perfil.
    - La dirección de residencia y foto de perfil se puede editar en cualquier momento.
- **Inventario de productos:**
    - Se debe poder agregar libros indicando el ISBN, título del libro, precio, autor, editorial y número de existencias.
    - En un futuro queremos tener más productos, pero no tenemos características especificas para esos productos, más allá del precio, código, nombre del producto y número de existencias.
    - Se debe poder actualizar las existencias de los producto ens cualquier momento.
    - Se debe poder registrar el ingreso (compra) de un producto indicando el distribuidor y la cantidad comprada.
    - Se debe poder consultar la lista de productos con sus existencias.
- **Productos**
    - El usuario debe poder agregar un producto al carrito de compras.
    - El usuario debe poder comprar un producto
        - Si no hay existencias, se le debe notificar al usuario al finalizar la compra.
    - El usuario debe poder consultar la lista de productos.
- Plus si construye el API con NodeJs.
- Se debe conectar a una base de datos. Plus si utiliza PostgreSQL y Prisma como ORM.
- Es importante que el API tenga documentación que explique como es su manejo.
- Tenga en cuenta parámetros de seguridad y documente que implementaciones de seguridad ha utilizado.