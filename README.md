# Proyecto  red-bicicletas  -- REST API
mongo-express  back bicicletas

## skeleto - scaffolding 

scaffolding creado con express-generator : https://expressjs.com/en/starter/generator.html

view engine "Pug": https://github.com/pugjs/pug  (open version of Jade) 

## Bootstrap Templates

https://startbootstrap.com/themes/

## HTML TO PUG

https://html-to-pug.com/

##MAPAS

https://leafletjs.com/


## DEBUG
DEBUG=red_bicicletas2:* npm run devstart

## POSTMAN

if you get a error

"asusn56@nautilus-N56:~$ postman
cannot perform readlinkat() on the mount namespace file descriptor of the init process: Permission denied"

 when try to lauch a postman in linux (install with snap), execute this:

 sudo snap refresh core --edge

 reference: https://askubuntu.com/questions/1042270/snap-apps-now-wont-start-with-cannot-perform-readlinkat-error


 ## NOTAS:
 for check uptades packages

  - 1)instalar npm-check-updates global: npm install -g npm-check-updates
  - 2)Ejecuta y comprueba tu package.json del proyecto: ncu
  - 3)ncu u
  - 4) npm update