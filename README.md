INSTRUCCIONES
JHON STEWAR NUÑEZ CASTELLANOS - 2171066
CARLOS EDUARDO BECERRA LIZARAZO - 2171844

creacion de la red

docker network create --subnet=172.17.0.0/16 soft3

creacion docker mongo

docker run -d --net soft3 --ip 172.18.0.2 -p27017:27017 -e MONGO_INITDB_ROOT_USERNAME=root -e MONGO_INITDB_ROOT_PASWORD=root mongo

creacion docker mongo-express

docker run -d --net soft3 --ip 172.18.0.3 -p8081:8081 -e ME_CONFIG_MONGODB_ADMINUSERNAME=root -e ME_CONFIG_MONGODB_ADMINPASSWORD=root -e ME_CONFIG_MONGODB_URL=mongodb://root:root@172.18.0.2:27017/ mongo-express

creacion docker redis

docker run -d --net soft3 --ip 172.18.0.4 --name redis -p6379:6379  redis --requirepass "123456"

luego en 

localhost:3000/addPersonas   llenamos el formulario  y en 

localhost:8081/db/db_personas/personas     apareceran los registros de mongo. 

 para los registros de redis en la terminal colocamos 

docker exec -it redis bash

redis-cli

auth 123456

hvals 0 (numero del id asignado al ingresar los datos en el formulario se comienza por 0)
