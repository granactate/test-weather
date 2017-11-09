# Prueba aplicación del clima
    

los objetivos de esta prueba es medir los conocimientos del desarrollador en javascript, css y html así como 
también su logica.


debe crear una aplicación utilizando el api gratuita para el  clima 
[https://openweathermap.org/api](https://openweathermap.org/api) pensada para celular y tabletas 
puede despreciar como se vera la aplicación en una vista desktop pero en una vista movil debe poder
desplegarse la información correctamente.

1. el usuario al iniciar en el sitio vera una lista desplegable con el listado de
capitales de latinoamerica y un boton principal que le permitira al usuario consultar
el clima de la capital seleccionada

2. una ves el usuario selecciono una capital el sistema debe consultar en el api 
para obtener la información del clima  se debe mostrar la información del clima de la ciudad selccionada(temperatura , descripción en **español** e icono este puede ser el que provee el api)

3. el usuario podra escoger si quiere ver el clima en grados centigrados o fahrenheit y tiene que
t y poder cambiar de uno al otro con algun componente grafico(_ya sea un boton, un radio button etc_)

4. ubique en un mapa de google maps un marcador indicando la posición de la capital en el mapa

5. esta api es gratuita pero tiene un limite de uso por lo tanto es importante evitar las solicitudes
redundantes así que debe implementar algun mecanismo de cache que le permita prevenir enviar la misma solicitud
al api cuando esta se ha hecho con menos de 15segundos de diferencia 