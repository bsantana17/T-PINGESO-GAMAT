T/PINGESO GAMAT
 
 ## Rutas Servicios
 
##Request
*Formato:
{}


-/request/create (post) : crea una nueva request, con el estado pendiente por revisar
-/request/{idUser}/owned (get): lista las request de un determinado tipo de usuario (aprobador,jefe de obra,comprador)

-/request/update (put): actualiza una determinada request, recibe un objto request con los nuevos datos ( este servicio seria principalmente para el cambio de estado)

-/request/delete/{id} (delete) : elimina una detemrinada request 

## Building

-/buildings/requests/{id} (get) : obtener las request de una determinada obra 
-/buildings (get) : retorna todas las obras 

##User

-users/login (post) :recibe mail  y contraseña, para validar a un usuario

##Budget
-/budgets (get) : retorna toda las cotizaciones
-/budgets/approved (get): retorna  coizaciones aprobadas 
-/budgets/create (post) : crear una nueva cotizacion  
-/driver/{id} (put): enviar contizacion


