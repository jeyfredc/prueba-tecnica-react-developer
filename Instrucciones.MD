 
**Desplegar Frontend**

*Pasos*
- ubicar la carpeta tvShowsApp e ingresar y ejecutar por consola `npm i`
- Despues de realizar la instalaciòn de dependencias ejecutar `npm run dev`
- Al ejecutar el comando se abrira localhost en el puerto 5173 http://localhost:5173/

- La aplicaciòn tiene las rutas login, series y movies quedo en funcionamiento el boton del login para redirigir en primer lugar a las series y luego poderse desplazar entre series y movies, quedo en el parrafo un acceso a una ventana modal donde se carga la imagen , titùlo, descripciòn y año. Las url de las imagenes no estan funcionando por lo tanto se cargo una sola imagen para todas

**Desplegar Backend**

*Pasos*

- ubicar la carpeta tvShowsApp-back/tv_shows e ingresar y ejecutar por consola para crear el entorno virtual :
    - **Linux** `python3 -m venv env` 
    - **windows** `python -m venv env`
- Activar el entorno virtual
    - **Linux** `source/env/bin/activate`
    - **windows** `env\Scripts\activate`

- Despues de activar el entorno virtual ejecutar `pip install -r requirements.txt` verificar que la ruta donde se encuentre este el arhivo requirements.txt
- Para dejar en funcionamiento el back de la aplicaciòn ejecutar `python3 manage.py runserver 8005` 

**Desplegar Sql**

*Pasos*

- Abrir pgAdmin4 y crear base de datos con el nombre *movie_series*, el host poner *localhost*, nombre de usuario *jeyfredc*, Contraseña:*123456*

- Despues de crear la base de datos abrir el archivo sql.sql y ejecutar todas las sentencias sql en la terminal a continuación dejo algunas sentencias para verificar las series y movies que se van a listar despues de que todo este ejecutado correctamente

- **series** : select * from list.tv_shows ts where ts.program_type ='series' and ts.release_year >=2010 order by ts.title limit 20
- **movies** : select * from list.tv_shows ts where ts.program_type ='movie' and ts.release_year >=2010 order by ts.title limit 20

